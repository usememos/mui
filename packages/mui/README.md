# @usememos/mui

A modern React UI component library built with [shadcn/ui](https://ui.shadcn.com) components, powered by [Radix UI](https://radix-ui.com) primitives and styled with [Tailwind CSS](https://tailwindcss.com).

## Features

- 🎨 **Modern Design**: Beautiful, accessible components with consistent design patterns
- ⚡ **High Performance**: Optimized components built on Radix UI primitives
- 🎯 **TypeScript**: Full TypeScript support with comprehensive type definitions
- 🌙 **Dark Mode**: Built-in dark mode support
- 📱 **Responsive**: Mobile-first responsive design
- ♿ **Accessible**: WAI-ARIA compliant components
- 🔧 **Customizable**: Easy to customize with Tailwind CSS
- 📦 **Tree Shakable**: Import only what you need

## Installation

```bash
npm install @usememos/mui
# or
yarn add @usememos/mui
# or
pnpm add @usememos/mui
```

## Setup

### 1. Install Dependencies

Make sure you have the required peer dependencies:

```bash
npm install react react-dom
```

### 2. Configure Tailwind CSS

Add the package to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ... your content paths
    "./node_modules/@usememos/mui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 3. Import Styles

Import the CSS file in your main application file:

```tsx
import "@usememos/mui/styles";
```

## Usage

```tsx
import { Button, Input, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@usememos/mui";

function App() {
  return (
    <div className="p-6 space-y-4">
      <Button>Click me</Button>

      <Input placeholder="Enter your email" />

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
```

## Components

### Form Components

All form components support consistent sizing with three size variants:

- `sm`: 32px height
- `default`: 36px height
- `lg`: 40px height

#### Button

```tsx
import { Button } from "@usememos/mui";

<Button variant="default" size="default">Default Button</Button>
<Button variant="destructive" size="sm">Small Destructive</Button>
<Button variant="outline" size="lg">Large Outline</Button>
```

**Props:**

- `variant`: `"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"`
- `size`: `"sm" | "default" | "lg" | "icon"`
- `asChild`: `boolean` - Render as child component

#### Input

```tsx
import { Input } from "@usememos/mui";

<Input placeholder="Enter text" />
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
```

#### Select

```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@usememos/mui";

<Select>
  <SelectTrigger size="default">
    <SelectValue placeholder="Choose an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="react">React</SelectItem>
    <SelectItem value="vue">Vue</SelectItem>
    <SelectItem value="angular">Angular</SelectItem>
  </SelectContent>
</Select>;
```

**SelectTrigger Props:**

- `size`: `"sm" | "default" | "lg"`

#### Textarea

```tsx
import { Textarea } from "@usememos/mui";

<Textarea placeholder="Enter your message..." />;
```

#### Checkbox

```tsx
import { Checkbox } from "@usememos/mui";

<Checkbox id="terms" />
<label htmlFor="terms">Accept terms and conditions</label>
```

#### Switch

```tsx
import { Switch } from "@usememos/mui";

<Switch id="notifications" />
<label htmlFor="notifications">Enable notifications</label>
```

### Display Components

#### Badge

```tsx
import { Badge } from "@usememos/mui";

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

#### Dialog

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@usememos/mui";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description goes here.</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>;
```

#### Tooltip

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@usememos/mui";

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>
      <p>Tooltip content</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>;
```

### Navigation Components

#### Dropdown Menu

```tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@usememos/mui";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>;
```

#### Sheet

```tsx
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@usememos/mui";

<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
    </SheetHeader>
    {/* Sheet content */}
  </SheetContent>
</Sheet>;
```

### Advanced Components

#### Date Picker

```tsx
import { DatePicker } from "@usememos/mui";

<DatePicker placeholder="Pick a date" onSelect={(date) => console.log(date)} />;
```

#### Calendar

```tsx
import { Calendar } from "@usememos/mui";

<Calendar mode="single" selected={date} onSelect={setDate} />;
```

#### Sidebar

```tsx
import { Sidebar, SidebarProvider, SidebarTrigger, SidebarContent } from "@usememos/mui";

<SidebarProvider>
  <Sidebar>
    <SidebarContent>{/* Sidebar content */}</SidebarContent>
  </Sidebar>
  <main>
    <SidebarTrigger />
    {/* Main content */}
  </main>
</SidebarProvider>;
```

## Customization

### Theming

The components use CSS custom properties for theming. You can customize the theme by overriding these variables:

```css
:root {
  --color-background: oklch(100% 0 0);
  --color-foreground: oklch(23.83% 0.052 265.75);
  --color-primary: oklch(26.06% 0.052 265.75);
  --color-primary-foreground: oklch(97.78% 0.001 247.86);
  /* ... more variables */
}
```

### Dark Mode

Dark mode is supported out of the box. Add the `dark` class to your root element:

```html
<html class="dark">
  <!-- Your app -->
</html>
```

### Custom Styling

All components accept a `className` prop for custom styling:

```tsx
<Button className="my-custom-styles">Custom Button</Button>
```

## Development

### Demo App

A demo application is available at `/apps/demo` showcasing all components:

```bash
cd apps/demo
npm run dev
```

### Building

```bash
npm run build
```

## License

MIT © [usememos](https://github.com/usememos)
