# alipira.github.io

Personal hub site for [Ali Pira](https://github.com/Alipira): an introduction, a
library of free learning resources, and independent research write-ups.

```
/                             hub page (intro, library, research, about, contact)
/404.html                     not-found page
/assets/site.css              design tokens + shared header/footer/buttons
/assets/home.css              hub-page-only styles
/assets/report.css            research-report styles
/assets/site.js               theme toggle, scroll reveal, footer year
/research/
  non-technical-loss/         PI-STGAT detector test report
/.nojekyll                    serve files as-is, no Jekyll build
```

No build step, no dependencies, no trackers, no browser storage. Fonts come from
Google Fonts; everything else is in this repo.

## Publish (one time)

1. Create a **public** repo named exactly **`alipira.github.io`**.
2. Push these files to `main`.
3. Check **Settings → Pages → Source** is *Deploy from a branch*, `main` / `/ (root)`.
4. Open <https://alipira.github.io>.

The three guides live in their own repos and are linked from the hub:

| Resource | Repo | Live URL |
|---|---|---|
| The Ladder — DS & AI Engineer Roadmap | `data-scientist-ai-engineer-roadmap` | `/data-scientist-ai-engineer-roadmap/` |
| Design Patterns — A Python Field Guide | `Design-Patterns-A-Python-field-guide-for-Data-Scientists` | `/Design-Patterns-A-Python-field-guide-for-Data-Scientists/` |
| Senior DS Interview Bank | `Code-Review-bank` | `/Code-Review-bank/` |

The last two still need **Settings → Pages → Deploy from a branch → `main` / `/ (root)`**
switched on before their buttons resolve.

## Add a guide to the library

In `index.html`, find `TO ADD A GUIDE` and copy one `<article class="card">` block.
Swap the title, description, meta rows, and the two links. The SVG glyph is optional —
delete the `.glyph` div if you don't want to draw one. Layout, theming, and the
reveal animation pick the new card up automatically.

## Add a research study

Two shapes, depending on how far along the work is:

**Not written up yet** — add an `<li>` to the `<ul class="also">` list in
`index.html`: an `<h4>` title, one honest sentence, and a `<span class="status">`.

**Has a report** — do three things:

1. Copy `research/non-technical-loss/` to `research/<new-slug>/` and rewrite
   `index.html`. The structure is: masthead → thesis (one hero idea) → scale →
   results tables → limits. Keep the `../../assets/…` paths as they are.
2. In `index.html`, copy the `<article class="study">` block. The right-hand
   `.panel` is for **one** measured, like-for-like comparison — omit it if there
   isn't one.
3. Remove the study's placeholder `<li>` from the `also` list.

## Open items in the PI-STGAT report

Two spots are marked `REVIEW BEFORE PUBLISHING` in
`research/non-technical-loss/index.html`:

- **20% vs 13%.** The hit-rate chart's untargeted reference is 20%, while the
  rehearsal set's stated prevalence is 13%. Both figures are kept and labelled
  separately for now; decide which is the right comparator for that chart.
- **`0.46 → 0.75`** in the recall-by-attack table has no legend. Say what the
  arrow means.

## Preview locally

```bash
python3 -m http.server 8000
# http://localhost:8000
```

Root-relative paths (`/assets/…` in `404.html`) only resolve when served from the
site root, which is how both this server and GitHub Pages serve it.

## Theming

All colour, type, and spacing tokens are at the top of `assets/site.css`, defined
once for light and once for dark. Dark mode follows the visitor's system setting;
the header button overrides it for that visit only.
