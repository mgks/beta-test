---
title: "Iconify Dynamic Icons"
description: "Validation and testing of dynamic icon resolution using @docmd/plugin-iconify in v0.10.0."
---

# Iconify Dynamic Icons

`docmd` v0.10.0 introduces `@docmd/plugin-iconify`, an optional plugin that unlocks over 100,000 icons from more than 100 open-source icon sets (Material Design Icons, Carbon, FontAwesome, Lucide, Tabler, etc.) with zero runtime asset bloat.

::: callout info title="On-Demand SVG Inlining"
Icons referenced in your Markdown are fetched during the build process and directly inlined as pure SVG elements. No massive client-side icon fonts or external CDN requests are needed.
:::

## Syntax Examples

Use the standard `icon:iconify:<collection>:<icon-name>` or `icon:iconify:<collection>-<icon-name>` prefix:

### 1. In Containers & Callouts

::: callout success title="Launch Verification" icon="iconify:mdi:rocket-launch"
This callout utilizes the Material Design `mdi:rocket-launch` icon via Iconify.
:::

::: callout warning title="Diagnostic Alert" icon="iconify:carbon:warning-alt"
This alert renders the IBM Carbon `carbon:warning-alt` icon directly.
:::

### 2. In Cards and Buttons

::: grid cols=3
::: card title="Fast Builds" icon="iconify:lucide:zap"
Instant build speeds powered by optimized compilers.
:::

::: card title="Secure Runtime" icon="iconify:carbon:security"
Strict CSP and zero-leak production HTTP server.
:::

::: card title="Multi-format" icon="iconify:mdi:code-json"
Full support for Markdown, MDX, and OpenAPI schemas.
:::
:::

### 3. Inline Icons

- Terminal icon: ::: button icon="iconify:carbon:terminal" text="Terminal" url="#" :::
- GitHub icon: ::: button icon="iconify:mdi:github" text="GitHub" url="https://github.com/docmd-io/docmd" :::
- Sparkles icon: ::: button icon="iconify:lucide:sparkles" text="New in 0.10.1" url="#" :::

### 4. Tabs & Tags with Iconify

::: tabs
== tab "Docker Compose" icon:iconify:tabler:brand-docker
```yaml
services:
  docs:
    image: ghcr.io/docmd-io/docmd:latest
```

== tab "Kubernetes" icon:iconify:simple-icons:kubernetes
```yaml
apiVersion: apps/v1
kind: Deployment
```
:::

::: tag "Production Ready" icon:iconify:solar:verified-check-bold color:green
::: tag "npm Package" icon:iconify:simple-icons:npm color:red

## Configuration

Enable the plugin in `docmd.config.json`:

```json
{
  "plugins": {
    "iconify": true
  }
}
```
