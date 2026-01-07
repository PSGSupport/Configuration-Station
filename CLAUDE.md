
---

## CLAUDE.md

```md
# CLAUDE.md — PSG Ops Hub (Portal)

You are building a **standalone hub UI** that links to two existing web apps. Treat this as a frontend product: design-first, UX-first, fast, clean, stable.

## Core Links (Source of truth)
- Configurations Audit: https://configurations-audit.onrender.com/
- Lifecycle Report (Scalepad Alternative): https://machine-lifecycle-report-scalepad.onrender.com/

The hub itself should not replicate backend logic from either tool — it is a portal + explainer + launch surface.

---

## Product Requirements

### Must Have
- A polished landing page with two main “App Cards”
- Semi-dark theme with **blue/white/black/purple palette**
- Modern cyberpunk feel (subtle glow, glass panels, animated accents)
- Smooth animation (hover states, transitions, accordions)
- An FAQ/Accordion section explaining each app (derived from the READMEs)
- Launch options:
  - Open in new tab (always works)
  - Open in same tab (always works)
  - Embed view (iframe) **only if allowed**, with graceful fallback

### Should Have
- “Which tool do I need?” quick decision helper
- Reduced-motion support
- Mobile responsive layout

### Nice-to-have
- Local “favorites” or “recently used” via localStorage
- Status checks (health endpoints) if reachable
- Short runbook/troubleshooting panel

---

## Technical Direction

### Recommended Stack
- Next.js (App Router) + Tailwind CSS
- shadcn/ui components (Card, Button, Accordion, Tabs)
- Framer Motion for animation

Keep it lightweight. Avoid heavy 3D or huge animation libraries.

### Embedding Rules (IMPORTANT)
Many sites set `X-Frame-Options` or `Content-Security-Policy` to block embedding.

- Build embed routes like `/embed/config-audit` that attempts an iframe.
- Detect common failure modes:
  - Show a clear message: “Embedding blocked by security policy.”
  - Provide a prominent “Open in new tab” button.
- Never break the hub if embedding fails.

Implementation hint:
- You can’t reliably detect iframe CSP failures in all browsers.
- Use a timed “loading” state + fallback UI if it doesn’t render.

---

## UI / Design System

### Palette (Guideline)
- Background: near-black → deep navy gradient
- Text: off-white / cool white
- Accents: electric blue + violet
- Borders: subtle transparent whites
- Glow: restrained; prefer box-shadow and thin neon edge highlights

### Layout Rules
- Centered container, max width ~1100–1200px
- Two-column cards on desktop, stacked on mobile
- Balanced whitespace; avoid clutter

### Typography
- Use a clean primary font (system/Inter).
- Optional display font only for headings, and keep it minimal.

### Animation
- Use Framer Motion sparingly:
  - Page fade/slide on mount
  - Card hover lift (2–6px)
  - Accordion open/close smooth height transition
- Respect `prefers-reduced-motion`:
  - If reduced motion, disable parallax and reduce transition durations

### Accessibility
- Keyboard navigation for all interactive elements
- Focus outlines visible (custom but clear)
- Contrast: keep readable; neon accents must not be the only indicator

---

## Content Requirements (FAQ / Explainability)

Write concise, user-facing explanations based on the two tool READMEs:

### Configurations Audit FAQ points to include
- What it does (NinjaOne vs CW inventory reconciliation)
- Outputs: matched / missing in CW / orphaned in CW
- Matching: serial first, hostname fallback
- Real-world limitations:
  - name mismatch strategies (exact/contains/word-based)
  - API quirks (org filtering unreliable; client-side filtering needed)
- Who should use it (MSP ops, asset reconciliation)

### Lifecycle/Warranty FAQ points to include
- What it generates (HTML + PDF lifecycle reports)
- Executive summary + age bands (0–3 green, 3–5 yellow, 5+ red)
- OS support status warnings
- Warranty quote features (bulk, search, coverage months, markup)
- Expectations: large orgs take time; async job processing

Keep copy crisp. Avoid huge walls of text.

---

## Implementation Checklist

### Pages
- `/` main portal
- `/embed/config-audit`
- `/embed/lifecycle-report`
- optional `/about`

### Components
- `AppCard` (title, description, feature bullets, launch controls)
- `DecisionHelper` (2–4 questions or a simple chooser)
- `FAQAccordion` (two sections: Audit and Lifecycle)
- `TopNav` (minimal)
- `Footer` (internal note + version)

### State
- store last launched app in localStorage (optional)
- keep embed modes isolated from main page

---

## Code Quality

- TypeScript preferred
- Consistent component organization
- No secrets in frontend
- Keep config via env vars:
  - `NEXT_PUBLIC_CONFIG_AUDIT_URL`
  - `NEXT_PUBLIC_LIFECYCLE_REPORT_URL`

---

## Testing

Minimum:
- Manual test in Chrome/Edge
- Verify mobile layout
- Verify “Open in new tab” always works
- Verify embed fallback messaging is clear

Optional:
- Playwright smoke tests for navigation and basic rendering

---

## Deployment Notes

- This hub can be deployed as a static site.
- If using Next.js static export, ensure embed routes are compatible.
- If using SSR on Render, keep server config minimal.

---

## Non-Goals

- Do not re-implement the audit logic or report generation.
- Do not store or handle credentials.
- Do not attempt to proxy requests to the underlying apps.

The hub is a premium UI front door, not a backend gateway.
