# Plan: Make Light Mode Lighter

## Problem
The light theme uses warm beige backgrounds (`#f5f0e8`, `#ede8df`, `#e2ddd4`) that feel muddy and low-contrast. Text colors are also too heavy. Additionally, `.mode-select-title` has a hardcoded dark-theme gradient that doesn't use CSS variables, so it looks wrong in light mode.

## Approach
Update the `[data-theme='light']` CSS custom properties in `css/style.css` to use a cleaner, brighter palette with proper contrast. Also fix the hardcoded `.mode-select-title` gradient and `.btn-secondary` border to use theme-aware variables.

### Specific changes (all in `css/style.css`):

1. **Lighten backgrounds** — shift from warm beige to clean near-white:
   - `--bg-primary`: `#f5f0e8` → `#fafafa` (almost white)
   - `--bg-secondary`: `#ede8df` → `#f3f3f5` (very light cool gray)
   - `--bg-surface`: `#e2ddd4` → `#e8e8ec` (light gray for cells)

2. **Adjust text colors** for better readability on lighter backgrounds:
   - `--text-primary`: `#2c2c34` → `#3a3a44` (slightly lighter, still readable)
   - `--text-secondary`: `#6b6b78` → `#8a8a98` (lighter secondary text)
   - `--text-muted`: `#9b9ba8` → `#b0b0bc`

3. **Update derived colors** — cell hover, title gradient endpoints, etc. to match new palette.

4. **Fix `.mode-select-title`** hardcoded gradient (line 136) — use `var(--title-gradient-start)` and `var(--title-gradient-end)` instead of hardcoded `#e8e8f0, #a8a8c0`.

5. **Fix `.btn-secondary`** border — uses hardcoded `rgba(255, 255, 255, 0.15)`, should use `var(--border-light)`.

## Files changed
- `css/style.css` — only file modified

## Risk
Low — CSS-only changes, no logic changes.
