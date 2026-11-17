# Issue #13: Replace Swedish “Läs mer” links on the English homepage

Issue: https://github.com/supersalad/supersalad.github.io/issues/13
Branch: agent/13-english-read-more

## Goal
The "read more" links under the service entries on the English homepage (`/en/`) show "Read more" instead of the Swedish "Läs mer", with unchanged link destinations and behavior. The Swedish site keeps "Läs mer".

## Context
- `_layouts/home.html`: for `page.lang == 'en'` it renders the `en_services` collection via the remote theme's `documents-collection.html`, which includes the local `_includes/entry.html`.
- `_includes/entry.html` line 32: the link label is `{{ site.data.theme.t.read_more | default: 'Read More' }}`.
- `_data/theme.yml` line 15: `read_more: "Läs mer"` is the site-wide (Swedish) label. It must stay as is for the Swedish site.
- `en/index.md` has `lang: en`; site default is `lang: sv-SE` (`_config.yml`).
- Language impact: English only. Swedish output must not change.

## Acceptance criteria
- [ ] `_site/en/index.html` contains no "Läs mer" and shows "Read more" for every `more-link`.
- [ ] `_site/index.html` (Swedish homepage) still shows "Läs mer" for its `more-link`s.
- [ ] The `href` of each `more-link` and the arrow icon markup are unchanged (only the label text differs).
- [ ] `_data/theme.yml` `read_more` remains "Läs mer".
- [ ] `bundle exec jekyll build` succeeds

## Plan
- [x] Add an English label, e.g. `read_more_en: "Read more"` under `t:` in `_data/theme.yml` (or an equivalent minimal mechanism).
- [ ] In `_includes/entry.html`, choose the label by language: use the English label when `page.lang == 'en'`, otherwise keep `site.data.theme.t.read_more | default: 'Read More'`.
- [ ] Run `bundle exec jekyll build` and check `_site/en/index.html` and `_site/index.html` against the acceptance criteria.

## Out of scope
- Swedish text anywhere, including "Läs mer" inside Swedish blog posts in `_posts/`.
- Link destinations, layout, styling, or other theme text keys.
- Translating other Swedish theme strings on English pages (separate issue if needed).

## Status
state: in-progress   <!-- ready-for-dev | in-progress | in-review | approved | blocked -->

## Log
- 2026-11-17 coordinator: task created
- 2026-11-17 dev: started
- 2026-11-17 dev: added `read_more_en: "Read more"` to `_data/theme.yml`
