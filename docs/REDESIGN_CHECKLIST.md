# Portfolio Redesign Checklist

Site: https://erwinmarkanora.vercel.app/ (Next.js on Vercel)

## How to use this file

- **One task = one new Claude session.** Don't do two tasks in one session.
- Start every session with this prompt (change the task number):

  > Read `REDESIGN_CHECKLIST.md` (Order, Design brief, Design rules), then do **Task N only**. Use content only from `content` data file (Task 2) — don't rewrite any text. When done, show me what changed, then tick the box and add one line to the **Log**.

- Work on a separate branch: `git checkout -b redesign`. Merge to main only at Task 11.
- Commit after each task.

---

## Order (do these files in this sequence)

1. **`RESUME_CHECKLIST.md`** — the resume is the source of truth for all text.
2. **`PORTFOLIO_CHECKLIST.md`** — fixes the content on the current design and deploys it. This gives you a correct, live site **before** the redesign starts.
3. **This file** — rebuilds the look using the already-correct content.

Why this order: the redesign is the part most likely to drag on. If it does, the content-fixed site is already live and good enough to apply with.

**Deadline:** `____` (suggest **Jan 5**). If the redesign isn't done by then, apply with the content-fixed site and finish the redesign later. Don't delay applications for it.

---

## Design brief (fill in at Task 1)

- **Who it's for:** recruiters and hiring managers. They spend ~10 seconds. They need: name, role, stack, current jobs, best projects, resume, contact.
- **Positioning:** Full-stack developer, Laravel-first, 10+ years. (Role-level rule: see `RESUME_CHECKLIST.md`.)
- **Style:** Minimal, with a macOS-like feel (not a copy): rounded corners, soft translucent "glass" panels, subtle shadows, lots of space. Simple, shows the work, personal. One interactive, techy section: **How I work**, shown as a macOS-style window with a segmented control (Plan / Build / Deploy / Maintain) that swaps the step text. Click and keyboard only, no autoplay, still when "reduce motion" is on. This is the only exception to the "small effects only" rule.
- **3 portfolios I like (links):** None. Most felt too complicated; the goal is simpler than all of them.
- **Accent color:** Teal `#0FA4AF`
- **Fonts:** Nunito (headings and body) + JetBrains Mono (small labels, tags, How I work output)
- **Dark mode:** Dark only. No light mode, no toggle.
- **Keep from current site:** Nothing (content stays, the look is new).

---

## Design rules (every session follows these)

- **Name, title, one-line summary, "Download Resume" and "Contact" are visible without scrolling** on desktop and phone.
- Easy to skim: clear section headings, short text, lots of space.
- Max 2 fonts, 1 accent color.
- **No splash screens, loading animations or heavy effects.** Small hover/fade effects only, and turned off when the user has "reduce motion" on.
- All text is real text (not images), so search engines and screen readers can read it.
- Works on phone width first (360px), then desktop.
- No text changes during the redesign. Content comes only from the content data file.

---

## Tasks

### Setup

- [x] **Task 1 — Fill the design brief**
  - Erwin shares 3 portfolios he likes. Claude describes what they have in common and proposes 2 directions (style, color, fonts) in a few lines each.
  - Erwin picks one. Claude fills the **Design brief** above.
  - No code. Done when: every brief blank is filled.

- [x] **Task 2 — Move all content into one data file**
  - Put all site text (About, jobs, projects, skills, links, testimonials) into one file, e.g. `src/content/portfolio.ts`.
  - Components read from this file. **The site must look exactly the same after this task.**
  - Why: the redesign can change every component without losing or retyping content.
  - Done when: no text is hard-coded in components; site looks unchanged.

### Foundation

- [x] **Task 3 — Design tokens**
  - Set colors, fonts, font sizes, spacing and border radius in one place (Tailwind config / CSS variables), from the brief.
  - Add dark mode if the brief says so.
  - Done when: changing the accent color in one place changes it everywhere.

- [x] **Task 4 — Layout + navigation**
  - Section order: Hero → Experience → Projects → Skills → How I work (AI-assisted SDLC) → Testimonials → Contact.
  - Sticky header with section links; simple mobile menu.
  - Done when: navigation works on phone and desktop.

### Sections

