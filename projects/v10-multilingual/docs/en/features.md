---
title: "Summer Features & i18n"
description: "In-depth overview of the Summer layout bands and multilingual locale mapping."
---

# Summer Features & Multilingual Architecture

The Summer template (`@docmd/template-summer`) is an alternative product documentation layout built to provide a modern developer documentation experience.

## Structural Layout Bands

1. **Top Bar**: Site branding, search bar with keyboard shortcut (`⌘K` / `Ctrl+K`), and theme toggle.
2. **Sub Navigation**: Horizontal section tabs for fast contextual switching.
3. **Page Header**: Sticky breadcrumb trail, page title, and quick-action links.
4. **Content Grid**: Responsive sidebar navigation, main content body, and right-rail table of contents.
5. **Footer**: Copyright, sponsorship callouts, and docmd branding.

::: callout success title="Multilingual Architecture" icon="languages"
Pages are paired 1:1 between locales (`en` and `de`). When switching languages, docmd preserves your current reading position on the translated counterpart page whenever available.
:::

## Semantic Search Capabilities

When semantic search is enabled, the search modal queries an embedding vector index in addition to keyword search, enabling conceptual lookups even when exact words differ.
