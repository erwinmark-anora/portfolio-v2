# Resume Update Checklist

Current resume: Google Drive PDF (linked from the portfolio "Download Resume" button).
Status: **v2 done (Oct 31)** — title, summary, Born Malta, Cloudswyft, merged timeline, 2 pages. Remaining work is below.

## How to use this file

- **One task = one new Claude session.** Don't do two tasks in one session.
- Start every session with this prompt (change the task number):

  > Read `RESUME_CHECKLIST.md` (Shared context, Facts, Writing rules). Then do **Task N only** on `resume.md`. Don't touch anything outside that task. When done, show me what changed, then tick the box and add one line to the **Log**.

- Claude edits a plain text master copy: `resume.md`. You copy the changes into your resume design file, then export the PDF.
- Commit after each task.
- This replaces Task 11 in `PORTFOLIO_CHECKLIST.md`.

---

## ⚠️ Decision needed first: "Senior" or not?

The v2 resume says **"Senior full-stack engineer"** in the Summary and **"Senior Full-Stack Engineer"** as the Cloudswyft title. Earlier you said your role is not senior level.

- **Job titles must be true.** If "Senior Full-Stack Engineer" is your **official** Cloudswyft title (contract, payslip, HR records), keep it. If not, change it to your real title. A background check can catch this.
- **The Summary is a self-description.** With 10+ years, "senior" is defensible. But expect senior-level interview questions (architecture, leading people, trade-offs), and it fits a ₱85k–95k+ ask.

**My decision (Oct 31):**
- **Cloudswyft title: keep "Senior Full-Stack Engineer"** — it's what Cloudswyft calls me. (Quick check: HR records / contract say the same.)
- **Summary: no "Senior".** Describe myself as "Full-stack developer with 10+ years…". The years and the Cloudswyft title already show experience.
- **Everywhere else** (headline, About, Born Malta, other jobs): no "Senior".
- Applying to both mid and senior roles. Salary ask: ₱85k–95k for a single full-time job.

Resume and portfolio must follow this same rule.

---

## Shared context (every session reads this)

- Same person and goal as `PORTFOLIO_CHECKLIST.md`: full-stack developer, Laravel-first, targeting a better-paying **single full-time role (₱85k–95k)**. Role level: see the decision above.
- **What v2 already fixed:** full-stack title, 10+ years summary, Born Malta added, Cloudswyft rewritten (30,000+ learners, Xendit), one merged timeline with an "Independent Full-Stack Contractor 2018–2023" block, old jobs trimmed, 2 pages.
- **What's still wrong:**
  1. Skills section is unchanged from v1 (old tools, missing current ones, "Bitbucker" typo).
  2. Header has no LinkedIn or GitHub.
  3. **Layout breaks when scanned.** When the v2 PDF is read as text, the order comes out scrambled: title before name, "Education" heading before contact details, Summary after the Cloudswyft bullets, job titles after company names. Job application systems read it the same way.
  4. No Projects section.
  5. Small wording and format issues (listed in Task 4).
- Resume = full work history. Portfolio = highlights. **Titles and dates must match on both.**

---

## Facts

Titles, dates and bullets are already in the resume — **`resume.md` is the source of truth.** This list is only for things the resume doesn't have yet. It's the **only** place to fill these in; the portfolio checklist reads them from here.

