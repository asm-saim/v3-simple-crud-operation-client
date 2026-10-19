<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

## What this repo is

Next.js 16.4 / React 19 client for a CRUD users demo. All real data lives in a **separate backend** (Express + MongoDB) at `http://localhost:5000/users`; this repo is only the frontend.

## Commands

- `npm run dev` / `build` / `start` / `lint` / `typecheck` / `format` (prettier, only `**/*.{ts,tsx}`)
- **No tests exist** — verification = `npm run lint` + `npm run typecheck` (+ `npm run build` if routing changed)
- Backend must be running for `dev`/`build` to work on `/users` pages: all API calls are hard-coded `http://localhost:5000/users`, and `/users` is a server component that `await`s a fetch at request time, so a dead backend throws instead of rendering.

## API / backend contract

- Backend is MongoDB-backed: mutations return raw Mongo results (`modifiedCount`, `deletedCount`) — that's why components check those fields instead of HTTP status. Documents use `_id` (string).
- No API layer in this repo — `fetch` calls live inline in `app/users/**` and `components/UserCard.tsx` / `UpdateUserInfo.tsx`. Keep new endpoints consistent (or centralize if extending).

## Framework quirks (NOT standard Next/shadcn)

- shadcn/ui is the `base-nova` style built on **Base UI (`@base-ui/react`), not Radix**. Composition uses the `render` prop, e.g. `<DialogTrigger render={<Button>…</Button>} />` — `asChild` will not work.
- Legacy shadcn template copy still lives in `app/page.tsx`; the actual pages are `app/users/**`.
- Path alias `@/*` maps to the **repo root** (e.g. `@/components`, `@/lib`).
- `CLAUDE.md` just references this file; edit only `AGENTS.md`.

## Style

Prettier: no semicolons, double quotes, LF endings; Tailwind classes auto-sorted (`prettier-plugin-tailwindcss`, aware of `cn`/`cva`). Run `npm run format` before committing touched `ts/tsx` files.
