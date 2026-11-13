---
title: "Summer Theme & Multilingual Showcase"
description: "Demonstrating the Summer product layout, bilingual locale switching, and semantic search in docmd v0.10.0."
---

# Summer Theme & Multilingual Showcase

Welcome to the **Summer Theme & Multilingual Staging Project** for `docmd` v0.10.0. This project showcases the custom **Summer** documentation theme, full bilingual navigation with language switching between English and German, and vector-powered semantic search.

::: callout tip title="Summer Layout Features" icon="sun"
The Summer theme features five vertically-stacked, sticky-aware bands: top bar with centered search, sub-navigation tabs, breadcrumbs header, three-column layout, and branded footer.
:::

## Key Features Tested

<Card title="Summer Design System" icon="sparkles" href="./features/">
Features bespoke typography, smooth dark/light mode switching, sticky table-of-contents, and high-contrast callouts.
</Card>

<Card title="Bilingual Language Switcher" icon="globe" href="./de/">
Seamlessly switch between English and German with synced routes and automatic language persistence.
</Card>

<Card title="Semantic Vector Search" icon="search">
Powered by <code>@docmd/plugin-search</code> with client-side embedding vectors for semantic and conceptual querying.
</Card>

## MDX Component Interoperability

The Summer theme supports MDX JSX components seamlessly:

<Callout type="info" title="Cross-Theme Compatibility">
MDX components like <code>&lt;Callout&gt;</code>, <code>&lt;Card&gt;</code>, and <code>&lt;Badge&gt;</code> inherit Summer theme tokens automatically.
</Callout>

- Expression: **{'DOCMD'.toLowerCase() + '.io'}**
- Year: **{new Date().getFullYear()}**
