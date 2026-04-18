# Core Design System

## Purpose

This document defines a reusable design system for web products. It focuses on foundations, tokens, primitive components, interaction rules, accessibility requirements, theming, governance, and quality gates.

The system is intentionally calm, content-first, and workspace-oriented:

- Low visual noise.
- Readable primary content.
- Compact, predictable controls.
- Neutral surfaces by default.
- Clear hierarchy through typography, spacing, alignment, and state.
- Semantic color only when color carries meaning.

This document should be portable across products. Product-specific screens, domain objects, and feature-specific patterns should be documented separately.

## Scope

In scope:

- Color, typography, spacing, radius, elevation, iconography, and motion.
- Shared primitives such as buttons, fields, menus, dialogs, navigation, surfaces, loading states, error states, and empty states.
- Generic layout rules for app shells, sidebars, content columns, panels, overlays, and responsive behavior.
- Accessibility, theming, contribution, and quality standards.

Out of scope:

- Exact page layouts.
- Product-specific cards or feed items.
- Domain-specific data displays.
- Feature-specific editors or content renderers.
- Product-specific workflow patterns.
- Implementation details tied to one component file.

## Design Principles

### 1. Content First

The primary content or task should be the strongest part of the interface. Controls, navigation, status, and supporting information should clarify the experience without competing with the work area.

Rules:

- Primary content gets the strongest readable contrast.
- Secondary information stays visually quiet.
- Actions appear where users expect them and do not create layout shift.
- Long-form content should be comfortable at default zoom and common viewport widths.
- Empty and error states should help users recover or continue.

### 2. Calm Chrome

Chrome is the interface around the work: navigation, panels, buttons, menus, borders, fields, sheets, dialogs, and toolbars.

Rules:

- Prefer neutral surfaces over colored panels.
- Prefer subtle background changes over thick borders.
- Prefer one boundary treatment at a time: border, background, or shadow.
- Avoid heavy shadows on routine app surfaces.
- Reserve stronger shadows for floating layers and modal surfaces.

### 3. Dense But Breathable

The system should support information-dense products without feeling cramped.

Rules:

- Navigation and menus use compact heights.
- Content and creation areas get more line height and padding.
- Lists scan quickly, with stable row heights and no hover-induced layout shift.
- Touch targets remain usable even when desktop density is compact.

### 4. Neutral By Default

The system should be mostly neutral. Color is for action, focus, status, warning, danger, selection, and brand moments.

Rules:

- Primary actions use the primary color.
- Destructive actions use the destructive color.
- Success, live, connected, or positive states may use the accent color.
- Do not use color as the only signal.
- Avoid decorative color variation that weakens semantic meaning.

### 5. Accessible Interaction

Every component must work with keyboard, pointer, touch, screen reader, zoom, and reduced-motion preferences.

Rules:

- Visible focus is required for all interactive elements.
- Hover-only affordances must also appear on focus.
- Text contrast must pass WCAG AA for normal text.
- Icon-only controls need accessible names.
- State must not be conveyed by color alone.
- Motion must not be required to understand or operate the interface.

## Foundations

### Color Roles

Components should use semantic roles, not raw colors.

