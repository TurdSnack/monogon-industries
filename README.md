# Monogon Industries

An in-universe corporate website for **Monogon Industries** and its flagship product, **MythOS98** — built from the lore of **BONELAB** by Stress Level Zero. Companion project to [slz-lore-clipboards](https://github.com/TurdSnack/slz-lore-clipboards), the raw databoard archive this site is stitched together from.

This is a fan-made corporate brochure site, not the archive itself. It presents Monogon's public-facing story — MythOS, FantasyLand, Districts, MonoSec — the way the company would want you to see it.

---

## Pages

| Page | Purpose |
|------|---------|
| `docs/index.html` | Home — MythOS98 hero, bulletin ticker, featured environments |
| `docs/mythos98.html` | Product page — features, system requirements, version history |
| `docs/about.html` | Company history, leadership, values, locations |
| `docs/careers.html` | Open positions, click a listing for the full description |
| `docs/legal.html` | Terms of Simulated Service, privacy policy, MonoSec monitoring notice |
| `docs/404.html` | Custom "unmapped District" page for GitHub Pages |

The whole site is framed as a single MythOS98 browser window — titlebar, decorative menu bar, address bar, and a status bar — matching the retro OS chrome established in `slz-lore-clipboards`.

## Design

- Visual language, fonts (`Code Pro LC`), and the Monogon logo/paper texture are shared with `slz-lore-clipboards`, copied into `docs/assets/`.
- No build step. Pure HTML/CSS/JS, static, served via GitHub Pages from `docs/`.
- Job listings on the careers page open in a clipboard-style modal (`docs/js/app.js`).

### Local preview

```bash
cd docs
python -m http.server 8000
```

Open **http://localhost:8000**.

### Deploy

In repository settings, set GitHub Pages to serve from the `docs/` folder on `main`.

---

## Credits

All lore content is property of **Stress Level Zero**. This project is a fan work for reference and preservation purposes.

