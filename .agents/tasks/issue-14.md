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
- [ ] `_data/cv.json` contains `Infrastructure as Code (IaC)` at the former occurrence.
- [ ] `grep -rn "Code(IaC)" --exclude-dir=_site --exclude-dir=.git .` returns no matches.
- [ ] The diff changes exactly one line in `_data/cv.json` and only adds a single space before `(IaC)`.
- [ ] `_data/cv.json` is still valid JSON (e.g. `ruby -rjson -e 'JSON.parse(File.read("_data/cv.json"))'`).
- [ ] `bundle exec jekyll build` succeeds

## Plan
- [ ] In `_data/cv.json`, replace `Infrastructure as Code(IaC)` with `Infrastructure as Code (IaC)`.
- [ ] Run the grep and JSON check from the acceptance criteria.
- [ ] Run `bundle exec jekyll build`.

## Out of scope
- Any other wording, punctuation or formatting in `_data/cv.json` or elsewhere.
- The PDF files in `assets/docs/` (binary; regenerating them is the owner's job).
- Other occurrences of "Infrastructure as Code" that are already correctly spaced (e.g. line 47).

## Status
state: in-progress   <!-- ready-for-dev | in-progress | in-review | approved | blocked -->

## Log
- 2026-11-17 coordinator: task created
- 2026-11-17 developer: started work