- Senior decision: ✅ decided (see the box above).
- Years of experience: **10+** (from Mar 2016) ✅
- LinkedIn URL: https://www.linkedin.com/in/erwin-mark-anora/
- Portfolio URL: https://erwinmarkanora.vercel.app/ ✅ (already in header)
- GitHub: https://github.com/solomon0918
- Born Malta start: **Sep 2025** ✅
- Born Malta integrations: ✅ yes — keep it **non-specific**: "external APIs and third-party accounting software". No client, government or product names.
- Born Malta app: ✅ keep as "social-services web application" — don't say government.
- Born Malta Azure: not sure → **leave out** unless confirmed.
- Born Malta AI: ✅ company provides Claude; I use **my own workflow** (not team-wide). Term: **AI-assisted SDLC** — Claude for planning, building, deployment and maintenance.
- Cloudswyft interns supervised: ✅ **4–5**
- Cloudswyft's own LMS: ✅ in development, staging only → **no link**. Working name "OrbIT LMS" is **not final → don't name it**; say "Cloudswyft's own learning platform". Stack: **Open edX (Sumac), Python/Django, React micro-frontends (MFEs)**. Role: **sole developer** (1 DevOps teammate).
- ICEI: ✅ **completely finished**, client has since rebranded. All ICEI bullets → **past tense**. "now supporting 30,000+" → "served 30,000+".
- Offshorly team: ✅ **4 developers (2 back-end, 2 front-end)**, I was the full-stack lead
- Contractor clients: ✅ **5** (the 5 named in the resume)
- Certifications: ✅ **none** → no Certifications section
- Real estate portal: ✅ **Gintanao** — Next.js front-end, Laravel + Filament back-end and API. **Not live yet** (gintanao.com is only a coming-soon page). Moving from Vercel to DigitalOcean. Screenshots: can take from local. → **No link** on resume or portfolio until live; label "In development".

---

## Writing rules (every session follows these)

- Simple, plain English. Short bullets (1–2 lines each).
- Each bullet = what I did + result. Start with a verb (Built, Integrated, Led, Cut).
- Same tense: **current jobs in present tense** (Build, Maintain), **past jobs in past tense** (Built, Led).
- Never invent numbers.
- Banned words: seamless, robust, leverage, ensure(d), streamline, enhancing, user-focused, detail-oriented, team player, fast learner, strong communicator, "successfully".
- Same date format everywhere: `Sep 2025`, `Oct 2022` (never "Sept" or "September").
- Same spelling everywhere: **Full-Stack** (not "Fullstack"), **TypeScript**, **GitHub**, **Next.js**, **Vue**.

---

## Tasks

### Done in v2 ✅

- [x] **Task 2 — Header title** → "Fullstack Developer", portfolio link updated. *(LinkedIn/GitHub still missing → moved to Task 5)*
- [x] **Task 3 — Summary** → rewritten, 10+ years, Laravel/Vue core. *(Senior wording → see Decision)*
- [x] **Task 4-old — Add Born Malta** → added with 4 bullets.
- [x] **Task 5-old — Rewrite Cloudswyft** → 30,000+ learners, Xendit, Python/Django + React.
- [x] **Task 6-old — Merge timeline** → one list, contractor block covers overlaps.
- [x] **Task 7-old — Trim older jobs** → 2 pages.

### Remaining

- [x] **Task 1 — Create `resume.md` from v2**
  - Erwin pastes the **v2** resume text into the session.
  - Claude puts it in `resume.md` in the right reading order: Header → Summary → Experience → Projects (empty) → Skills → Education.
  - No content changes. Done when: `resume.md` matches v2.

- [ ] **Task 2 — Apply the Senior decision**
  - Summary: change "Senior full-stack engineer with 10+ years…" → "Full-stack developer with 10+ years…". Keep the rest.
  - Cloudswyft title: keep "Senior Full-Stack Engineer".
  - Check no other place says "Senior".
  - Done when: "Senior" appears only in the Cloudswyft job title.

- [ ] **Task 3 — Update Skills (biggest gap)**
  - Put current tools first: Laravel, Livewire, PHP, Python/Django, Vue, React, Next.js, TypeScript.
  - Add missing: **Livewire, Filament, PostgreSQL, MySQL, GitHub Actions, Open edX, Stripe/Xendit, AI-assisted SDLC (Claude)** (+ Azure if true). Livewire, GitHub Actions and Xendit are already in your bullets but not in Skills.
  - Remove or shrink: Gatsby, AngularJS, Material UI, Adobe XD.
  - Fix: **"Bitbucker" → "Bitbucket"**, "Typescript" → "TypeScript", "Github" → "GitHub".
  - Done when: skills match what's in the bullets, no typos.

