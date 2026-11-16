---
title: "v0.10.1 Fixes Verification: Links & Codeblocks"
description: "Verification page for code block rendering and internal link normalization."
---

# v0.10.1 Fixes Verification

## 1. Codeblock Header Preservation

Below is a configuration codeblock with quotes in the header. In `lite-mdx < 0.1.2`, unquoted fence attributes caused syntax errors during MDX expression compilation, stripping the block content entirely. In `v0.10.1`, it renders intact with syntax highlighting:

```json "docmd.config.json"
{
  "title": "docmd v0.10.1 Beta Suite",
  "theme": {
    "name": "default"
  },
  "plugins": {
    "iconify": {
      "enabled": true
    }
  }
}
```

## 2. Issue #284 Link Normalization

The links below test normalization of filenames with dots and query strings from a subpage:

- [Release 1.0 Milestone Page (with dot in stem)](release-1.0.md)
- [Iconify Icons with Query Param](iconify-icons.md?tab=docker)
- [Root Index with Query Param](index.md?tab=overview)
- [Current Page Query](?tab=debug)

::: button "Release 1.0 Milestone" url:release-1.0.md icon:rocket
::: button "Iconify Query Test" url:iconify-icons.md?tab=docker icon:sparkles

## 3. Iconify Tabs & Containers

::: tabs
== tab "Docker Compose" icon:iconify:tabler:brand-docker
```yaml
services:
  docs:
    image: ghcr.io/docmd-io/docmd:latest
    ports:
      - "3000:3000"
```

== tab "Kubernetes" icon:iconify:simple-icons:kubernetes
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: docmd-site
```
:::

::: tag "Production Ready" icon:iconify:solar:verified-check-bold color:green
::: tag "npm Package" icon:iconify:simple-icons:npm color:red
