# Personal site

Minimal monospace one-pager, hash-routed: `#about` / `#projects` / `#experience` / `#skills`.
No build step, no dependencies.

| file | what |
|---|---|
| `index.html` | shell: header, nav, empty view sections |
| `style.css` | styles |
| `app.js` | renders each view from `window.DATA` |
| `data.js` | **all content — edit this** |
| `test_render.js` | `node test_render.js` — fails if rendering breaks |

Bio paragraphs support `**bold**` and `[label](url)`.

Local preview: `python3 -m http.server` then open http://localhost:8000.
