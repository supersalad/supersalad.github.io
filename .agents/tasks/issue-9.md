# Issue #9: Update AI development skills on Services > Systemutveckling

Issue: https://github.com/supersalad/supersalad.github.io/issues/9
Branch: agent/9-ai-dev-bullets

## Goal
On the Swedish Systemutveckling service page, replace the single AI-related bullet in "Teknisk profil > Mammas gata" with two bullets: one for AI-assisted development (updated tool list) and one for agent-driven development.

## Context
- `_services/system-development.md`, line `* AI-stödd utveckling (GitHub Copilot, Cursor, Windsurf, Devin, CodeRabbit mm)` under `#### Mammas gata:`
- Language impact: Swedish only. `_en_services/system-development.md` must stay unchanged.
- The issue shows the bullet names in bold; the surrounding list items are plain text, so keep them plain to match the list style.
- The issue text says "proposed content change only, do not edit the website". The owner labeled it `agent`, and nothing is published until a human merges the PR, so the PR is the proposal.

## Acceptance criteria
- [ ] In `_services/system-development.md`, the line `* AI-stödd utveckling (GitHub Copilot, Cursor, Windsurf, Devin, CodeRabbit mm)` is gone
- [ ] In its place, in this order, are exactly these two lines:
      `* AI-stödd utveckling (GitHub Copilot, Cursor, Devin, CodeRabbit m.m.)`
      `* Agentdriven utveckling (AI-agenter, autonoma arbetsflöden och orkestrering)`
- [ ] All other bullets in the "Mammas gata" list are unchanged and keep their order
- [ ] The diff touches no file other than `_services/system-development.md` and this task file (in particular not `_en_services/system-development.md`)
- [ ] `bundle exec jekyll build` succeeds

## Plan
- [x] Replace the AI bullet in `_services/system-development.md` with the two new bullets above
- [x] Run `bundle exec jekyll build` and check that the rendered Swedish Systemutveckling page shows both bullets
- [ ] Confirm `git diff origin/main` only touches the expected files

## Out of scope
- English pages (`_en_services/`, `en/`)
- Any other wording, bullets, front matter or layout on the page

## Status
state: in-progress   <!-- ready-for-dev | in-progress | in-review | approved | blocked -->

## Log
- 2026-11-17 coordinator: task created
- 2026-11-17 dev: started
- 2026-11-17 dev: replaced AI bullet with the two new bullets in _services/system-development.md
- 2026-11-17 dev: jekyll build OK; _site/services/system-development/index.html shows both bullets
