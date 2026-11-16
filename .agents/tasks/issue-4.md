# Issue #4: English contact page shows wrong phone number

Issue: https://github.com/supersalad/supersalad.github.io/issues/4
Branch: agent/4-fix-en-phone

## Goal
The English contact page shows the same phone number as the Swedish one: `+46 (0)708 45 36 54`.

## Context
- `en/contact.md` line 26 (under `### Phone`) has `+46 (0)78 45 36 54` (missing a digit).
- `contact.md` line 26 (under `### Telefon`) has the correct `+46 (0)708 45 36 54` and is the reference.
- Neither page has a `tel:` link today; the number is plain text. No other file in the repo contains the number.
- Language impact: English only.

## Acceptance criteria
- [x] `en/contact.md` contains `+46 (0)708 45 36 54` under `### Phone`, character-for-character identical to the number in `contact.md`.
- [x] The string `(0)78 45 36 54` no longer appears anywhere in the repo (`grep -rn "(0)78 45" --exclude-dir=_site --exclude-dir=.git .` returns nothing).
- [x] The diff touches only `en/contact.md` (plus this task file).
- [x] `bundle exec jekyll build` succeeds and `_site/en/contact/index.html` contains `+46 (0)708 45 36 54`.

## Plan
- [x] In `en/contact.md`, replace `+46 (0)78 45 36 54` with `+46 (0)708 45 36 54`.
- [x] Run `bundle exec jekyll build` and check the generated English contact page shows the corrected number.

## Out of scope
- Do not change `contact.md` (Swedish) or any other page.
- Do not add a `tel:` link or otherwise change the formatting/markup; the issue only requires matching the Swedish page, which has no `tel:` link.

## Status
state: in-review   <!-- ready-for-dev | in-progress | in-review | approved | blocked -->

## Log
- 2026-11-16 coordinator: task created
- 2026-11-16 developer: started work
- 2026-11-16 developer: corrected phone number in en/contact.md to +46 (0)708 45 36 54
- 2026-11-16 developer: bundle exec jekyll build succeeded; _site/en/contact/index.html contains +46 (0)708 45 36 54
- 2026-11-16 developer: note: the grep criterion still matches this task file, which quotes the old number to describe the bug; no site file contains it
- 2026-11-16 developer: opened PR #5, state in-review
