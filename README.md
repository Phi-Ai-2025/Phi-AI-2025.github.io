# Phi.AI — phi-ai-2025.github.io

Landing page for Phi.AI, built with React + Vite. The older hand-written pages
(blog and project write-ups) are served as-is from `public/`.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the built site
```

## Layout

```
index.html            Vite entry for the React landing page
src/
  App.jsx             page composition
  index.css           all styling for the landing page
  data/site.js        every piece of copy on the page
  components/         one component per section
    AutomationFlow.jsx  the live workflow demo in the automation case study,
                      ported from mohamed-seyam.github.io (i18n layer removed)
public/               copied to dist/ untouched
  blog.html, blog-lora.html,
  computer_vision_projects.html,
  rag_agentic_ai_projects.html
  css/, js/           styles and scripts for those pages
  assets/             images used by the landing page
```

Editing wording is a `src/data/site.js` change; editing layout is a component
change.

## Responsive model

Every font size is in `rem`, so the whole type scale moves with one lever at the
top of `src/index.css`: 16px desktop, 15px from 1024px, 14px from 640px, 13.5px
from 400px. On top of that sit three layout tiers:

| width    | layout                                                |
| -------- | ----------------------------------------------------- |
| > 1024px | full desktop, two-column hero and case studies        |
| ≤ 1024px | tablet landscape — tighter gutters, same two columns  |
| ≤ 900px  | tablet portrait — stacks, nav collapses, cards 2-up   |
| ≤ 640px  | phone — single column throughout                      |

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and publishes
`dist/` to GitHub Pages. This requires **Settings → Pages → Source: GitHub
Actions** (not "Deploy from a branch").
