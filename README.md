# @usememos/mui

React UI library workspace for `@usememos/mui`.

## Workspace

- `packages/react`: published package
- `packages/primitives`: internal Base UI wrappers
- `packages/theme`: shared CSS theme output
- `apps/docs`: Vite docs website

## Development

```bash
pnpm install
pnpm typecheck
pnpm test
pnpm build
pnpm docs
```

Vitest browser tests use Playwright:

```bash
pnpm exec playwright install chromium
```

## Package Docs

See [packages/react/README.md](/Users/steven/Projects/usememos/mui/packages/react/README.md) for package usage, public entrypoints, and examples.
