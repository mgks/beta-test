# What's New in v0.9.8

This page previews the key improvements shipping in **docmd v0.9.8**.

## LLMs Plugin — Prompt Support

The `@docmd/plugin-llms` plugin now supports a custom `prompt` field in your config that is prepended to the generated `llms.txt` file. This makes it easy to give AI tools context about your documentation project — its purpose, tone, and how to respond to users.

```json
{
  "plugins": {
    "llms": {
      "enabled": true,
      "prompt": "You are a helpful assistant for the docmd documentation engine. Always answer in a friendly, concise manner and refer users to the relevant docs page when possible.",
      "sections": true
    }
  }
}
```

### Section-Aware Output

When `sections: true` is set, the plugin groups pages by their top-level directory (or `section` frontmatter field) and emits structured headings in `llms.txt` — making it easier for AI models to understand your docs hierarchy.

```
# My Project Docs

> You are a helpful assistant for the docmd documentation engine.

## Getting Started
- [Installation](https://example.com/getting-started/install/)
- [Quick Start](https://example.com/getting-started/quickstart/)

## Configuration
- [Config Reference](https://example.com/config/)
```

---

## i18n — Turkish Language Support

Turkish (`tr`) is now a fully supported UI locale. All 10 supported languages have complete translation parity:

| Language | Code | Status |
|---|---|---|
| English | `en` | ✅ |
| German | `de` | ✅ |
| Spanish | `es` | ✅ |
| French | `fr` | ✅ |
| Hindi | `hi` | ✅ |
| Japanese | `ja` | ✅ |
| Korean | `ko` | ✅ |
| Russian | `ru` | ✅ |
| **Turkish** | `tr` | ✅ **New** |
| Chinese | `zh` | ✅ |

---

## Security Fixes

- Updated `katex` to resolve a known vulnerability in math rendering
- OpenAPI plugin dependency audit — confirmed `markdown-it` and `js-yaml` additions are safe
- Removed a potential XSS vector in the dev server error page handler

---

## Template Translation Completeness

All UI strings (aria labels, button titles, placeholders, navigation text) in both the **default** and **summer** templates are now fully wired to the i18n translation system — zero hardcoded English strings remain in rendered output.

---

## Bug Fixes

- Fixed markdown rendering inconsistencies (#259)
- Removed unsupported locales (`it`, `pt`) from the locale auto-detection map
- Bumped all transitive dependencies to latest patch versions
