<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project tech baseline

- Package manager: **Bun** (`bun.lock` is present). Prefer Bun for install/run tasks.
- Framework/runtime: `next@16`, `react@19`, `react-dom@19`.
- Language/tooling: TypeScript (`strict: true`), ESLint 9, Tailwind CSS 4.

## Command conventions

Use Bun equivalents unless explicitly asked otherwise:

- `bun install`
- `bun run dev`
- `bun run lint`
- `bun run build`
- `bun run start`

## Architecture conventions

- Use the App Router (`app/` directory) for pages and layouts.
- Reusable UI components live in `app/components/`.
- Content is Markdown-first and lives under `content/`.
- Markdown collections are loaded by `lib/site-content.ts` via `gray-matter`.
- Keep route/category mappings aligned with `lib/site-content.ts` (for example: `blog -> /posts`, `lectures -> /lecturer`).

## Content schema safety

When adding or editing Markdown, preserve frontmatter fields expected by each collection type in `lib/site-content.ts`:

- Blog: `title`, `date`, `image`, `summary` (+ optional `layout`)
- Events: `title`, `date`, `image`, `category` (`hero` or `posts`), optional `summary`
- Resources: `title`, `date`, `image`, `category` (`books` or `courses`)
- Services: `title`, `date`, `image`, `category`

## Change validation

- After code changes, run at least `bun run lint`.
- For routing/content/data-shape changes, also run `bun run build`.
- Prefer small, focused edits and avoid introducing deprecated Next.js patterns.

