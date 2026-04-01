# @usememos/mui

Opinionated React UI kit with explicit CSS delivery and compound component APIs.

## Install

```bash
pnpm add @usememos/mui react react-dom
```

Import the packaged theme once:

```tsx
import "@usememos/mui/theme.css";
```

## Compound API

```tsx
import { Button, Dialog, Select } from "@usememos/mui";

<Dialog.Root>
  <Dialog.Trigger render={<Button />}>Open dialog</Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Team access</Dialog.Title>
      <Dialog.Description>Review the current members.</Dialog.Description>
    </Dialog.Header>
  </Dialog.Content>
</Dialog.Root>;

<Select.Root defaultValue="react">
  <Select.Trigger aria-label="Framework">
    <Select.Value placeholder="Pick one" />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="react">React</Select.Item>
    <Select.Item value="vue">Vue</Select.Item>
  </Select.Content>
</Select.Root>;
```

## Public Entrypoints

- `@usememos/mui`
- `@usememos/mui/theme.css`
- `@usememos/mui/button`
- `@usememos/mui/checkbox`
- `@usememos/mui/dialog`
- `@usememos/mui/dropdown-menu`
- `@usememos/mui/popover`
- `@usememos/mui/radio-group`
- `@usememos/mui/select`
- `@usememos/mui/separator`
- `@usememos/mui/switch`
- `@usememos/mui/tooltip`

## Customization

Theme overrides are done with CSS variables on `:root`, `[data-mui-theme]`, or any subtree wrapper:

```css
:root {
  --mui-color-background: #ffffff;
  --mui-color-foreground: #0f172a;
  --mui-color-primary: #111827;
  --mui-color-primary-foreground: #ffffff;
}
```

Dark mode is supported out of the box:

```html
<html class="dark">
  <!-- app -->
</html>
```

or on any subtree:

```tsx
<div data-mui-theme="dark">{/* app */}</div>
```

Components also accept `className` for local overrides:

```tsx
<Button className="my-custom-styles">Custom Button</Button>
```

## Development

```bash
pnpm storybook
pnpm test
pnpm test:browser
pnpm build
```

The browser test project uses Vitest Browser Mode with Playwright. On a new machine, install Chromium once:

```bash
pnpm exec playwright install chromium
```

## License

MIT © [usememos](https://github.com/usememos)
