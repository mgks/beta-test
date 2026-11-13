---
title: "MDX Component Rendering"
description: "Testing native MDX compilation and interactive JSX components in docmd v0.10.0."
---

# MDX Component Rendering

`docmd` v0.10.0 embeds first-class MDX support into core via `@docmd/plugin-mdx` and the lightweight, dependency-free `@docmd/lite-mdx` compiler. You can write interactive JSX and TSX components directly within Markdown without any complex build toolchains.

::: callout info title="Powered by @docmd/lite-mdx"
MDX compilation is enabled by default. Pages with `.mdx` extension or standard `.md` pages containing JSX syntax are automatically parsed and compiled.
:::

## Built-in Components

### 1. Alert Callouts

<Callout type="tip" title="Built-in JSX Callout" icon="rocket">
This callout is rendered directly from JSX syntax within the Markdown source file using <code>&lt;Callout&gt;</code>, styling seamlessly with docmd's native container system.
</Callout>

### 2. Badges & Tags

Status Badges: <Badge variant="success">Active v{{ docmd.version }}</Badge> <Badge variant="warning">Staging</Badge> <Badge variant="info">Beta Test</Badge>

### 3. Interactive Cards

<Card title="Interactive JSX Card" icon="sparkles" href="../static-assets/">
This card is authored in JSX syntax with custom props and Markdown child elements, styled with the native docmd card container classes.
</Card>

### 4. Code Tabs Component

<Tabs>
  <Tab label="npm">
    ```bash
    npm install docmd
    ```
  </Tab>
  <Tab label="pnpm">
    ```bash
    pnpm add docmd
    ```
  </Tab>
</Tabs>

## Expression Evaluation

In MDX, expressions enclosed in curly braces are evaluated dynamically:

- Mathematical evaluation: **2 + 2 = {2 + 2}**
- String manipulation: **{'DOCMD'.toLowerCase() + '.io'}**
- Date format year: **{new Date().getFullYear()}**
- Array joining: **{['Doc', 'MD'].join('-')}**

## Component Source Example

```jsx
import { Counter } from './components/counter.jsx';

# My Feature Page

Here is an interactive component embedded in Markdown:

<Card title="Feature Showcase">
  <Counter initial={10} step={2} />
</Card>
```
