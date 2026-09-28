# Jack Codet — personal portfolio

[Live portfolio](https://jack-codet-portfolio.vercel.app) · [Human Performance demo](https://jack-codet-human-performance.vercel.app)

My projects, experience, and life outside the code. I study Data Science & Artificial Intelligence at the University of Miami, with a mathematics minor, and I’m training for an Ironman 70.3.

## Current site

The current portfolio source is in [`site/`](site/). It uses semantic HTML, CSS, system fonts, and optimized images. There is no JavaScript dependency or build step.

```sh
python3 -m http.server 8080 --directory site
```

Open `http://localhost:8080`.

- `site/index.html`: project stories, work history, résumé, and contact links.
- `site/style.css`: responsive layouts, visible focus styles, and print styles.
- `site/photos/`: personal photographs and a screenshot of the performance demo.

The performance project is shown with its implementation decisions and explicit demo limitations. Rhyka is described as ongoing work, without invented launch or customer outcomes. The site uses native HTML disclosure for deeper engineering notes and keeps the work easy to scan.

## Earlier version

The root-level Next.js application (`app/`, `components/`, `data/`) is an earlier portfolio iteration. Some of its project entries and URLs are placeholders; they are not an inventory of completed work. It is retained for history and is not the source of the current deployed site.

To explore that older version separately, run `npm ci` and `npm run dev` at the repository root.

## Publication

The live site is deployed to Vercel. Publish only the static site assets; never upload local environment files, account credentials, or private project data.