| Role | Purpose | Light Direction | Dark Direction |
| --- | --- | --- | --- |
| `background` | App canvas | Near-white neutral | Neutral charcoal |
| `foreground` | Main text | Ink | Near-white |
| `card` | Contained surface | White | Slightly raised charcoal |
| `card-foreground` | Text on contained surface | Ink | Near-white |
| `popover` | Floating menus and overlays | White | Raised charcoal |
| `popover-foreground` | Text on floating surface | Ink | Near-white |
| `primary` | Main action or strong emphasis | Ink or brand color | High-contrast light or brand color |
| `primary-foreground` | Text on primary | White or near-white | Dark or near-white, depending primary |
| `secondary` | Supporting action surface | Light neutral | Raised dark neutral |
| `secondary-foreground` | Text on secondary | Ink | Near-white |
| `muted` | Subtle background | Soft neutral | Soft dark neutral |
| `muted-foreground` | Secondary text | Medium neutral | Soft light neutral |
| `accent` | Hover, selected, or active neutral state | Light neutral gray | Raised dark neutral |
| `accent-foreground` | Text on accent | Ink | Near-white |
| `destructive` | Dangerous or destructive action | Red | Red |
| `destructive-foreground` | Text on destructive | White | White or near-white |
| `border` | Standard dividers | Neutral gray | Dark neutral gray |
| `input` | Field border | Stronger gray | Stronger dark gray |
| `ring` | Focus ring | Accessible accent | Accessible accent |
| `sidebar` | Navigation surface | Slightly distinct neutral | Slightly distinct dark neutral |
| `sidebar-foreground` | Navigation text | Medium neutral | Soft light neutral |
| `sidebar-accent` | Navigation hover/active state | Neutral hover | Neutral hover |
| `sidebar-accent-foreground` | Text on navigation hover/active state | Ink | Near-white |
| `sidebar-border` | Navigation divider | Neutral gray | Dark neutral gray |
| `surface-hover` | Generic hover fill | Light neutral | Raised dark neutral |
| `surface-pressed` | Generic pressed fill | Slightly stronger neutral | Stronger raised dark neutral |
| `border-subtle` | Low-emphasis border | Soft neutral gray | Soft dark neutral gray |
| `text-subtle` | Low-emphasis text | Medium neutral | Soft light neutral |
| `text-faint` | Placeholder or helper text | Low-contrast neutral | Lower-contrast light neutral |
| `brand-accent` | Sparse brand, success, or focus accent | Muted accent | Muted accent |

### CSS Token Proposal

The system should use CSS custom properties as the source of truth for theme values.

```css
:root {
  --background: oklch(0.985 0.0015 260);
  --foreground: oklch(0.205 0.004 260);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.205 0.004 260);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.205 0.004 260);
  --primary: oklch(0.245 0.006 260);
  --primary-foreground: oklch(0.99 0 0);
  --secondary: oklch(0.952 0.002 260);
  --secondary-foreground: oklch(0.265 0.005 260);
  --muted: oklch(0.943 0.002 260);
  --muted-foreground: oklch(0.49 0.004 260);
  --accent: oklch(0.93 0.003 260);
  --accent-foreground: oklch(0.225 0.005 260);
  --destructive: oklch(0.56 0.18 25);
  --destructive-foreground: oklch(1 0 0);
  --border: oklch(0.895 0.003 260);
  --input: oklch(0.84 0.003 260);
  --ring: oklch(0.52 0.085 155);
  --sidebar: oklch(0.965 0.002 260);
  --sidebar-foreground: oklch(0.41 0.004 260);
  --sidebar-accent: oklch(0.925 0.003 260);
  --sidebar-accent-foreground: oklch(0.225 0.005 260);
  --sidebar-border: oklch(0.88 0.003 260);
  --surface-hover: oklch(0.958 0.002 260);
  --surface-pressed: oklch(0.925 0.003 260);
  --border-subtle: oklch(0.925 0.0025 260);
  --text-subtle: oklch(0.42 0.004 260);
  --text-faint: oklch(0.63 0.004 260);
  --brand-accent: oklch(0.56 0.105 155);
}
```

Rules:

- Every theme must define every semantic token used by components.
- New colors require a semantic role and documented use.
- Avoid raw color values in components unless the value is user-generated or runtime-generated.
- Prefer OKLCH for perceptual consistency.
- Default light surfaces should be neutral, not beige or color-tinted.
- Default dark surfaces should be neutral charcoal, not blue-heavy.

### Typography

Use a system font stack by default.

Primary font:

```css
ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif
```

Monospace font:

```css
ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
```

Type scale:

| Token | Size | Line Height | Weight | Use |
| --- | --- | --- | --- | --- |
| `text-xs` | 12px | 16px | 400 to 500 | Captions, helper text, compact labels |
| `text-sm` | 14px | 20px | 400 to 500 | Controls, navigation, menus |
| `text-base` | 15 to 16px | 24 to 28px | 400 | Primary content and editable text |
| `text-lg` | 18px | 28px | 500 to 600 | Section headings |
| `text-xl` | 20px | 28px | 600 | Page subheadings |
| `text-2xl` | 24px | 32px | 600 | Page headings |

Rules:

- Primary content should use comfortable line height.
- UI labels should stay compact.
- Avoid letter-spacing except for rare all-caps labels.
- Do not use viewport-scaled font sizes.
- Do not use negative letter spacing.

### Spacing

Use a compact 4px-based scale.