- [x] **Task 5 — Hero**
  - Name, title, one-line summary, two buttons: **Download Resume** and **Contact**. GitHub + LinkedIn icons.
  - Done when: everything a recruiter needs is visible without scrolling.

- [x] **Task 6 — Experience**
  - Timeline or clean list. Each job: title, company, label (Contract / Concurrent role), dates, max 3 bullets, tech tags.
  - Concurrent jobs should look clearly "at the same time", not confusing.
  - Done when: a reader understands the job history in one skim.

- [x] **Task 7 — Projects**
  - **Gintanao** as a featured card at the top (bigger), labeled "In development", screenshots, no link.
  - Other projects as smaller cards: screenshot, name, 1–2 lines, tags, link (if live).
  - Optional: a simple case-study page for Gintanao (what it does, stack, what I built, screenshots).
  - Done when: strongest project stands out first.

- [x] **Task 8 — Skills**
  - Grouped: Back-end / Front-end / DevOps & Tools / Platforms. Simple chips or lists, no skill "progress bars" or percentages.
  - Done when: full stack readable in 5 seconds.
  - Also style the **How I work** section here: 4 steps (Plan → Build → Deploy → Maintain) as a simple row or numbered list. No diagrams or animations needed.

- [x] **Task 9 — Testimonials, contact, footer**
  - Testimonials: clean quote cards.
  - Contact: email button (and form only if it already works).
  - One footer, automatic year.
  - Done when: contact works, one footer.

### Polish + launch

- [ ] **Task 10 — Quality check**
  - Check at 360px, 768px and desktop widths.
  - Lighthouse (Chrome DevTools): Performance, Accessibility, SEO **90+**.
  - Keyboard navigation works; images have alt text; colors have enough contrast.
  - Page title, meta description and link-preview image (Open Graph) match the new design.
  - Done when: all scores 90+, no layout breaks.

- [ ] **Task 11 — Launch**
  - `npm run build` passes. Preview deploy on Vercel, click every link, check on your phone.
  - Merge `redesign` into main, deploy.
  - Done when: new design is live, resume link still works.

---

## Log

_One line per finished task. Example: `2026-12-01 — Task 2 — all content moved to portfolio.ts, no visual change.`_

- 2026-11-01 - Task 1 - brief filled: minimal macOS-like feel, dark only, Nunito + JetBrains Mono, teal accent, interactive How I work window.
- 2026-11-01 - Task 2 - all content moved to content/portfolio.ts, components read from it; built HTML has identical visible text, no visual change.
- 2026-11-01 - Task 3 - dark-only tokens in app/globals.css (one --accent #0FA4AF drives all accent shades), Nunito + JetBrains Mono, type scale, spacing, radius, glass utility, reduced-motion rule.
- 2026-11-01 - Task 4 - sections reordered (Hero, Experience, Projects, Skills, How I work, Testimonials, Contact), new glass sticky header with scrollspy and a simple drop-down mobile menu (Escape closes), build passes.
- 2026-11-01 - Task 5 - new hero: static name, title, summary, Download Resume + Contact buttons, GitHub/LinkedIn icons above the fold; intro in a glass panel (beside on desktop, below on phone); typing animation removed; build passes.
- 2026-11-01 - Task 6 - experience as a vertical timeline of glass cards (dates, label pill, title, company, bullets, mono tech tags); the two concurrent roles share one timeline point in a framed side-by-side group (stacked on phone); build passes.
- 2026-11-01 - Task 7 - Gintanao as a big featured glass card first ("In development" pill, stacked screenshots, highlights, tags, no link); other projects in a 1/2/3-column grid of small cards (screenshot, name, 2-line description, tags, link icon when live); no case-study page; build passes.
- 2026-11-01 - Task 8 - skills as 4 always-visible glass cards (mono group label, chips with small brand icon), tabs/autoplay/slider removed; How I work as a macOS-style window with a Plan/Build/Deploy/Maintain segmented control (click + arrow keys, no autoplay, all steps in HTML); build passes.
- 2026-11-01 - Task 9 - testimonials as glass quote cards (quote, then small photo + name; stars removed), contact as one centered glass panel with the mailto "Say Hello" button (no form, none existed), single restyled footer with automatic year; build passes.
