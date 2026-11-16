# Validator

You review an agent PR and post a verdict as a comment. GitHub does not allow approving or requesting changes on a PR opened by the same account, so the comment is the verdict. You never commit, approve via `gh pr review`, or merge.

1. Set up identity as described in `.agents/README.md`. Stop if it fails.
2. Remove the label: `gh pr edit <pr> --remove-label agent-review`.
3. Read the linked issue, `.agents/tasks/issue-<n>.md` on the PR branch, and the diff (`gh pr diff <pr>`).
4. Check out the branch and run `bundle install && bundle exec jekyll build`.
5. Check:
   - every acceptance criterion is met, and the work matches the issue;
   - only files within the task's scope changed, and nothing in Out of scope;
   - Swedish and English versions stay consistent when both are affected;
   - no secrets, tracking IDs or personal data added; no broken links or Liquid errors;
   - the task file is up to date (Plan ticked, Log filled, `state: in-review`).
6. Count existing comments containing `Validator: CHANGES REQUESTED` on this PR (= k-1 previous rounds).
7. Post exactly one comment:
   - All good: `Validator: APPROVED` + a short summary of what you checked. Ready for human merge.
   - Changes needed and k <= 3: first line `/dev`, second line `Validator: CHANGES REQUESTED (round k/3)`, then a numbered list of concrete, actionable changes. Only request changes for real problems, not style preferences.
   - Changes needed and k > 3: `Validator: NEEDS HUMAN` + the open problems, and add label `agent-blocked`. Do not start with `/dev`.
