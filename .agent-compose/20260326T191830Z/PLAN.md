# Plan: Add Light Mode Theme with Toggle

## Current State

The app is a vanilla HTML/CSS/JS word puzzle game. The dark theme is defined via CSS custom properties in `:root`. However, many color values are hardcoded throughout the CSS (rgba values for borders, hover states, backgrounds, and specific hex colors like `#303060`, `#52b788`). These must be converted to CSS custom properties for both themes to work properly.

**Tech stack**: Vanilla HTML + CSS + JS (no build system, no framework). We work within these constraints.

## Approach

### 1. CSS: Define light theme variables

Add a `[data-theme='light']` selector block that overrides all `:root` color variables. Also convert hardcoded colors in the CSS to new custom properties so they respond to the theme switch.

**Hardcoded colors that need variable conversion:**
- `header border-bottom`: `rgba(255, 255, 255, 0.08)` -> variable
- `.header-btn border/hover`: `rgba(255, 255, 255, 0.15/0.25)`, `rgba(255, 255, 255, 0.05)` -> variables
- `.title-area h1 gradient`: `#e8e8f0, #a8a8c0` -> variables
- `.grid-cell.clickable:hover`: `#303060` -> variable
- `.grid-cell.fixed border`: `rgba(45, 106, 79, 0.5)` -> variable
- `.modal-backdrop`: `rgba(0, 0, 0, 0.6)` -> variable
- `.modal-content border/shadow`: hardcoded rgba -> variables
- `.modal-close:hover bg`: `rgba(255, 255, 255, 0.05)` -> variable
- `.help-example bg`: `rgba(0, 0, 0, 0.2)` -> variable
- `#complete-title`, `.result-word`, `#copied-msg`: hardcoded `#52b788` -> variable
- `#share-preview bg`: `rgba(0, 0, 0, 0.25)` -> variable
- `#swap-counter border`: `rgba(255, 255, 255, 0.06)` -> variable
- `#next-puzzle border-top`: `rgba(255, 255, 255, 0.06)` -> variable
- `@keyframes rowComplete`: hardcoded `#52b788` -> variable

**Light theme palette direction**: Clean, warm light — off-white backgrounds, dark text, tinted greens for fixed/complete cells, muted gold for selection. Not a simple inversion but a purposeful light palette.

### 2. HTML: Add toggle button

Replace the `.header-spacer` div with a theme toggle button. This maintains the flex layout (help-btn | title | toggle-btn) while adding functionality. The toggle uses sun/moon SVG icons.

### 3. JS: Theme switching logic

Add a `theme.js` file (loaded before `game.js`) that:
- Checks `localStorage` for saved preference
- Falls back to `prefers-color-scheme` media query
- Sets `data-theme` attribute on `<html>` element
- Listens for toggle clicks
- Listens for OS preference changes (in case user changes while app is open)

### 4. Confetti

The confetti uses hardcoded canvas colors which are theme-independent (colorful particles on a transparent overlay). This works correctly in both themes with no changes needed.

## Key Decisions

1. **`data-theme` on `<html>` not `<body>`**: Standard practice, ensures the attribute is available before body renders.
2. **Separate `theme.js` file**: Keeps concerns separated. Loaded before other scripts to prevent flash of wrong theme.
3. **Single task**: All changes are tightly coupled (CSS vars reference JS toggle, HTML button references both). Splitting would create unnecessary integration overhead.
4. **No framework/build changes**: Working within the existing vanilla stack per project constraints.

## Files to Change

- `css/style.css` — Add light theme variables, convert hardcoded colors to custom properties
- `index.html` — Add toggle button in header, add theme.js script tag
- `js/theme.js` — New file for theme switching logic
