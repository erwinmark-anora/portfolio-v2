# Portfolio Update Checklist

Site: https://erwinmarkanora.vercel.app/

## How to use this file

- **One task = one new Claude session.** Don't do two tasks in one session.
- Start every session with this prompt (change the task number):

  > Read `PORTFOLIO_CHECKLIST.md` (Shared context, Facts, Writing rules), `resume.md`, and the **Facts** section of `RESUME_CHECKLIST.md`. Then do **Task N only**. Don't touch anything outside that task. When done, show me what changed, then tick the box and add one line to the **Log**.

- After each task: check the site locally, then commit (`git commit -m "portfolio: task N - <short name>"`).
- **Do `RESUME_CHECKLIST.md` Task 1 first** (it creates `resume.md`). Portfolio tasks 3–8 copy titles, dates and bullets from it.

---

## Shared context (every session reads this)

- Erwin Mark Añora, full-stack developer, Davao City, Philippines. 10+ years experience (since Mar 2016).
- **Goal of the update:** get hired for a better-paying **mid-level full-stack / Laravel** role. Laravel is the main skill to sell.
- **Problem with the current site:** it shows him as a front-end/UI developer with older tools (AngularJS, Slim PHP, jQuery). His real, current work is full-stack with modern tools. The page undersells him.
- **Two current jobs, both shown openly:**
  - Born Malta (via Webee) — **Contract** — main job, Laravel.
  - Cloudswyft — current job, Open edX / Python / React. Cloudswyft already knows about the Born Malta contract.
- Role level: **"Senior" appears only in the Cloudswyft job title** ("Senior Full-Stack Engineer"). Headline, About and every other job: no "Senior". Full rule in `RESUME_CHECKLIST.md`.
- Keep the existing design. This is a content update, not a redesign. The redesign comes after, in `REDESIGN_CHECKLIST.md`.

---

## Facts

**The resume is the source of truth.** Job titles, dates, labels and bullets come from `resume.md`. Don't re-enter them here.

The few things the resume doesn't have yet (intern count, portal link, Senior decision) live in **one place only**: the Facts section of `RESUME_CHECKLIST.md`.

Quick reference (from resume v2, Oct 31):
- **Born Malta (via Webee)** — Full-Stack Developer — Contract, concurrent — Sep 2025–Present
- **Cloudswyft Global Systems** — title per Senior decision — concurrent — Oct 2022–Present
- **Offshorly** — Full-Stack Developer — Feb 2022–Oct 2022
- **Independent Full-Stack Contractor** — 2018–2023 — Easy BDI, California Ticket King, Cenote, VirtualStaff PH, SBHE
- **Note-e-fied** — Web Developer — Mar 2017–Jun 2018
- **LOGIMINE S.A.S** — Software Developer — Mar 2016–Feb 2017
- Skills: use the updated Skills list from `resume.md` (after `RESUME_CHECKLIST.md` Task 3).

---

## Writing rules (every session follows these)

- Simple, plain English. Short sentences.
- **Max 3 bullets per job.** Each bullet = what I did + result. Start with a verb (Built, Integrated, Led, Cut).
- **At least one number per job** if the Facts section has one.
- Banned words: seamless, robust, leverage, ensure, cutting-edge, passionate, dynamic, "collaborative approach", "high-quality experiences".
- Say "I", not "we".
- Tech tags must match the bullets (no React tag if the bullets say jQuery).
- Never invent numbers, clients, or features.

---

## Tasks

### Quick fixes (warm-up)

- [x] **Task 1 — Fix the footer**
  - There are two footers: "© 2024 Erwin Mark Añora" and "© 2025 … version 2.0".
  - Keep one footer. Make the year automatic (current year).
  - Done when: only one footer shows, with the right year.

- [x] **Task 2 — Clean up social links**
  - Remove Facebook and Instagram.
  - Keep GitHub and LinkedIn. Add a work email link if there isn't one.
  - Done when: only professional links show.

### Content (needs `resume.md`)

- [x] **Task 3 — Rewrite headline + About**
  - Current headline sells "clean UI" → change to full-stack, Laravel-first.
  - Base the About on the resume **Summary**. Mention both current jobs and the real stack.
  - Add one sentence on how I work: AI-assisted SDLC with Claude (planning, building, deployment, maintenance), with me reviewing and owning the code. Laravel/full-stack stays the main message — AI is *how* I work, not *what* I am.
  - Max 4 sentences. Follow Writing rules.
  - Done when: someone reading only the top of the page knows "full-stack, Laravel, 10+ years, two current roles".

- [x] **Task 4 — Add Born Malta as the top job**
  - Copy title, label (Contract, concurrent), dates and bullets from `resume.md`. Max 3 bullets on the site — pick the strongest. **One of the 3 must be the AI-assisted SDLC bullet.**
  - Tags must match the bullets (Laravel, Livewire, GitHub Actions…).
  - Done when: Born Malta shows first, same title and dates as the resume.

