---
title: "docmd v0.10.0 Beta Test Suite"
description: "Comprehensive staging environment and test documentation for docmd v0.10.0 new features."
---

# docmd v0.10.0 Beta Test Suite

Welcome to the **docmd v0.10.0** pre-release staging and verification environment. This workspace is specifically configured to test, validate, and demonstrate all major features introduced in version 0.10.0.

::: callout info title="Release Verification Environment"
Active Compiler Version: **v{{ docmd.version }}**  
Build Year: **{{ docmd.buildYear }}**  
Staging Environment: **{{ stagingEnv || "beta-test" }}**
:::

::: grid cols=2
::: card title="Production Server" link="/production-server/" icon="server"
Validate `docmd serve`, zero-watch performance, Gzip compression, and container `/healthz` probe.
:::

::: card title="Static Root Assets" link="/static-assets/" icon="folder-up"
Test automatic copying of `public/` files like `robots.txt` and `funding.json` directly to the build root.
:::

::: card title="MDX Component Rendering" link="/mdx-components/" icon="code"
Author interactive JSX components, counters, and badges alongside standard Markdown syntax with `@docmd/lite-mdx`.
:::

::: card title="Iconify Dynamic Icons" link="/iconify-icons/" icon="sparkles"
Render 100,000+ icons from open-source collections using the simple `icon:iconify:<name>` syntax.
:::

::: card title="Variables & Client Runtime" link="/variables-runtime/" icon="sliders"
Compile-time interpolation `{{ docmd.version }}` and reactive client hydration with `docmd-runtime.js`.
:::

::: card title="Playground Code Runner" link="/playground-runner/" icon="play"
Self-contained JavaScript and HTML code execution sandboxed in background Web Workers.
:::
:::

::: steps
### Step 1: Pre-flight Verification
Run `docmd doctor` in the project root to ensure system prerequisites, Node.js version, port availability, and plugin contracts are healthy.

### Step 2: Build & Static Asset Compilation
Execute `docmd build` to compile Markdown and MDX documents into optimized static HTML, copy static root assets, and generate search indices.

### Step 3: Production Serve
Start the production HTTP server with `docmd serve --port 3000 --host 127.0.0.1` to test production asset delivery and HTTP security response headers.
:::
