# Issue #14: Fix spacing in "Infrastructure as Code (IaC)"

Issue: https://github.com/supersalad/supersalad.github.io/issues/14
Branch: agent/14-iac-spacing

## Goal
Insert the missing space in the CV phrase "Infrastructure as Code(IaC)" so it reads "Infrastructure as Code (IaC)".

## Context
- `_data/cv.json` holds the CV text rendered by `cv.md` (layout `cv`).
- The only occurrence in the repo source is `_data/cv.json` line 74 (a `summary` field, Swedish CV): `... testautomatisering och Infrastructure as Code(IaC).`
- Language impact: Swedish CV page only. There is no English CV page in the site source.

## Acceptance criteria
- [x] `_data/cv.json` contains `Infrastructure as Code (IaC)` at the former occurrence.
- [ ] `grep -rn "Code(IaC)" --exclude-dir=_site --exclude-dir=.git .` returns no matches.
- [x] The diff changes exactly one line in `_data/cv.json` and only adds a single space before `(IaC)`.
- [ ] `_data/cv.json` is still valid JSON (e.g. `ruby -rjson -e 'JSON.parse(File.read("_data/cv.json"))'`).
- [x] `bundle exec jekyll build` succeeds

## Plan
- [x] In `_data/cv.json`, replace `Infrastructure as Code(IaC)` with `Infrastructure as Code (IaC)`.
- [x] Run the grep and JSON check from the acceptance criteria.
- [x] Run `bundle exec jekyll build`.

## Out of scope
- Any other wording, punctuation or formatting in `_data/cv.json` or elsewhere.
- The PDF files in `assets/docs/` (binary; regenerating them is the owner's job).
- Other occurrences of "Infrastructure as Code" that are already correctly spaced (e.g. line 47).

## Status
state: in-review   <!-- ready-for-dev | in-progress | in-review | approved | blocked -->

## Log
- 2026-11-17 coordinator: task created
- 2026-11-17 developer: started work
- 2026-11-17 developer: added the missing space in `_data/cv.json`
- 2026-11-17 developer: grep finds no `Code(IaC)` outside `.agents/`; the only matches are in this task file, which quotes the old wording.
- 2026-11-17 developer: the Ruby JSON check fails on `main` too (raw tab characters inside the `basics.summary` string, first at byte 2489). This is not caused by this change. Python `json.load(..., strict=False)` parses the file. Out of scope; not fixed.
- 2026-11-17 developer: `bundle exec jekyll build` succeeds; `_site/cv/index.html` shows "Infrastructure as Code (IaC)".
- 2026-11-17 developer: opened PR #19; state in-review
