# Speed Run Mode — Implementation Plan

## Context

The existing codebase is a vanilla HTML/CSS/JS word puzzle game ("Daily Addicted"). It uses:
- Single `index.html` with inline SVG icons and modals
- `css/style.css` with CSS custom properties, dark theme (`--bg-primary: #0f0f1a`)
- `js/game.js` — IIFE containing all game logic: seeded RNG (`mulberry32`), puzzle generation (`generatePuzzle`), grid rendering, swap mechanics, localStorage persistence
- `js/confetti.js` — canvas-based confetti effect

Key architecture patterns:
- IIFE wrapping all game state and functions
- `state` object holds all mutable game state
- `generatePuzzle(seed)` takes a numeric seed, returns `{solution, grid, fixed, words, par}`
- `saveState()`/`loadState()` use `localStorage` with key `'daily-addicted-state'`
- Date-based seed: `getDateSeed()` → `YYYYMMDD` integer

## Approach

### Single-task implementation

All changes are tightly coupled — the mode selector affects HTML structure, CSS, and JS initialization flow. Splitting would create merge friction with no benefit.

### Architecture Decisions

1. **Mode selection screen**: Replace the immediate game load with a landing screen showing two buttons: "Daily Puzzle" and "Speed Run". This is a new `<div id="mode-select">` inserted before `<main>`. When a mode is chosen, hide the selector and show the game area.

2. **Game mode state**: Add a `mode` property to the `state` object (`'daily'` | `'speedrun'`). Speed run mode uses `Math.random()`-based seeds (via `Date.now() + Math.random()`) for variety. The existing `generatePuzzle(seed)` function is reused as-is.

3. **Timer**: A `setInterval` counting down from 150 seconds, displayed in a new `#speedrun-bar` element above the grid. Format: `M:SS`. When it hits 0, disable input and show results modal.

4. **Puzzle counter**: Displayed alongside the timer in `#speedrun-bar`. Incremented each time all 4 rows complete.

5. **Auto-advance on completion**: In speed run mode, when `allComplete` is true, skip `saveState()` and confetti, increment counter, generate new puzzle with fresh random seed, reset grid state, and re-render.

6. **Results modal**: New `#speedrun-modal` showing total puzzles solved. No share/countdown — just a "Play Again" and "Back to Menu" button.

7. **State isolation**: Speed run mode never calls `saveState()` (which writes to `localStorage`). The daily puzzle's `loadState()`/`saveState()` are untouched. Speed run state is purely in-memory.

8. **Header adaptation**: In speed run mode, hide `#puzzle-number` and show mode-specific info. The help button and title remain.

### Design Direction: "Dark arcade"

Keep the existing dark theme but add urgency cues for speed run:
- Timer uses `--color-accent` (#e94560) when under 30 seconds
- Pulse animation on timer when critical
- Solved counter uses a bold accent color
- Mode selector uses large, full-width buttons with distinct colors for each mode
- Font: keep existing `--font-main` for consistency

### Files Changed

| File | Changes |
|------|---------|
| `index.html` | Add mode selector div, speedrun bar, speedrun results modal |
| `css/style.css` | Styles for mode selector, speedrun bar, timer, results modal |
| `js/game.js` | Mode management, timer logic, auto-advance, random seed generation, state isolation |

### Constraints

- No `.github/workflows/` changes
- No new dependencies — vanilla JS only
- No build system changes (there is none)
