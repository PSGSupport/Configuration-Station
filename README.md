# PSG Ops Hub (Portal)

A stylish, semi-dark, cyberpunk-inspired **hub portal** that routes users to two production web apps:

- **Configurations Audit** (NinjaOne ↔ ConnectWise reconciliation)  
  https://configurations-audit.onrender.com/
- **Machine Lifecycle Report (Scalepad Alternative)** (Lifecycle reports + warranty quotes)  
  https://machine-lifecycle-report-scalepad.onrender.com/

This hub is designed to feel like a “command center” — fast, animated, readable, and informative — while keeping the actual heavy-lift tooling inside the two existing apps.

---

## Goals

- Provide a **single landing portal** that makes the two tools feel like one product.
- Deliver a **premium UI**: semi-dark theme, **blue/white/black/purple palette**, balanced layout, subtle **cyberpunk glow**, and smooth animation.
- Include **tool explanations** and “how to use” sections (FAQ / accordion / quick tips) so users understand what each app does before launching it.
- Offer a **clean launch experience**:
  - Open in same tab, new tab, or embed (iframe) when possible
  - Fall back gracefully if embedding is blocked by security headers

---

## What’s Inside

### 1) Portal Cards
Two large cards with:
- Tool name + short tagline
- Key features
- “Launch” button(s):
  - **Open** (new tab)
  - **Open here** (same tab)
  - **Embed** (if allowed)

### 2) Quick Compare
A small “Which tool do I need?” helper:
- If you’re reconciling inventory across RMM vs PSA → **Configurations Audit**
- If you’re producing lifecycle/warranty/replacement reports → **Lifecycle Report**

### 3) FAQ / Accordion (Built from your existing READMEs)
Includes short, readable answers for:
- What each tool does
- Inputs / outputs
- Data matching logic (serial/hostname)
- Common pitfalls (missing serials, API quirks, long report times)
- Security model (env vars, no secrets in UI)

### 4) Status + Confidence Cues
- “Service Status” links (simple health checks when available)
- Notes about expected runtime (e.g., lifecycle report generation can take minutes)

---

## Suggested Tech Stack

This hub can be extremely lightweight. Recommended:

- **Next.js + Tailwind** (fast UI iteration, modern animations)
- **Framer Motion** (smooth motion + page transitions)
- Optional: **shadcn/ui** for accordion, buttons, tabs
- Deployment: **Render Static Site** (or any static hosting)

> If you prefer “pure static,” this can also be shipped as a single-page HTML/CSS/JS site.

---

## Routes / Pages (Recommended)

- `/` — Main portal (cards, quick compare, FAQ, launch)
- `/embed/config-audit` — iframe wrapper (if allowed)
- `/embed/lifecycle-report` — iframe wrapper (if allowed)
- `/about` — optional short page for internal notes / contact / version

Embedding is optional. The hub should **never rely** on iframe embedding; it should be a bonus feature only.

---

## UX / Visual Direction

### Theme
- Semi-dark background with subtle gradient (black → deep navy)
- Accents: electric blue + violet + soft white highlights
- “Cyberpunk but professional”: glowing edges, thin borders, glass panels, minimal noise

### Typography
- Clean sans (Inter / system default)
- Optional display font for headers (Orbitron / Space Grotesk vibe) — keep it tasteful

### Animation
- Subtle hover lift + glow on cards
- Background animated gradient / particles (lightweight)
- Page transitions and accordion animations should be smooth, not flashy

### Accessibility
- All important contrast passes WCAG AA where feasible
- Keyboard navigable
- Reduced motion support (`prefers-reduced-motion`)

---

## Configuration

No secrets are required for the hub itself.

Optionally define the app URLs via environment variables:

- `NEXT_PUBLIC_CONFIG_AUDIT_URL`  
- `NEXT_PUBLIC_LIFECYCLE_REPORT_URL`

Defaults can be hardcoded to the current Render URLs if you prefer.

---

## Local Development (Next.js)

```bash
npm install
npm run dev
# open http://localhost:3000
