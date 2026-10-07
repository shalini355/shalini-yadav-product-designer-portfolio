# Shalini Yadav — Product Design Portfolio

A static portfolio built with semantic HTML, CSS, and vanilla JavaScript. It has no build step or project dependencies.

## Folder structure

```text
.
├── index.html
├── about.html
├── contact.html
├── 404.html
├── favicon.svg
├── work/
│   ├── kai.html
│   └── quiz-buddy.html
├── css/
│   ├── tokens.css
│   ├── base.css
│   ├── components.css
│   └── pages.css
├── js/
│   └── main.js
└── assets/
    ├── images/
    │   ├── hero.jpg
    │   ├── kai-cover.jpg
    │   ├── kai-01.jpg through kai-06.jpg
    │   ├── quiz-buddy-cover.jpg
    │   ├── quiz-buddy-01.jpg through quiz-buddy-06.jpg
    │   └── about-portrait.jpg
    └── resume.pdf
```

Add project and portrait images to `assets/images/`. If an expected image is
missing, its frame displays the filename to add.

## Run locally

Open `index.html` in a browser, or open the project folder in VS Code and use an installed static-server extension such as Live Server. No dependency installation or compilation is required. Google Fonts load over the network; the site falls back to system fonts if they are unavailable.

Before publishing, add the résumé at `assets/resume.pdf` and replace the clearly labelled project-link and media placeholders with the real URLs and files.

## Deploy

The site can be hosted by any static web host. For GitHub Pages:

1. Push the project files to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select the branch containing the site and the repository root, then save.
4. Open the published Pages URL and check all pages, downloads, and assets.

Once the public domain is known, add absolute `og:url` values and a hosted `og:image` to each page's metadata for richer social previews.
