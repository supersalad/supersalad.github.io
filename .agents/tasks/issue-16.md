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
- [ ] In `_data/cv.json`, the text above is replaced by: "Från kravanalys och dialog med kunder och stakeholders, via framtagande av MVP:er och piloter, till skarpa utrullningar, underhåll och vidareutveckling."
- [ ] The fragment "etc. Till skarpa" no longer appears in `_data/cv.json`.
- [ ] Terminology preserved: "kravanalys", "stakeholders", "MVP:er", "piloter", "skarpa utrullningar", "underhåll", "vidareutveckling" all still present.
- [ ] No other text in `_data/cv.json` changes (the diff touches only this sentence); the file is still valid JSON.
- [ ] `bundle exec jekyll build` succeeds

## Plan
- [ ] In `_data/cv.json` `basics.summary`, replace the sentence with the wording from the acceptance criteria, keeping surrounding text, spacing and markdown line breaks unchanged.
- [ ] Validate JSON (e.g. `python3 -m json.tool _data/cv.json > /dev/null`).
- [ ] Run `bundle exec jekyll build`.

## Out of scope
- The preceding sentence ("Jag har erfarenhet av …") and following sentence ("Ständigt med fokus …").
- Any English CV data or other files.

## Status
state: ready-for-dev   <!-- ready-for-dev | in-progress | in-review | approved | blocked -->

## Log
- 2026-11-17 coordinator: task created
