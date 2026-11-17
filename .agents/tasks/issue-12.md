# Issue #12: Use a consistent email address across the website and CV

Issue: https://github.com/supersalad/supersalad.github.io/issues/12
Branch: agent/12-consistent-email

## Goal
Make the online CV (and the site-wide author email) use exactly the address shown on the contact page, `andreas@folkessontech.com`.

## Context
- Contact pages show `andreas@folkessontech.com` (all lowercase): `contact.md` line 23, `en/contact.md` line 23. This is the reference value.
- The online CV (`cv.md`, layout `cv` from the remote theme) renders `basics.email` from `_data/cv.json` line 6: `"email": "Andreas@folkessontech.com"` (capital `A`).
- `_config.yml` line 10: `author.email: "Andreas@folkessontech.com"` (capital `A`), the site-wide author address used by the theme.
- So the only inconsistency is the capitalisation of the local part (`Andreas@` vs `andreas@`).
- Downloadable CVs `assets/docs/Andreas_Folkesson_CV_{sv,en}_{250821,260125}.pdf`: their decoded text already contains `andreas@folkessontech.com` only, so they already match and need no change (they are generated binaries, not editable source).
- Language impact: both (shared config and CV data; no per-language copies of the address in CV data).

## Acceptance criteria
- [x] `_data/cv.json` has `"email": "andreas@folkessontech.com"` in `basics`
- [x] `_config.yml` has `author.email: "andreas@folkessontech.com"`
- [x] `git grep -n 'Andreas@folkessontech' -- ':!.agents/'` returns no matches (case-sensitive)
- [x] Diff only touches the email value on those two lines (plus this task file); no PDFs or other files changed
- [x] `bundle exec jekyll build` succeeds and `_site/cv/index.html` shows `andreas@folkessontech.com`

## Plan
- [x] In `_data/cv.json` (`basics.email`) change `Andreas@folkessontech.com` to `andreas@folkessontech.com`, keeping all other formatting byte-for-byte (do not reformat the file; it contains pre-existing raw tabs)
- [x] In `_config.yml` (`author.email`) make the same change, keeping the existing quoting
- [x] Run `git grep -n 'Andreas@folkessontech' -- ':!.agents/'` and confirm no matches
- [x] Run `bundle exec jekyll build` and check the address in `_site/cv/index.html`

## Out of scope
- The PDF CVs in `assets/docs/` (already consistent) and `cv.md` download links
- Contact page text, phone numbers, LinkedIn links or any other contact details
- Fixing the pre-existing raw tab characters in `_data/cv.json`
- Any other content, formatting or files

## Status
state: in-review   <!-- ready-for-dev | in-progress | in-review | approved | blocked -->

## Log
- 2026-11-17 coordinator: task created
- 2026-11-17 dev: started work
- 2026-11-17 dev: lowercased basics.email in _data/cv.json
- 2026-11-17 dev: lowercased author.email in _config.yml
- 2026-11-17 dev: git grep for 'Andreas@folkessontech' outside .agents/ returns no matches
- 2026-11-17 dev: bundle exec jekyll build succeeds; _site/cv/index.html shows andreas@folkessontech.com; all acceptance criteria verified
- 2026-11-17 dev: opened PR #18, ready for review
- 2026-11-17 dev: merged origin/main (agent-flow /usr/bin/gh fix, #14/#15 CV changes) into the branch; no conflicts; jekyll build succeeds; criteria still hold
