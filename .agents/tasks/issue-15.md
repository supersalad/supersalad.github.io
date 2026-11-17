# Issue #15: Verify and correct possible "EPiService" typo in Draftit experience

Issue: https://github.com/supersalad/supersalad.github.io/issues/15
Branch: agent/15-episerver-typo

## Goal
Fix the misspelled platform name "EPiService" in the Draftit experience entry of the CV data so it reads "EPiServer".

## Context
- `_data/cv.json`, Draftit entry, first item in `highlights`:
  `"Vidareutveckling och nyutveckling på legacy plattform (EPiService, C# .Net Framework, MS SQL Server)"`
- Coordinator verification that the intended name is "EPiServer":
  - The same Draftit entry's `summary` says "befintliga produkter i EPiServer (Optimizely)", i.e. the legacy platform is EPiServer.
  - "EPiService" was introduced in commit f885030 ("CV update"); the Draftit summary before that commit already said "EPiServer".
  - Every other mention in the repo (Kodexe entry: "C# .NET FW, EPiServer, SiteCore") uses "EPiServer". "EPiService" is not a known product name.
- This is the only occurrence of "EPiService" in the repo (`grep -rn EPiService` outside `_site/` and `.git/`).
- Language impact: Swedish CV data only. No English counterpart exists in the repo source.

## Acceptance criteria
- [x] `_data/cv.json` contains no occurrence of `EPiService`
- [x] The Draftit highlight reads exactly `"Vidareutveckling och nyutveckling på legacy plattform (EPiServer, C# .Net Framework, MS SQL Server)"`
- [x] No other text in `_data/cv.json` changes (the diff is a one-word change on that line)
- [ ] `_data/cv.json` is still valid JSON (e.g. `ruby -rjson -e 'JSON.parse(File.read("_data/cv.json"))'`)
- [x] The diff touches no file other than `_data/cv.json` and this task file
- [x] `bundle exec jekyll build` succeeds

## Plan
- [x] In `_data/cv.json`, replace `EPiService` with `EPiServer` in the Draftit highlight
- [x] Validate the JSON and run `bundle exec jekyll build`
- [x] Confirm `git diff origin/main` only touches the expected files

## Out of scope
- The PDF CVs in `assets/docs/` (binary files; cannot be edited here, flag in the PR if they contain the typo)
- Other wording or casing in the CV (e.g. ".Net" vs ".NET", "Optimizely" naming)

## Status
state: in-review   <!-- ready-for-dev | in-progress | in-review | approved | blocked -->

## Log
- 2026-11-17 coordinator: task created; verified intended term is EPiServer from the Draftit summary and git history (f885030)
- 2026-11-17 dev: started work
- 2026-11-17 dev: replaced EPiService with EPiServer in the Draftit highlight (_data/cv.json line 76)
- 2026-11-17 dev: `bundle exec jekyll build` succeeds. The suggested strict check `ruby -rjson -e 'JSON.parse(...)'` fails on both `origin/main` and this branch: `_data/cv.json` already contains 5 raw tab characters inside `basics.summary`, and strict JSON does not allow them. This is not caused by the change. The file parses with `python3 json.loads(strict=False)` on both refs, and Jekyll loads it. The JSON criterion is left unticked; fixing the tabs is out of scope (no other text may change). Flagged in the PR.
- 2026-11-17 dev: `git diff origin/main` touches only `_data/cv.json` (one line, EPiService -> EPiServer) and this task file. No `EPiService` found in the four PDF CVs in `assets/docs/` (raw search of decompressed streams; this is inconclusive if the PDFs use glyph-encoded text).
- 2026-11-17 dev: opened PR #20; state in-review
