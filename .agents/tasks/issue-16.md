# Issue #16: Improve the fragmented sentence in the Swedish CV

Issue: https://github.com/supersalad/supersalad.github.io/issues/16
Branch: agent/16-cv-sv-fragmented-sentence

## Goal
Merge the fragmented sentence in the Swedish CV summary ("Från kravanalys … etc. Till skarpa utrullningar …") into one fluent sentence, preserving meaning and terminology.

## Context
- `_data/cv.json`, field `basics.summary` (Swedish CV, line 9).
- Current text: "Från kravanalys och dialog med kunder och stakeholders, framtagande av MVP:er och piloter etc. Till skarpa utrullningar, underhåll och vidareutveckling."
- Language impact: Swedish only.

## Acceptance criteria
- [x] In `_data/cv.json`, the text above is replaced by: "Från kravanalys och dialog med kunder och stakeholders, via framtagande av MVP:er och piloter, till skarpa utrullningar, underhåll och vidareutveckling."
- [x] The fragment "etc. Till skarpa" no longer appears in `_data/cv.json`.
- [x] Terminology preserved: "kravanalys", "stakeholders", "MVP:er", "piloter", "skarpa utrullningar", "underhåll", "vidareutveckling" all still present.
- [ ] No other text in `_data/cv.json` changes (the diff touches only this sentence); the file is still valid JSON. _(Diff touches only this sentence. Strict JSON validity is unchanged from `main`, which already fails on a pre-existing literal tab; left unticked for a human to decide.)_
- [x] `bundle exec jekyll build` succeeds

## Plan
- [x] In `_data/cv.json` `basics.summary`, replace the sentence with the wording from the acceptance criteria, keeping surrounding text, spacing and markdown line breaks unchanged.
- [x] Validate JSON (e.g. `python3 -m json.tool _data/cv.json > /dev/null`).
- [x] Run `bundle exec jekyll build`.

## Out of scope
- The preceding sentence ("Jag har erfarenhet av …") and following sentence ("Ständigt med fokus …").
- Any English CV data or other files.

## Status
state: in-progress   <!-- ready-for-dev | in-progress | in-review | approved | blocked -->

## Log
- 2026-11-17 coordinator: task created
- 2026-11-17 developer: started work
- 2026-11-17 developer: replaced fragmented sentence in `_data/cv.json` basics.summary
- 2026-11-17 developer: JSON check: `python3 -m json.tool` fails with "Invalid control character at line 9 column 2175" on this branch and identically on `main` (pre-existing literal tab before `**Moln-säkerhet` in `basics.summary`). Not caused by this change; fixing it is outside scope, flagged in the PR. Non-strict parse and Jekyll both succeed.
- 2026-11-17 developer: `bundle exec jekyll build` succeeds; new sentence renders in `_site/cv/index.html`; acceptance criteria verified