| Token | Value | Use |
| --- | --- | --- |
| `space-1` | 4px | Icon/text gaps, compact controls |
| `space-2` | 8px | Control padding, row gaps |
| `space-3` | 12px | Content block gaps, toolbar gaps |
| `space-4` | 16px | Panel padding |
| `space-6` | 24px | Section gaps |
| `space-8` | 32px | Page top/bottom breathing room |
| `space-12` | 48px | Rare large layout separation |

Rules:

- Repeated lists should use compact, consistent gaps.
- Primary work areas can use more vertical breathing room than navigation.
- Dense controls must still preserve readable labels and usable targets.
- Larger task pages can use larger section gaps than browsing surfaces.

### Radius

The system uses small radii.

| Token | Value | Use |
| --- | --- | --- |
| `radius-sm` | 2px | Small highlights and inline surfaces |
| `radius-md` | 4px | Menu items and compact rows |
| `radius-lg` | 6px | Inputs, buttons, panels |
| `radius-xl` | 8px | Dialogs, sheets, media frames |

Rules:

- Buttons, panels, and cards should stay at 8px radius or below.
- Avoid pill shapes except for counts, badges, avatars, and explicitly circular controls.
- Radius should clarify containment, not decorate.

### Elevation

Routine app surfaces should not use shadows.

| Level | Treatment | Use |
| --- | --- | --- |
| `flat` | No shadow, optional subtle border | Rows, panels, sidebars |
| `raised` | Border plus very light shadow | Focused panels or media wrappers |
| `floating` | Shadow and border | Dropdowns, popovers, selects |
| `modal` | Stronger shadow, overlay | Dialogs and sheets |

Rules:

- Hover should usually adjust background before adding shadow.
- Floating layers should have both a subtle border and shadow.
- Avoid stacking multiple shadowed containers.
- Do not use shadows to compensate for weak spacing or hierarchy.

### Iconography

Use one icon family per product unless there is a strong compatibility reason.

Rules:

- Navigation icons: 16px to 20px.
- Toolbar icons: 16px.
- Empty-state icons: 48px to 96px, low contrast.
- Icon stroke weight should be consistent.
- Do not introduce decorative icons that do not improve scanning.
- Icon-only controls require accessible names.

### Motion

Motion should clarify state, continuity, and hierarchy.

Allowed motion:

- Menu, popover, sheet, and dialog entrance/exit.
- Hover and focus color transitions.
- Loading skeletons.
- Scroll restoration or back-to-top smooth scroll.
- Small state transitions that do not move surrounding layout.

Rules:

- Keep routine durations between 100ms and 220ms.
- Larger sheets can use up to 300ms.
- Do not animate layout in a way that shifts content unexpectedly.
- Respect `prefers-reduced-motion`.

## Layout

### App Shell

The app shell has two major regions:

- Navigation/context: global navigation, search, account controls, and secondary context.
- Primary workspace: reading, writing, browsing, or task-oriented content.

Desktop:

- Sidebar width should usually fall between 224px and 280px.
- Sidebar should use a distinct neutral surface.
- Main area should use the app background.
- Reading or writing columns should usually target 640px to 720px.
- Task-heavy pages may use a wider layout.

Mobile:

- Header remains compact and sticky only when needed.
- Sidebar content moves into drawers or sheets.
- Primary content should use nearly full width with 12px to 16px horizontal page padding.
- Touch targets should be at least 32px high for compact controls and 40px for primary actions.

### Content Width

Primary content should optimize readability and task completion, not maximize horizontal fill.

Recommended:

- Reading/writing column max width: `44rem` or similar.
- Task pages can use wider grids when information density requires it.
- Media and tables may overflow into wider regions, but surrounding text width should remain readable.

### Responsive Behavior

Rules:

- Avoid viewport-scaled typography.
- Avoid layout shifts on hover, focus, loading, and validation.
- Drawers and dialogs must fit within the visible viewport.
- Long labels and unbroken strings must wrap, truncate, or use responsive constraints.
- Controls must remain reachable at common mobile widths.

## Components

### Button

Button variants:

| Variant | Visual | Use |
| --- | --- | --- |
| `default` | Primary fill, high-contrast text | Primary action |
| `secondary` | Neutral fill | Supporting action |
| `outline` | Neutral border, neutral surface | Secondary or toolbar action |
| `ghost` | No border, hover fill | Low-emphasis action |
| `destructive` | Destructive fill or text | Dangerous or irreversible action |
| `link` | Text treatment | Inline navigation or low-chrome action |

