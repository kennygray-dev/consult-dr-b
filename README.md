# Consult Dr B — Website

A modern medical consulting website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Brand Colours
| Role      | Hex       |
|-----------|-----------|
| Primary   | `#09357E` |
| Secondary | `#9E7F2E` |

## Pages
| Route          | File                              |
|----------------|-----------------------------------|
| `/`            | `src/app/page.tsx`                |
| `/about`       | `src/app/about/page.tsx`          |
| `/programs`    | `src/app/programs/page.tsx`       |
| `/services`    | `src/app/services/page.tsx`       |
| `/contact`     | `src/app/contact/page.tsx`        |
| `/team`        | `src/app/team/page.tsx`           |
| `/nutrition`   | `src/app/nutrition/page.tsx`      |
| `/coach`       | `src/app/coach/page.tsx`          |
| `/partnership` | `src/app/partnership/page.tsx`    |
| `/peptide`     | `src/app/peptide/page.tsx`        |

## Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Header + Footer)
│   ├── globals.css         # Tailwind + CSS variables
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── programs/page.tsx
│   ├── services/page.tsx
│   ├── contact/page.tsx
│   ├── team/page.tsx
│   ├── nutrition/page.tsx
│   ├── coach/page.tsx
│   ├── partnership/page.tsx
│   └── peptide/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky nav with mobile menu
│   │   └── Footer.tsx      # Full footer with links + contact
│   └── ui/
│       └── index.tsx       # Shared components: Button, Card, Badge, PageHero, SectionHeader
├── lib/
│   ├── constants.ts        # Nav links, contact info, social links
│   └── utils.ts            # cn() utility
└── types/
    └── index.ts            # Shared TypeScript types
```

## Quick Start

**Prerequisites:** Node.js 18+

```bash
# Option A — Use the setup script (installs + starts dev server)
chmod +x setup.sh
./setup.sh

# Option B — Manual
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding a New Page

1. Create `src/app/your-page/page.tsx`
2. Add the route to `src/lib/constants.ts` in `NAV_LINKS`
3. Done — it automatically appears in the Header and Footer

## Scripts
| Command         | Description              |
|-----------------|--------------------------|
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run start` | Start production server  |
| `npm run lint`  | Lint the codebase        |
