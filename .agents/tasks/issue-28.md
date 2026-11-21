# Issue #28: Remove contact form instances from website pages

Issue: https://github.com/supersalad/supersalad.github.io/issues/28
Branch: agent/28-remove-contact-forms

## Goal
Stop rendering the Google Forms contact form anywhere on the site. Service pages get a same-language call-to-action link to the contact page instead. The contact pages keep their email/phone/LinkedIn details. The reusable `_includes/contact-form.html` stays in the repo unchanged.

## Context
- Reusable component (keep byte-for-byte unchanged): `_includes/contact-form.html` (markup + inline script), plus its styles in `assets/stylesheets/main.scss` (`.hidden`, `.form-control.*`, `.information`). Keep these styles: the retained component needs them and `.hidden` is generic.
- The form is rendered via `{% include contact-form.html %}` on 8 pages:
  - Swedish: `contact.md` (`/contact/`), `_services/advisor.md`, `_services/ai-enablement-workshop.md`, `_services/system-development.md`
  - English: `en/contact.md` (`/en/contact/`), `_en_services/advisor.md`, `_en_services/ai-enablement-workshop.md`, `_en_services/system-development.md`
- Contact URLs already used on the site: Swedish `/contact`, English `/en/contact` (see `index.md`, `en/index.md`, `404.md`).
- Existing button style: `class="btn btn-primary"` (used by the form's toggle button and the masthead CTA).
- `form-*` front matter keys (`form-calltoaction`, `form-thankyou`, `form-header`, `form-intro`, `form-pre-load`) are read only by `_includes/contact-form.html`.
- Both languages are affected.
- Decision made by the Coordinator: the contact pages count as affected pages, because they render the form too. They get no CTA, since they are the link target.

## Acceptance criteria
- [ ] `grep -rn "include contact-form.html" --include=*.md --include=*.html . | grep -v -E "^./(_site|vendor)/"` returns nothing. No page renders the form.
- [ ] After `bundle exec jekyll build`, `grep -rl 'id="googleForm"' _site` returns nothing.
- [ ] The 3 Swedish service pages each end with a visible CTA link to `/contact/`, with Swedish text and `class="btn btn-primary"`.
- [ ] The 3 English service pages each end with a visible CTA link to `/en/contact/`, with English text and `class="btn btn-primary"`.
- [ ] `contact.md` and `en/contact.md` still exist at the same paths, with the same `title`, `layout`, `lang` and `cta` front matter, and still contain `andreas@folkessontech.com`, `+46 (0)708 45 36 54` and the LinkedIn link.
- [ ] `git diff origin/main -- _includes/contact-form.html assets/stylesheets/main.scss` is empty.
- [ ] No other front matter changes (`title`, `description`, `image`, `lang`, `layout`, permalinks) and no navigation (`_data/theme.yml`) changes.
- [ ] No leftover empty spacing where the form used to be (for example, the `<br><br>` spacers on the contact pages are removed).
- [ ] `bundle exec jekyll build --strict_front_matter` succeeds and `htmlproofer _site --disable-external --no-enforce-https` passes, the same checks CI runs.
- [ ] The 8 affected pages are checked in a browser at desktop (~1280px) and mobile (~375px) widths, with no layout breaks or large empty gaps. Record the result in the Log.

## Plan
- [x] In each of the 6 service pages, replace `{% include contact-form.html %}` with a CTA link styled `btn btn-primary`, e.g. `<p><a href="/contact/" class="btn btn-primary">…</a></p>`. Use the page's existing `form-calltoaction` text as the label. For `_en_services/system-development.md`, fix the "Strenghen" typo to "Strengthen" in the label.
- [x] Remove the now unused `form-*` front matter keys from those 6 pages. Remove only `form-*` keys.
- [ ] In `contact.md` and `en/contact.md`, remove the include, the `<br><br>` spacers and the now unused `form-*` front matter keys. Adjust only the lead-in line before the details ("...det går även bra med:" / "Or reach out via other channels...") so it reads naturally without a form. Keep the intro sentence and the Mail/Email, Telefon/Phone and LinkedIn sections unchanged.
- [ ] Leave `_includes/contact-form.html`, `assets/stylesheets/main.scss` and `README.md` (its "Adding google forms" section documents the retained component) untouched.
- [ ] Build, run html-proofer, and check the 8 pages on desktop and mobile widths.

## Out of scope
- Deleting or changing `_includes/contact-form.html` or its CSS.
- Changing page URLs, titles, descriptions, images or other SEO metadata, navigation, or any unrelated content or styling.
- Adding contact CTAs to pages that never had the form (home, CV, posts, 404).

## Status
state: in-progress   <!-- ready-for-dev | in-progress | in-review | approved | blocked -->

## Log
- 2026-11-21 coordinator: task created
- 2026-11-21 developer: started work
- 2026-11-21 developer: replaced the form include with a btn btn-primary CTA link on the 6 service pages (fixed "Strenghen" typo in the English label)
- 2026-11-21 developer: removed the unused form-* front matter keys from the 6 service pages
