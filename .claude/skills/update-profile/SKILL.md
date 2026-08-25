---
name: update-profile
description: Use when the user wants to update, refresh, or improve their professional profile site (this repo) — new job, new skill, new certification, updated highlights/achievements, or general content/copy improvements to the hero, about, experience, skills, or education sections.
---

# Update Profile

## Overview

This repo is a Next.js personal/professional profile site. All page copy lives in locale JSON files, not hardcoded in components. Updating the profile means editing content in both locales and keeping them in sync — not rewriting components.

## Content locations

- `locales/en.json` — English copy (source of truth)
- `locales/es.json` — Spanish copy (must mirror en.json's structure)

Top-level keys: `metadata`, `hero`, `about`, `experience`, `skills`, `education`, `footer`.

## Source material

The user's LinkedIn (`linkedin.com/in/oscaroceguerab`) and GitHub (`github.com/oscaroceguera`) profiles change daily. `profile-facts.md` in this skill folder is only a cached snapshot — never treat it as current on its own.

## Workflow

1. **Re-scrape both profiles first, every run, before anything else** — this step is not optional and not conditional on how old the snapshot looks:
   - Use `claude-in-chrome`. Navigate to each profile URL, `get_page_text` for a first pass.
   - LinkedIn's own-profile view lazy-loads Experience/Education/Certifications below the fold — scroll down and re-extract if a section reads empty.
   - Diff the fresh pull against `profile-facts.md`. Overwrite `profile-facts.md` with the refreshed snapshot (keep the same section headings, update the snapshot date) regardless of whether anything changed.
2. Read `locales/en.json` fully before editing — know the existing structure and tone.
3. Using the freshly-verified facts, identify which section(s) the update belongs to (new job → `experience`; new cert/skill → `skills`; achievement → `about` or `hero`, per existing structure).
4. Edit `en.json` first, matching existing key structure and array item shape exactly.
5. Mirror the same structural change into `es.json` with a natural Spanish translation (not machine-literal) — don't leave locales out of sync.
6. After editing, run the dev server and view the affected section in the browser to confirm rendering (see the `run` skill), rather than assuming JSON edits render correctly.

If the user only asked to check for updates (no site edit requested), stop after step 1 and report what changed, if anything.

## Privacy note

LinkedIn's "open to work" status is visible only to recruiters, not the public. Don't surface an active job-search signal on the public site from it unless the user explicitly asks.

## Common mistakes

- Editing only `en.json` and forgetting `es.json`, or vice versa — breaks locale parity.
- Adding a new key structure to one locale that doesn't match the other's shape (e.g. array vs object).
- Inventing content instead of asking the user for real details when the update involves new factual info (employer, dates, certification names).
- Editing JSX in `app/[locale]/page.tsx` for a copy change that should just be a JSON edit.
