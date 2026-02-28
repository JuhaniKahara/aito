# Aito Infinity - Perpetual Motion Company

Single-page React site with a futuristic, high-tech aesthetic. Built with Vite + React and deployable to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages deploy

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that deploys on every push to `main`.

Steps:
1. Push the repo to GitHub.
2. In the repo settings, go to **Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` and wait for the workflow to publish.

## Customize the countdown

Edit the `LAUNCH_TARGET` in `src/App.jsx`.

## Notes

The `base` is set to `./` in `vite.config.js`, which is compatible with GitHub Pages and other static hosts.