- [ ] **Task 5 — Rewrite the Cloudswyft entry**
  - Copy title (per Senior decision), dates and bullets from `resume.md`. Max 3 bullets — keep 30,000+ learners and Xendit.
  - Fix tags so they match the bullets (Python, Django, React, Open edX…).
  - Done when: same title and dates as the resume, no vague lines left.

- [ ] **Task 6 — Match the older jobs to the resume**
  - Offshorly: copy from `resume.md`.
  - California Ticket King and SBHE are separate jobs on the site but sit under "Independent Full-Stack Contractor (2018–2023)" on the resume. Either group them the same way, or keep them separate but labeled **Freelance/Contract** with titles that don't contradict the resume.
  - Max 3 bullets each, follow Writing rules.
  - Done when: no title or date on the site contradicts the resume.

### Projects

- [ ] **Task 7 — Add the real estate portal as project #1**
  - New project card at the top: **Gintanao** — Davao real estate listing portal. Next.js front-end, Laravel + Filament back-end and API. Label: **"In development"** (portal facts are in `RESUME_CHECKLIST.md`).
  - Show it as a **case study**: what it does, stack, 2–3 screenshots (taken from local), 2–3 things I built.
  - **No link** until live — gintanao.com is only a coming-soon page. **No GitHub link — the repo stays private** (business).
  - Done when: newest, most modern project shows first.

- [ ] **Task 8 — Trim and reorder projects**
  - Order: real estate portal → ICEI → AuctionTale → California Ticket King Dashboard → others.
  - **ICEI:** project is finished and the client has rebranded. Keep the card and screenshot (it's the 30,000+ learners proof), but **remove the icei.ac.id link** and add a label: "Past project · site since rebranded". Change the description to past tense ("supported", not "supports").
  - Don't add Cloudswyft's own LMS as a project card — it's company work in development; it's covered in the Cloudswyft job entry.
  - Consider removing or shortening the oldest ones (SBHE AngularJS, Slim PHP portal). Max 5–6 projects.
  - Shorten descriptions to 2–3 sentences. Follow Writing rules.
  - Check every project link still works.
  - Done when: max 6 projects, strongest first, no dead links.

### Skills + meta

- [ ] **Task 9 — Add a Skills section**
  - Site has no skills section, only tags. Add a simple one, grouped: Back-end / Front-end / DevOps / Platforms.
  - Use the Skills list from `resume.md` only (do `RESUME_CHECKLIST.md` Task 3 first). Includes **AI-assisted SDLC (Claude)**.
  - Done when: a recruiter can see the full stack in 5 seconds.

- [ ] **Task 9a — Add a short "How I work" section (AI-assisted SDLC)**
  - Small section after Skills: 4 steps — **Plan → Build → Deploy → Maintain**.
  - Each step = 1 line: what Claude helps with + what I check or decide myself.
  - Erwin explains his real workflow for each step in the session. Claude writes it in plain words. **No invented tools, numbers or claims** (no "10x faster").
  - End with one line: "I review and own all code that ships."
  - Done when: 4 short lines + closing line, readable in 10 seconds. This is also the example you'll walk through in interviews.

- [ ] **Task 10 — Update page title + meta description**
  - Current meta says "Laravel, Vue, React, and TailwindCSS". Update to match the new headline and stack.
  - Check the Open Graph image/title (how the link looks when shared on LinkedIn).
  - Done when: meta matches the new positioning.

### Resume + final check

- [ ] **Task 11 — Update the resume to match**
  - Moved to its own file: follow `RESUME_CHECKLIST.md`.
  - Done when: all tasks in `RESUME_CHECKLIST.md` are ticked.

- [ ] **Task 12 — Final check**
  - `npm run build` passes, no errors.
  - Check on phone width.
  - Click every link (projects, resume, GitHub, LinkedIn).
  - Read the whole page once for typos and banned words.
  - Deploy to Vercel.
  - Done when: live site is updated and clean.

---

## Log

_One line per finished task. Example: `2026-11-01 — Task 1 — merged footers, year now automatic.`_

- 2026-10-31 - Task 1 - removed the "© 2024" mobile menu footer, main footer now "© {current year} Erwin Mark Añora".
- 2026-10-31 - Task 2 - removed Facebook and Instagram icons, kept GitHub and LinkedIn, added an email icon (mailto:erwinmark.anora@gmail.com).
- 2026-10-31 - Task 3 - new Laravel-first headline and typed roles, About rewritten in 4 sentences (10+ years, Born Malta contract + Cloudswyft, AI-assisted SDLC with Claude).
- 2026-10-31 - Task 4 - added Born Malta (via Webee) as the top job: Full-Stack Developer, "Contract · Concurrent role", Sep 2025 - Present, 3 resume bullets (end-to-end app, 4 team projects, Claude workflow), tags Laravel/Livewire/JavaScript/jQuery/Claude; ExperienceCard now shows the workType label.
