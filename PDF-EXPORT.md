# Automatic bilingual CV PDFs

Every GitHub Pages deployment builds the website and two A4 PDFs from the same
commit and language configurations. A failed PDF build stops deployment.

- Portuguese: `/pdf/tiago-santi-cv-pt.pdf`
- English: `/pdf/tiago-santi-cv-en.pdf`

The profile card links to the PDF matching the selected language. Each deployment
also keeps both PDFs as the `curriculum-pdfs` Actions artifact for 30 days.
PDFs are build artifacts under ignored `dist/`; do not commit generated binaries.

## Local generation

```sh
npm ci
npx playwright install chromium
npm run build
npm run preview
```

On Linux CI, use `npx playwright install --with-deps chromium` to install system
dependencies too. `npm run build:pdf` regenerates just the PDFs after a site
build. Vite development alone does not generate PDFs: use the production preview
to verify downloads. Building the library replaces `dist/`; rebuild the site
afterward before previewing or publishing.

## Content and layout

`build/cv-template.mjs` consumes the same PT/EN configuration objects as React.
It includes the profile, professional contacts, education, experience, skills,
projects, publications and courses. Expanded project descriptions are preserved
in an appendix. Official publication titles remain in their original language.
The document uses selectable text, clickable references, page numbers and the
manually maintained content review date, not the build date.

Decorative images, theme controls, social-only links, and the live GitHub API
repository gallery are not part of the PDF. The GitHub profile link remains
available. The export therefore captures the curated CV, not a screenshot of
every webpage widget. It does not depend on GitHub API availability or transmit
analytics. No evidence documents or authenticated browser data are read.

After template changes, run `npm test`, lint, Prettier and the production build.
Render every PDF page to images and review pagination, clipping, spacing and
links. Future unusually long entries may require layout adjustments.
