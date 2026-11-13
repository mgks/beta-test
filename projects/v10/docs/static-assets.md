---
title: "Static Root Assets Pipeline"
description: "Verification and testing of zero-config public static root assets in docmd v0.10.0."
---

# Static Root Assets Pipeline

In `docmd` v0.10.0, any files placed in the top-level `public/` directory (or custom directories defined via the `static` configuration array) are automatically copied directly to the compiled site root. This ensures that root-level web assets retain their exact file paths without template wrapping.

::: callout tip title="Root Directory Preservation"
Files placed in `public/` are served from the root domain path (e.g. `public/robots.txt` is accessible at `/robots.txt`, not `/public/robots.txt`).
:::

## Active Assets in This Test

The following root assets are shipped in this staging project:

| Source File | Destination URL | Purpose |
| :--- | :--- | :--- |
| `public/robots.txt` | [`robots.txt`](../robots.txt) | Search engine indexing rules & sitemap location |
| `public/custom-asset.txt` | [`custom-asset.txt`](../custom-asset.txt) · [Direct URL](https://mgks.github.io/beta-test/custom-asset.txt) | Plaintext asset integrity verification |
| `public/funding.json` | [`funding.json`](../funding.json) | Open-source funding & sponsorship manifest v1.1.0 |

::: callout info title="SPA Router Asset Bypass"
Hyperlinks pointing to static assets (such as `.txt`, `.json`, `.pdf`, `.png`, etc.) on the same host are automatically bypassed by the docmd SPA router. The browser navigates natively to the asset without intercepting it as an HTML page.
:::

## Configuration Example

By default, `docmd` automatically detects a `public/` directory in the project root. You can also specify multiple or custom directories in `docmd.config.json`:

```json
{
  "static": [
    "public",
    "assets/downloads"
  ]
}
```

## Nested Folder Preservation

If `public/` contains subdirectories, the folder structure is faithfully reproduced in the output directory:

```text
projects/v10/
├── public/
│   ├── .well-known/
│   │   └── security.txt      --> site/.well-known/security.txt
│   ├── robots.txt            --> site/robots.txt
│   └── favicon.ico           --> site/favicon.ico
└── docs/
    └── index.md
```
