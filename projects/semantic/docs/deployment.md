# Deployment

## GitHub Pages

The recommended way to deploy a docmd site is via GitHub Actions.

### Workflow

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: ["main"]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "24"
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./site
          include-hidden-files: true   # required for _docmd-search/
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
```

> **Important:** `include-hidden-files: true` is required so that `_docmd-search/` (the search index) is included in the artifact.

## Local Preview

```bash
npm run build
npx serve site
```

## Custom Domains

Set `"url"` in `docmd.config.json` to your custom domain:

```json
{ "url": "https://docs.mycompany.com" }
```

Then configure a `CNAME` record in your DNS and add a `CNAME` file to your source directory.