Rules:

- Primary buttons should be rare.
- Cancel is usually ghost or secondary.
- Icon-only buttons must include accessible names.
- Disabled buttons should reduce opacity but preserve layout.
- Button text should be action-oriented and concise.

### Field

Fields include input, textarea, select trigger, and similar form controls.

Rules:

- Default background: `card` or equivalent surface.
- Border: `input`.
- Placeholder: `text-faint`.
- Focus: stronger border plus soft ring.
- Invalid state: destructive border or message.
- Disabled state: reduced opacity and unavailable cursor.
- No heavy shadow.
- Labels and helper text must be programmatically associated when possible.

### Menu

Menus include dropdown menus, context menus, command-style menus, and select lists.

Rules:

- Surface: `popover`.
- Border: `border-subtle`.
- Radius: 6px or less.
- Shadow: floating level.
- Item hover/focus: `accent`.
- Destructive items use destructive text and a destructive-tinted focus state.
- Keyboard navigation is required.
- Separators should be subtle.

### Popover

Popovers expose compact supplemental controls or information.

Rules:

- Popovers should be lightweight and dismissible.
- They should not contain long workflows.
- They must stay within viewport bounds.
- Focus behavior must be predictable.
- Use a dialog instead when the task requires commitment, validation, or multiple steps.

### Dialog

Dialogs interrupt the current flow for a focused task or decision.

Rules:

- Use `popover` or equivalent floating surface.
- Overlay should dim without feeling opaque.
- Title must be clear and specific.
- Primary action goes in the footer on the right for left-to-right languages.
- Destructive confirmation must name the consequence.
- Focus must be trapped and restored correctly.

### Sheet

Sheets are edge-attached surfaces for navigation, details, or compact workflows.

Rules:

- Use sheets when context should remain visually connected to the current page.
- Use dialogs for high-risk or highly focused confirmation.
- Sheets must fit within the viewport.
- Close controls must be available and accessible.
- Mobile sheets should preserve safe-area spacing.

### Navigation

Navigation helps users orient and move through product areas.

Rules:

- Use compact rows.
- Active row gets a neutral fill or clear marker.
- Avoid large rounded pills unless they are part of the product identity.
- Avoid shadows on active navigation items.
- Counts and status indicators should remain small.
- Navigation labels must stay readable when collapsed, truncated, or translated.

### Search

Search is an input for finding or narrowing content.

Rules:

- Search input uses compact height.
- Placeholder copy should be direct.
- Search results, if shown, must support keyboard navigation.
- Clear actions should be reachable by keyboard and pointer.
- Adjacent controls can sit inside the search field only if spacing remains stable.

### Surface

Surfaces are generic containers for related content or controls.

Variants:

| Variant | Treatment | Use |
| --- | --- | --- |
| `plain` | No border or background change | Layout grouping |
| `subtle` | Muted background | Low-emphasis grouping |
| `outlined` | Border only | Clear containment |
| `raised` | Border and light shadow | Floating or emphasized grouping |

Rules:

- Do not put cards inside cards unless the inner item is a distinct interactive object.
- Prefer spacing and headings before adding borders.
- Routine surfaces should be flat or near-flat.
- Hover states must not resize the surface.

### Badge

Badges show compact counts, statuses, or short labels.

Rules:

- Keep text short.
- Use semantic color only for meaningful status.
- Counts should support large values without resizing adjacent layout unexpectedly.
- Do not use badges as decorative accents.

### Empty State

Empty states explain why content is absent and what, if anything, the user can do next.

Rules:

- Use a short title.
- Explain the cause or next step in one sentence when needed.
- Use one primary action at most.
- Decorative illustrations must be ignored by screen readers.
- Empty states should not become marketing copy.

Examples:

- "No results found."
- "Nothing here yet."
- "Try a different search."

### Loading State

Loading states communicate progress without causing layout instability.

Rules:

- Use skeletons when final layout is predictable.
- Use spinners only for short, contained operations.
- Keep loaded and loading dimensions stable.
- Avoid replacing user-entered content with loading UI.

### Error State

Error states help users understand and recover.

Rules:

- State what failed.
- Preserve user work.
- Offer a next step when possible.
- Use destructive color only where the error needs attention.
- Do not rely on toast messages for critical persistent failures.

## Content Design

Product copy should be direct and useful.

Rules:

