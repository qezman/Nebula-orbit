# Nebula

### Landing Page Template Marketplace — Builder.io Fusion Challenge

Nebula is a clean, responsive **landing page template marketplace** built with
**Next.js 14 (App Router)**. It showcases a catalogue of SaaS/agency/startup
templates with live previews, plus a prototype UI for AI‑assisted page
generation inspired by **Builder.io Fusion**.

---

## Live Demo

xxxxxxxxxxxx

## Demo Video

xxxxxxxxxxx

---

## Features

- **Homepage** – Hero, feature highlights, "How it works", testimonials and a
  "Premium Templates" section linking to live template demos.
- **Template Marketplace (`/templates`)** – Filterable + searchable grid of
  templates.
- **AI Generator (`/generator`)** – UI‑only flow for prompt‑based landing page
  generation (no backend calls), modeling the Fusion workflow.
- **About (`/about`)** – Copy explaining the problem, solution and architecture.
- **Shared Layout** – Global navigation + footer, scroll‑based animations via a
  custom `useInView` hook, and a modern, responsive design system.

Builder.io is used as **design and content inspiration**; there is no private
API key or server dependency in this project.

---

## Tech Stack

- **Next.js 14** with **App Router** (`app/`)
- **React 18**
- **TypeScript**
- **Tailwind CSS** + custom design tokens
- **shadcn/ui / Radix‑style components** for primitives
- **pnpm** for package management

Legacy `client/` code (original React SPA with React Router + Express) is kept
for reference, but the app now runs fully on Next.js.

---

## Project Structure (Short)

```txt
app/
  layout.tsx          # Root layout with Navbar, providers, global UI
  page.tsx            # Home page (renders client/pages/Index)
  templates/
    page.tsx          # Templates marketplace (renders client/pages/Templates)
  generator/
    page.tsx          # AI generator UI (renders client/pages/Generator)
  about/
    page.tsx          # About page (renders client/pages/About)
  not-found.tsx       # 404 page
  api/
    ping/route.ts     # Example API route
    demo/route.ts     # Example typed API route

client/
  pages/              # Legacy page components reused via the App Router
  components/         # Navbar, Footer, home sections, UI primitives
  hooks/useInView.ts  # Scroll/viewport animation hook

shared/
  api.ts              # Shared TypeScript interfaces for API responses

public/
  assets/             # Local template preview images
```

---

## Running Locally

Requirements: **Node 18+** and **pnpm**.

```bash
pnpm install
pnpm dev
```

Then visit:

```text
http://localhost:3000
```

Useful scripts:

```bash
pnpm build      # Production build
pnpm start      # Start production server
pnpm typecheck  # TypeScript validation
pnpm test       # Run tests (Vitest)
```

---

## Notes

- Project was initially scaffolded with Builder.io, then fully extended with Next.js for routing, template preview pages, and a complete UI experience.
- The **AI Generator page is UI‑only** (no external AI API calls here).
- Focus areas: clean structure, strong UX, template browsing, and demonstrating
  how a Fusion‑style workflow could feel inside a real product.

---

## Author

**Kazeem**
