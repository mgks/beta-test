# Markdown Options Test

This page verifies issues **#241** and **#242** — configurable `markdown.linkify`, `markdown.typographer`, and secure HTTPS normalization for bare-domain autolinks.

---

## Issue #241 — `markdown.linkify` & `markdown.typographer`

When `markdown.linkify` is `true` (default), bare URLs and domains in prose are automatically converted to links.

When `markdown.typographer` is `true` (default), special character sequences like `(c)`, `(r)`, `(tm)`, `...` and straight quotes are converted to their typographic equivalents.

This project has both options at their **defaults** (`true`), so you should see the effects below.

### Linkify — bare domains become links

The following domain should be rendered as a clickable link:

github.com

The following raw URL should also be a link:

https://docmd.io

### Typographer — smart quotes and symbols

The following should render with smart (curly) quotes: "Hello World"

And these should be converted:
- (c) should become ©
- (r) should become ®
- (tm) should become ™
- ... should become …

---

## Issue #242 — Bare domains default to HTTPS

Any bare domain autolinked by `markdown-it-linkify` **must resolve to `https://`**, never `http://`.

The domain below should link to `https://github.com` (inspect the `href` to verify):

github.com

And this one should link to `https://docmd.io`:

docmd.io

> **How to verify**: Right-click the linked domain → Inspect Element → check `href` starts with `https://`, not `http://`.
