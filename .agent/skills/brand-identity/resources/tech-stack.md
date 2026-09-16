# Preferred Tech Stack & Implementation Rules

When generating code or UI components for Golden Star Company, strictly adhere to the following technology choices.

## Core Stack
* **Framework:** React 18+ with TypeScript
* **Styling Engine:** Tailwind CSS
* **Component Primitives:** shadcn/ui design patterns (Slate Dark with Crimson Primary `#E11D48`)
* **Motion & Interactivity:** Framer Motion
* **Icons:** Lucide React

## Implementation Guidelines

### 1. Tailwind Usage
* Use utility classes directly in JSX.
* Utilize color tokens defined in `design-tokens.json`.
* Dark sections use `#09090B` backgrounds with `#18181B` cards, `#27272A` borders, and `#E11D48` crimson accents.
* Light sections use clean `#FFFFFF` or `#FCFBF9` backgrounds with dark text `#09090B`.

### 2. Component Patterns
* **Buttons:** Primary actions must use the solid `#E11D48` Primary color or sleek `#111111` capsule with `ArrowUpRight`. Secondary actions use Ghost or Outline variants.
* **Badges:** Clean minimal pills with subtle borders and bold text.
* **Layout:** Use Flexbox and CSS Grid via Tailwind utilities for all layout structures.
* **Typography:** Use the 5 curated award-winning Google Fonts (Plus Jakarta Sans, Newsreader, Outfit, Inter, Caveat).

### 3. Forbidden Patterns
* Do NOT use jQuery or Bootstrap classes.
* Do NOT use cheesy animations or low-contrast white-on-white / black-on-black text.
* Do NOT use placeholder images or unverified generic claims.
