# MathGuide

A self-paced math learning app built for Bioinformatics students. Every concept is grounded in *why* before *how* — with shortcuts, mnemonics, and exam tips built in.

## Features

- **30+ concepts** across 6 sections, from number sense to bioinformatics-specific math
- **Progress tracking** — mark concepts as learned, persisted in localStorage
- **Expandable cards** — each concept includes a full explanation, shortcut, mnemonic, exam tip, and quick facts
- **Live search** — filter across titles, blurbs, facts, and detail text in real time
- **Dark UI** — high-contrast design with animated stats, counters, and transitions

## Curriculum

| # | Section | Focus |
|---|---------|-------|
| 1 | Numbers & Algebra | Rebuild the foundation |
| 2 | Functions & Graphs | Visualize relationships |
| 3 | Probability & Statistics | The language of science |
| 4 | Linear Algebra | Matrices = gene expression tables |
| 5 | Calculus | Rates of change and optimization |
| 6 | Bioinformatics Math | Put it all together |

## Running Locally

No build step required — open `index.html` directly in a browser:

```bash
open index.html
# or
python3 -m http.server 8080
```

## Project Structure

```
MathGuide/
├── index.html   # App shell and layout
├── app.js       # Rendering, routing, and state management
├── data.js      # Concept database (30+ entries)
└── style.css    # All styling (custom CSS, no framework)
```

## Tech Stack

- Vanilla JavaScript — no build tools, no frameworks
- Custom CSS with CSS variables and keyframe animations
- Google Fonts: [Inter](https://fonts.google.com/specimen/Inter) + [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- localStorage for progress persistence
