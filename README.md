# Mastercard Gateway — Demo Hub

A central launcher for Mastercard Gateway integration demos used by sales.

## Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Deployed on Vercel

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Adding / editing flows

All demo entries live in [`app/flows.ts`](app/flows.ts). Each flow has:

- `title`
- `description`
- `url`
- `inDevelopment` (optional) — shows an "In Development" badge

Group your flows by category. The home page renders them automatically.

## Deploy

Push to `main`. Vercel auto-deploys.
