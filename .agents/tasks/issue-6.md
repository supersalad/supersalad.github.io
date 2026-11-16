# Issue #6: Replace private email address with official address

Issue: https://github.com/supersalad/supersalad.github.io/issues/6
Branch: agent/6-replace-private-email

## Goal
Replace the private address `folkesson@gmail.com` with the official address `Andreas@folkessontech.com` so the Gmail address no longer appears anywhere in the repository.

## Context
- `_config.yml` line 10: `author.email: "folkesson@gmail.com"`
- `_data/cv.json` line 6: `basics.email: "folkesson@gmail.com"`
- `git grep -i 'folkesson@gmail'` on main finds only these two occurrences (PDFs in `assets/docs/` do not match).
- Language impact: both (site-wide config and CV data; no translated copies of the address exist).

## Acceptance criteria
- [x] `_config.yml` has `author.email: "Andreas@folkessontech.com"`
- [x] `_data/cv.json` has `"email": "Andreas@folkessontech.com"` in `basics`
- [x] `git grep -i 'folkesson@gmail'` returns no matches (this task file excluded, as it quotes the old address)
- [ ] `_data/cv.json` is still valid JSON (e.g. `ruby -rjson -e 'JSON.parse(File.read("_data/cv.json"))'`) — not met on main either: raw tab characters in `basics.summary` (pre-existing, out of scope); validity is unchanged by this task
- [x] Diff only touches the email value on those two lines (plus this task file)
- [x] `bundle exec jekyll build` succeeds

## Plan
- [x] Replace the email value in `_config.yml` (`author.email`), keeping the existing quoting
- [x] Replace the email value in `_data/cv.json` (`basics.email`), keeping formatting
- [x] Run `git grep -i 'folkesson@gmail' -- ':!.agents/tasks/'` and confirm no matches
- [x] Validate `_data/cv.json` parses as JSON
- [x] Run `bundle exec jekyll build` and confirm success

## Out of scope
- Phone numbers, LinkedIn links or any other contact details
- The PDF CVs in `assets/docs/`
- Any other content, formatting or files

## Status
state: in-progress   <!-- ready-for-dev | in-progress | in-review | approved | blocked -->

## Log
- 2026-11-16 coordinator: task created
- 2026-11-16 dev: started work
- 2026-11-16 dev: replaced author.email in _config.yml
- 2026-11-16 dev: replaced basics.email in _data/cv.json
- 2026-11-16 dev: `git grep -i 'folkesson@gmail' -- ':!.agents/tasks/'` returns no matches
- 2026-11-16 dev: strict JSON parse of _data/cv.json fails on both main and this branch (raw tab characters inside the `basics.summary` string, line 9); pre-existing and out of scope, not fixed. The file parses with a lenient parser, the new email value is read correctly, and Jekyll loads it fine
- 2026-11-16 dev: `bundle exec jekyll build` succeeds; `_site/cv/index.html` shows the new address and `_site` has no occurrence of the old one
