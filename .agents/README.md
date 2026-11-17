# Agentic development flow (V1)

Three Devin Automations act on this repo as the collaborator account. A human always merges.

```
issue + label `agent` ──► Coordinator ──push "coordinator:" commit──► Developer ──PR + label `agent-review`──► Validator
                                                                         ▲                                    │
                                                                         └──── comment starting with `/dev` ◄─┘ (changes requested)
                                                                                                              │
                                                                               human merges ◄── "Validator: APPROVED"
```

| Agent | Trigger | Instructions |
|---|---|---|
| Coordinator | issue labeled `agent` | [coordinator.md](coordinator.md) |
| Developer | push to `agent/*` whose commit message starts with `coordinator:`; PR comment starting with `/dev` | [developer.md](developer.md) |
| Validator | PR on `agent/*` labeled `agent-review` | [validator.md](validator.md) |

## Identity (all agents)

Every agent acts as `folkessontechagent` (token in the `AGENT_GH_TOKEN` secret), never as `supersalad` and never as the Devin bot.

Devin keeps `AGENT_GH_TOKEN` out of the shell unless a command binds it. In a plain shell `$AGENT_GH_TOKEN` is empty, and `gh` then silently uses the Devin bot's login. Also, the `gh` on Devin's `PATH` is a wrapper that replaces `GH_TOKEN` with the Devin bot's token whenever it runs inside the repo checkout (this is what causes `403 Resource not accessible by integration`). Always call the real binary, `/usr/bin/gh`, never plain `gh`. Do this first in every session:

1. Start one persistent shell and bind these in the exec tool's `env` when you start it (`env` only applies when a shell starts):

   ```json
   {
     "AGENT_GH_TOKEN": "secret:org:AGENT_GH_TOKEN",
     "GH_TOKEN": "secret:org:AGENT_GH_TOKEN",
     "GIT_AUTHOR_NAME": "folkessontechagent",
     "GIT_AUTHOR_EMAIL": "356563664+folkessontechagent@users.noreply.github.com",
     "GIT_COMMITTER_NAME": "folkessontechagent",
     "GIT_COMMITTER_EMAIL": "356563664+folkessontechagent@users.noreply.github.com"
   }
   ```

2. Run every `git` and `/usr/bin/gh` command for this repo in that shell (reuse its `shell_id`). Any other shell acts as the Devin bot. Do not run `git config`; the `GIT_*` variables set the commit identity.
3. Check the identity in that shell:

   ```bash
   /usr/bin/gh api user --jq .login   # must print folkessontechagent
   ```

   If it prints anything else or fails, stop and report why. Do not work around it with `curl`, another token, or Devin's built-in tools.
4. Push with the token URL, not `origin` (which uses the Devin app's credentials):

   ```bash
   git push "https://x-access-token:${AGENT_GH_TOKEN}@github.com/supersalad/supersalad.github.io.git" HEAD:<branch>
   ```

- Use `git` for code and `/usr/bin/gh api` (REST) for every other GitHub action. Do not use `gh pr`/`gh issue` subcommands (blocked in Devin sessions) or Devin's built-in git/PR tools (they act as the Devin bot).
- Never push to `main`, never merge, never force-push, never change repo settings or labels other than `agent`, `agent-review`, `agent-blocked`.

## GitHub API cheat sheet

```bash
R=repos/supersalad/supersalad.github.io
/usr/bin/gh api $R/issues/<n>                                    # issue or PR metadata (title, body, labels, author)
/usr/bin/gh api --paginate $R/issues/<n>/comments                # conversation comments (issues and PRs)
/usr/bin/gh api $R/issues/<n>/comments -F body=@/tmp/comment.md  # post a comment
/usr/bin/gh api $R/issues/<n>/labels -f "labels[]=<label>"       # add a label
/usr/bin/gh api -X DELETE $R/issues/<n>/labels/<label>           # remove a label (404 = not present)
/usr/bin/gh api $R/pulls -f title="<t>" -f head=<branch> -f base=main -F body=@/tmp/pr.md --jq .number   # open a PR
/usr/bin/gh api "$R/pulls?head=supersalad:<branch>&state=open"   # find the PR for a branch
/usr/bin/gh api $R/pulls/<pr>                                    # PR metadata (head.ref, state)
/usr/bin/gh api $R/pulls/<pr> -H "Accept: application/vnd.github.diff"   # PR diff
/usr/bin/gh api --paginate $R/pulls/<pr>/comments                # inline review comments
/usr/bin/gh api --paginate $R/pulls/<pr>/reviews                 # reviews
```

## Task file (state)

- One file per issue: `.agents/tasks/issue-<number>.md`, created by the Coordinator from [tasks/TEMPLATE.md](tasks/TEMPLATE.md), committed on the feature branch.
- It lives under `.agents/` because Jekyll skips dot-directories. A root-level `todo.md` would be published on folkessontech.com (GitHub Pages enables `jekyll-optional-front-matter`), and two issues would conflict on the same file.
- The Developer ticks checkboxes and appends to the Log as it works, committing as it goes.
- Review rounds are counted from the PR itself (always fetch comments with `/usr/bin/gh api --paginate`): the number of comments containing `Validator: CHANGES REQUESTED`. Max 3; after that the Validator asks for a human.

## Labels

- `agent`: human adds to an issue to start the flow.
- `agent-review`: Developer adds to the PR when ready; the Validator removes it when it starts.
- `agent-blocked`: any agent adds when it needs a human; it explains why in a comment.

## Comment conventions

- Comments starting with `/dev` (from a human or the Validator) send work back to the Developer.
- Validator verdicts start with `Validator: APPROVED`, `/dev` + `Validator: CHANGES REQUESTED (round k/3)`, or `Validator: NEEDS HUMAN`.

## Verifying a change

```bash
bundle install
bundle exec jekyll build   # must succeed with no errors
```
