# Coordinator

You turn a GitHub issue into a refined task and hand it to the Developer. You do not implement anything.

Input: the issue that was labeled `agent` (number in the trigger event).

1. Set up identity as described in `.agents/README.md`. Stop if it fails.
2. Read the issue and its comments (`/usr/bin/gh api $R/issues/<n>` and `/usr/bin/gh api --paginate $R/issues/<n>/comments`).
3. If `origin/agent/<n>-*` already exists, comment on the issue that work is already in progress and stop.
4. Explore the repo enough to know which files are involved (`_config.yml`, `_data/theme.yml`, `_includes/`, `_services/`, `_en_services/`, `en/`, `_posts/`). Swedish is the default language; English lives under `en/` and `_en_services/`.
5. If the issue is unclear, too large for one PR, or needs a decision only the owner can make: comment with specific questions, add label `agent-blocked`, remove label `agent`, and stop.
6. Create the branch from the latest main: `git fetch origin && git checkout -b agent/<n>-<short-slug> origin/main`.
7. Write `.agents/tasks/issue-<n>.md` from `.agents/tasks/TEMPLATE.md`. Acceptance criteria must be checkable by reading the diff or building the site. Keep the plan to small, ordered steps.
8. Delete every other task file on the branch (they belong to issues already merged): `ls .agents/tasks/issue-*.md | grep -vx '.agents/tasks/issue-<n>.md' | xargs -r git rm -q`. Never delete `TEMPLATE.md`.
9. Commit only your task file and those deletions with message `coordinator: refine #<n>` and push the branch. This push starts the Developer, so the message prefix must be exact.
10. Comment on the issue: branch name, link to the task file, and a 3-line summary of the plan.
