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
- [ ] `_config.yml` has `author.email: "Andreas@folkessontech.com"`
- [ ] `_data/cv.json` has `"email": "Andreas@folkessontech.com"` in `basics`
- [ ] `git grep -i 'folkesson@gmail'` returns no matches (this task file excluded, as it quotes the old address)
- [ ] `_data/cv.json` is still valid JSON (e.g. `ruby -rjson -e 'JSON.parse(File.read("_data/cv.json"))'`)
- [ ] Diff only touches the email value on those two lines (plus this task file)
- [ ] `bundle exec jekyll build` succeeds

## Plan
- [ ] Replace the email value in `_config.yml` (`author.email`), keeping the existing quoting
- [ ] Replace the email value in `_data/cv.json` (`basics.email`), keeping formatting
- [ ] Run `git grep -i 'folkesson@gmail' -- ':!.agents/tasks/'` and confirm no matches
- [ ] Validate `_data/cv.json` parses as JSON
- [ ] Run `bundle exec jekyll build` and confirm success

## Out of scope
- Phone numbers, LinkedIn links or any other contact details
- The PDF CVs in `assets/docs/`
- Any other content, formatting or files

## Status
state: ready-for-dev   <!-- ready-for-dev | in-progress | in-review | approved | blocked -->

## Log
- 2026-11-16 coordinator: task created
