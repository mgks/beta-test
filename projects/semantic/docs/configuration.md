# Configuration

docmd is configured via `docmd.config.json` at the project root. The file is optional — sensible defaults apply for every field.

## Core Fields

```json
{
  "title": "My Site",
  "url": "https://mysite.github.io/docs",
  "src": "docs",
  "out": "site",
  "engine": "js"
}
```

- **`title`** — site name shown in the browser tab and header
- **`url`** — canonical URL; used by SEO, sitemap, and og:url
- **`src`** — source directory containing your markdown files
- **`out`** — output directory for the built site (default: `site`)
- **`engine`** — parser engine: `js` (default) or `rust`

## Enabling Plugins

```json
{
  "plugins": {
    "search": { "semantic": true },
    "seo": { "defaultDescription": "My documentation site." },
    "git": { "repo": "https://github.com/org/repo", "editLink": true }
  }
}
```

Plugins are auto-installed on first build if not already present.

## Theme

```json
{
  "theme": {
    "name": "default",
    "appearance": "auto",
    "template": "summer"
  }
}
```

`appearance` accepts `"light"`, `"dark"`, or `"auto"` (follows system preference).