- [ ] **Task 4 — Rewrite Born Malta + Offshorly, small tweaks to the rest**
  - Use these bullets exactly (all facts confirmed Oct 31). Don't add names, numbers or claims that aren't here.

  **Born Malta (full rewrite)** — label: "Contract · Concurrent role". Date: "Sep 2025" (not "Sept").
  1. Own end-to-end development of a social-services web application (Laravel, JavaScript), from feature design to deployment.
  2. Build and maintain integrations with external APIs and third-party accounting software.
  3. Contribute to 4 other Laravel projects, including a license-management system built with Livewire.
  4. Apply an AI-assisted SDLC with Claude across planning, building, deployment and maintenance, using my own reusable prompts and project rules; I review and own all code that ships.
  5. Manage CI/CD pipelines with GitHub Actions.

  **Offshorly (full rewrite)**
  1. Led development of AuctionTale, a real-time bidding platform (Vue, Laravel 9), from build to MVP launch.
  2. Led a remote team of 4 developers (2 back-end, 2 front-end) as full-stack lead: planned tasks, reviewed code, and set code-review standards.

  **Cloudswyft (rewrite to 3 bullets)** — ICEI is finished; Cloudswyft's own LMS is the current work. Use these exactly:
  1. Built the front-end of ICEI's Open edX learning platform, which served 30,000+ active learners.
  2. Sole developer of Cloudswyft's own learning platform (Open edX Sumac, Python/Django, React micro-frontends), currently in development; supervise 4–5 interns building features for it.
  3. Maintained ICEI's production platform: fixed client-reported issues across the Python/Django and React codebases and resolved Xendit payment and enrollment edge cases, working with DevOps.
  - **No staging link. Don't use the name "OrbIT LMS".**
  - This replaces all 4 old Cloudswyft bullets.

  **Independent Contractor (small tweaks only)**
  - First bullet: "Built web applications for 5 clients in the US, Singapore and the Philippines (Laravel, Vue, React)."
  - Move California Ticket King to the first client bullet.
  - "third-party gateway integration" → "Stripe payment portal".
  - Optional: cut the SBHE bullet if space is tight.

  **Note-e-fied, LOGIMINE:** no change.

  **Header:** "FULLSTACK DEVELOPER" → "FULL-STACK DEVELOPER".
  - Done when: no banned words, no unconfirmed brackets left, consistent tense, dates and spelling.

- [ ] **Task 5 — Add LinkedIn + GitHub to the header**
  - Add both links next to phone, email, portfolio.
  - Done when: header has 5 contact items.

- [ ] **Task 6 — Add a short Projects section**
  - Page 2 has room. 1 entry, 2 lines:
    > **Gintanao** (In development) — Davao real estate listing portal. Next.js front-end, Laravel + Filament back-end and REST API.
  - **No link** until the portal is live (gintanao.com is only a coming-soon page). Add DigitalOcean to the line only after it's deployed there.
  - Done when: one short project entry after Experience.

- [ ] **Task 7 — Consistency check vs portfolio**
  - Compare `resume.md` against the live portfolio: every job title, company name, and date must match.
  - Watch for: Senior wording, Born Malta title, the contractor block (portfolio lists these as separate jobs with their own dates — fine, but titles must match).
  - Done when: Claude lists zero mismatches.

- [ ] **Task 8 — Fix the layout + rebuild the PDF**
  - Switch to **single column**: Header → Summary → Experience → Projects → Skills → Education.
  - Normal headings, **no letter spacing** ("S K I L L S" → "Skills").
  - Keep 2 pages. Standard font, 10–11pt.
  - **Scan test:** open the PDF, select all, copy, paste into Notepad. Name must come first, then contact, then Summary, then jobs in order, each title next to its company. v2 fails this test.
  - Done when: 2-page PDF passes the scan test.

- [ ] **Task 9 — Replace the Drive file + final proofread**
  - Upload using **Manage versions** on the same Drive file so the portfolio link keeps working.
  - Read the whole PDF once out loud for typos.
  - Click "Download Resume" on the live portfolio to confirm it shows the new version.
  - Done when: new resume is live from the portfolio link.

---

## Log

- 2026-10-31 — v2 — title, summary, Born Malta, Cloudswyft, merged timeline, trimmed to 2 pages (done by Erwin directly).
- 2026-10-31 - Task 1 - created `docs/resume.md` from the v2 PDF in reading order (Header, Summary, Experience, Projects (empty), Skills, Education); no content changes.
