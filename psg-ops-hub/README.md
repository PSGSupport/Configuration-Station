# PSG Ops Hub

A modern, cyberpunk-themed portal that provides a unified gateway to PSG operations tools.

## Features

- **Polished Landing Page**: Two main app cards with launch controls
- **Semi-Dark Cyberpunk Theme**: Blue/white/black/purple palette with subtle glow effects
- **Smooth Animations**: Hover states, transitions, and accordion animations using Framer Motion
- **FAQ Accordion**: Explains each app's functionality
- **Decision Helper**: "Which tool do I need?" quick guide
- **Embed Views**: Attempt to embed apps with graceful fallback
- **Responsive Design**: Mobile-friendly layout
- **Accessibility**: Keyboard navigation, focus outlines, reduced motion support

## Tools Linked

1. **Configurations Audit** - NinjaOne to ConnectWise inventory reconciliation
   - https://configurations-audit.onrender.com/

2. **Lifecycle Report** - Hardware lifecycle and warranty management
   - https://machine-lifecycle-report-scalepad.onrender.com/

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_CONFIG_AUDIT_URL` | Configurations Audit app URL | https://configurations-audit.onrender.com/ |
| `NEXT_PUBLIC_LIFECYCLE_REPORT_URL` | Lifecycle Report app URL | https://machine-lifecycle-report-scalepad.onrender.com/ |

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Main portal page
│   ├── layout.tsx                  # Root layout with metadata
│   ├── globals.css                 # Global styles and theme
│   └── embed/
│       ├── config-audit/page.tsx   # Config Audit embed view
│       └── lifecycle-report/page.tsx # Lifecycle embed view
└── components/
    ├── TopNav.tsx                  # Navigation header
    ├── HeroSection.tsx             # Hero banner
    ├── AppCard.tsx                 # Tool card with launch controls
    ├── FAQAccordion.tsx            # FAQ sections
    ├── DecisionHelper.tsx          # Tool selection guide
    └── Footer.tsx                  # Footer with links
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui (Card, Button, Accordion, Tabs)
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Deployment

This hub can be deployed as a static site or SSR application.

### Render

1. Create a new Static Site on Render
2. Connect your repository
3. Set build command: `npm run build`
4. Set publish directory: `out` (for static) or leave default for SSR
5. Add environment variables if needed

## Notes

- The hub does not replicate backend logic from either tool
- Embedding may be blocked by security headers on the target apps - this is expected
- Always provides "Open in New Tab" as a reliable fallback

## License

Internal use only - Pearl Solutions Group
