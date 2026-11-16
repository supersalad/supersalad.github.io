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
- [ ] `en/contact.md` contains `+46 (0)708 45 36 54` under `### Phone`, character-for-character identical to the number in `contact.md`.
- [ ] The string `(0)78 45 36 54` no longer appears anywhere in the repo (`grep -rn "(0)78 45" --exclude-dir=_site --exclude-dir=.git .` returns nothing).
- [ ] The diff touches only `en/contact.md` (plus this task file).
- [ ] `bundle exec jekyll build` succeeds and `_site/en/contact/index.html` contains `+46 (0)708 45 36 54`.

## Plan
- [ ] In `en/contact.md`, replace `+46 (0)78 45 36 54` with `+46 (0)708 45 36 54`.
- [ ] Run `bundle exec jekyll build` and check the generated English contact page shows the corrected number.

## Out of scope
- Do not change `contact.md` (Swedish) or any other page.
- Do not add a `tel:` link or otherwise change the formatting/markup; the issue only requires matching the Swedish page, which has no `tel:` link.

## Status
state: ready-for-dev   <!-- ready-for-dev | in-progress | in-review | approved | blocked -->

## Log
- 2026-11-16 coordinator: task created