- Prefer verbs for actions.
- Prefer noun labels for navigation.
- Error messages should explain what failed and how to recover.
- Confirmation text should name the object or action and consequence.
- Avoid product-marketing language inside operational app surfaces.

Tone:

- Clear.
- Brief.
- Calm.
- Specific.

## Accessibility Requirements

Every component change should pass these gates:

- Keyboard can reach and operate it.
- Focus state is visible.
- Screen reader label exists for icon-only controls.
- Text has AA contrast.
- State is not conveyed by color alone.
- Hover-only actions are also available on focus.
- Tap targets are usable on mobile.
- Content does not require motion.
- Dialogs trap focus and return focus correctly.
- Menus, selects, popovers, and sheets use accessible primitives where possible.

## Theming Requirements

Rules:

- Every theme must provide every semantic token used by components.
- Theme switching must update browser-native UI color where supported.
- Native controls should use the correct `color-scheme`.
- Light and dark themes must both meet contrast requirements.
- Optional themes may shift mood, but must preserve token meaning.
- Theme-specific changes should not alter component layout.

## Implementation Strategy

This document is a definition. Implementation should be done in small, reviewable passes.

Recommended order:

1. Token pass
   - Define semantic CSS variables.
   - Add framework mappings, such as Tailwind theme aliases.
   - Keep existing token names working until consumers migrate.

2. Primitive pass
   - Update shared primitives first.
   - Start with buttons, fields, menus, popovers, dialogs, sheets, and navigation.
   - Add focus-visible behavior consistently.

3. Layout pass
   - Update app shell, sidebars, headers, content columns, panels, and responsive constraints.
   - Keep layout stable across desktop and mobile.

4. State pass
   - Standardize loading, empty, error, disabled, selected, hover, focus, and pressed states.
   - Verify states do not cause layout shift.

5. Product adoption pass
   - Apply the system to product-specific views in separate, focused changes.
   - Document product-specific patterns outside this core design-system file.

6. QA pass
   - Run lint and build.
   - Check desktop and mobile viewports.
   - Check light and dark themes.
   - Check keyboard navigation.
   - Check representative content, forms, overlays, navigation, loading states, empty states, and errors.

## Migration Rules

When updating components:

- Prefer existing accessible primitives and local abstractions.
- Prefer semantic color classes over raw color values.
- Do not introduce a separate component library without a clear adoption plan.
- Do not add decorative gradients or background ornaments by default.
- Do not create nested card layouts unless the inner card is a distinct interactive object.
- Do not remove accessibility behavior to simplify styles.
- Do not copy another product's exact visual assets, icons, or brand details.

## Governance

The design system should be treated as product infrastructure.

Ownership:

- Frontend maintainers own implementation quality.
- Product/design maintainers own visual and interaction direction.
- Contributors can propose new variants when they solve repeated product needs.

Change process:

- New component variants must include use cases and non-use cases.
- New tokens require coverage in all supported themes.
- New colors require semantic purpose.
- Breaking visual changes should be grouped into a design-system change.
- Deprecated styles should have a migration path.

Definition of done for a design-system change:

- Documented purpose.
- Token coverage across themes.
- Keyboard and screen-reader behavior preserved.
- Responsive behavior checked.
- Existing tests, lint, and build pass.
- Screenshots reviewed for at least light and dark themes.

## Quality Checklist

Use this checklist before accepting a design-system change:

- Primary content remains the strongest part of the page.
- Navigation is compact and quiet.
- Buttons are visually ranked correctly.
- Focus states are visible.
- Hover states do not cause layout shift.
- Dialogs and menus float clearly above content.
- Loading, empty, and error states are useful.
- Dark mode is neutral and readable.
- Mobile layout has stable spacing and tap targets.
- No one-off hardcoded colors were added without a semantic reason.
- No product-specific view design was added to the core system definition.

## Glossary

Design system:
The shared language and rules for how a product looks, behaves, and is built.

Token:
A named design decision, such as `--background`, `--radius`, or `--ring`.

Primitive:
A low-level reusable component, such as Button, Field, Menu, Dialog, or Surface.

Pattern:
A reusable product solution made from primitives. Product-specific patterns should live outside this core document.

Chrome:
The interface around the content: navigation, panels, buttons, menus, borders, and controls.

Content-first:
A hierarchy where the user's primary content or task is more important than decorative framing or controls.
