# Issue #17: Correct "ett projekt eller produkt" in the Swedish CV

Issue: https://github.com/supersalad/supersalad.github.io/issues/17
Branch: agent/17-cv-article-fix

## Goal
Fix the missing article in the Swedish CV summary: "ett projekt eller produkt" becomes "ett projekt eller en produkt".

## Context
- `_data/cv.json`, `basics.summary` (line 9), sentence:
  `Jag har insikt och förståelse för de socio-tekniska aspekter som är kritiska för att nå hållbar framgång med ett projekt eller produkt.`
- This is the only occurrence of the phrase in the repo source (`grep -rn "projekt eller"` outside `_site/` and `.git/`).
- Language impact: Swedish CV data only. No English counterpart in the repo source needs changing.
- `_data/cv.json` already contains raw tab characters in `basics.summary`, so strict JSON parsers (e.g. Ruby `JSON.parse`) fail on `origin/main` too. Validate with `python3 -c 'import json;json.loads(open("_data/cv.json").read(),strict=False)'`; do not touch the tabs.

## Acceptance criteria
- [ ] `_data/cv.json` contains `med ett projekt eller en produkt.` and no occurrence of `ett projekt eller produkt`
- [ ] The diff to `_data/cv.json` is a single-line change that only inserts `en ` before `produkt` in that sentence
- [ ] `_data/cv.json` still parses (`python3 -c 'import json;json.loads(open("_data/cv.json").read(),strict=False)'`)
- [ ] The diff touches no file other than `_data/cv.json` and this task file
- [ ] `bundle exec jekyll build` succeeds

## Plan
- [x] In `_data/cv.json` `basics.summary`, replace `ett projekt eller produkt` with `ett projekt eller en produkt`
- [ ] Validate the JSON and run `bundle exec jekyll build`
- [ ] Confirm `git diff origin/main` only touches the expected files

## Out of scope
- The PDF CVs in `assets/docs/` (binary; flag in the PR if they contain the phrase)
- Any other wording, whitespace or tab characters in `_data/cv.json`

## Status
state: in-progress   <!-- ready-for-dev | in-progress | in-review | approved | blocked -->

## Log
- 2026-11-17 coordinator: task created; phrase found only in `_data/cv.json` `basics.summary`
- 2026-11-17 dev: started work
- 2026-11-17 dev: inserted "en" before "produkt" in `basics.summary`
