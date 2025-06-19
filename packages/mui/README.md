# @usememos/mui

A modern React component library built with [shadcn/ui](https://ui.shadcn.com/) and [Tailwind CSS v4](https://tailwindcss.com/).

[![npm version](https://img.shields.io/npm/v/@usememos/mui.svg)](https://www.npmjs.com/package/@usememos/mui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install @usememos/mui
# or
yarn add @usememos/mui
# or
pnpm add @usememos/mui
```

## Usage

### 1. Import the styles

Add the CSS import to your app's entry point (e.g., `App.tsx`, `index.tsx`, or `main.ts`):

```tsx
import "@usememos/mui/styles.css";
```

### 2. Use the components

```tsx
import { Button, Input, Checkbox, Switch, Textarea } from "@usememos/mui";

function App() {
  return (
    <div className="p-4 space-y-4">
      <Button variant="default">Click me</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Cancel</Button>

      <Input placeholder="Enter your name" />

      <Textarea placeholder="Write your message..." />

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label htmlFor="terms">Accept terms and conditions</label>
      </div>

      <Switch />
    </div>
  );
}
```

## Styling

This library uses Tailwind CSS v4 with CSS variables for theming. The default theme uses a slate color palette, but you can customize it by overriding the CSS variables in your app:

```css
:root {
  --radius: 0.5rem;
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... other variables */
}
```

### Using with your own Tailwind configuration

If you're using Tailwind CSS in your project, you can use the `cn` utility function to merge classes:

```tsx
import { Button, cn } from "@usememos/mui";

<Button className={cn("custom-class", "mt-4")}>Custom Button</Button>;
```

## TypeScript

This library is written in TypeScript and provides full type definitions out of the box.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Memos Team](https://github.com/usememos)

## Links

- [npm package](https://www.npmjs.com/package/@usememos/mui)
- [GitHub repository](https://github.com/usememos/mui)
- [Issue tracker](https://github.com/usememos/mui/issues)
