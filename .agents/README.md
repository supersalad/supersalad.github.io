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
Run this first in every session:

```bash
export GH_TOKEN="$AGENT_GH_TOKEN"
git config --global user.name  "folkessontechagent"
git config --global user.email "356563664+folkessontechagent@users.noreply.github.com"
git remote set-url origin "https://x-access-token:${AGENT_GH_TOKEN}@github.com/supersalad/supersalad.github.io.git"
gh api user --jq .login   # must print folkessontechagent; stop otherwise
```

- Use `git` for code and `gh api` (REST) for every other GitHub action. Do not use `gh pr`/`gh issue` subcommands (blocked in Devin sessions) or Devin's built-in git/PR tools (they act as the Devin bot).
- Never push to `main`, never merge, never force-push, never change repo settings or labels other than `agent`, `agent-review`, `agent-blocked`.

## GitHub API cheat sheet

```bash
R=repos/supersalad/supersalad.github.io
gh api $R/issues/<n>                                    # issue or PR metadata (title, body, labels, author)
gh api $R/issues/<n>/comments                           # conversation comments (issues and PRs)
gh api $R/issues/<n>/comments -F body=@/tmp/comment.md  # post a comment
gh api $R/issues/<n>/labels -f "labels[]=<label>"       # add a label
gh api -X DELETE $R/issues/<n>/labels/<label>           # remove a label (404 = not present)
gh api $R/pulls -f title="<t>" -f head=<branch> -f base=main -F body=@/tmp/pr.md --jq .number   # open a PR
gh api "$R/pulls?head=supersalad:<branch>&state=open"   # find the PR for a branch
gh api $R/pulls/<pr>                                    # PR metadata (head.ref, state)
gh api $R/pulls/<pr> -H "Accept: application/vnd.github.diff"   # PR diff
gh api $R/pulls/<pr>/comments                           # inline review comments
gh api $R/pulls/<pr>/reviews                            # reviews
```

## Task file (state)

- One file per issue: `.agents/tasks/issue-<number>.md`, created by the Coordinator from [tasks/TEMPLATE.md](tasks/TEMPLATE.md), committed on the feature branch.
- It lives under `.agents/` because Jekyll skips dot-directories. A root-level `todo.md` would be published on folkessontech.com (GitHub Pages enables `jekyll-optional-front-matter`), and two issues would conflict on the same file.
- The Developer ticks checkboxes and appends to the Log as it works, committing as it goes.
- Review rounds are counted from the PR itself: the number of comments containing `Validator: CHANGES REQUESTED`. Max 3; after that the Validator asks for a human.

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
