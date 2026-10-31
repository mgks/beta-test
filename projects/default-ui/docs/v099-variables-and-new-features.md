---
title: "v0.9.9 Variables & New Features Test Suite"
description: "Comprehensive verification suite for docmd v0.9.9 testing build-time interpolation, client runtime personalisation, mermaid diagrams, and containers."
---

# v0.9.9 Variables & New Features Test Suite

This page validates the newly introduced features in **docmd v0.9.9**, including the Variables & Personalisation Engine, Versioned Search, Template Resolution, and SPA Routing.

## 1. Built-in Variables Resolution

The following values are resolved dynamically by the compiler:

::: callout info "Compiler System Variables" icon:sparkles
- **Compiler Version:** `v{{ docmd.version }}`
- **Calendar Build Year:** `{{ docmd.buildYear }}`
- **Build Date:** `{{ docmd.buildDate }}`
- **Git Active Branch:** `{{ docmd.gitBranch || 'main' }}`
- **Git Commit Short SHA:** `{{ docmd.gitCommit || 'HEAD' }}`
- **Site Title:** `{{ site.title }}`
- **Page Title:** `{{ page.title }}`
- **Page Slug:** `{{ page.slug }}`
:::

### Fallback Operator Verification

- Unset variable with default string: `{{ unsetVar || "Default Fallback OK" }}`
- Unset variable with numeric fallback: `{{ targetPort || 3000 }}`

### Escaped Syntax Verification

The snippet below uses `\{{ ... }}` to preserve raw template syntax without compilation:

```markdown
Welcome to \{{ site.title }} running on commit \{{ docmd.gitCommit }}!
```

## 2. Interactive Client Runtime Personalisation

Test the client-side `window.docmd` SDK. Type a key into the input field below to verify real-time updates in the code block:

::: card "Live Reactive Code Block" icon:play
<div style="margin: 12px 0;">
  <label style="display:block; font-size:12px; font-weight:600; margin-bottom:6px; opacity:0.8;">ENTER YOUR TEST TOKEN:</label>
  <input 
    type="text" 
    id="testApiInput" 
    placeholder="e.g. sk_test_beta_token_7788" 
    style="width: 100%; max-width: 420px; padding: 8px 12px; border: 1px solid var(--docmd-border-color, #e2e8f0); border-radius: 6px; background: var(--docmd-bg-secondary, #f8fafc); font-family: monospace;"
    oninput="window.docmd?.var?.set('user.apiKey', this.value || 'YOUR_API_KEY')"
  />
  <script>
    (function() {
      var inp = document.getElementById('testApiInput');
      if (inp && !inp.__bound) {
        inp.__bound = true;
        inp.addEventListener('input', function(e) {
          if (window.docmd && window.docmd.var) {
            window.docmd.var.set('user.apiKey', e.target.value || 'YOUR_API_KEY');
          }
        });
      }
    })();
  </script>
</div>

```bash
curl -X GET https://api.docmd.io/v1/projects \
  -H "Authorization: Bearer {{ user.apiKey || 'YOUR_API_KEY' }}"
```
:::

## 3. Architecture & Pipeline Verification

::: mermaid title:"v0.9.9 Architecture Verification" icon:workflow align:center zoom:true
graph TD
    A["docmd.config.json"] --> B["VariableRegistry"]
    C["System Git Metadata"] --> B
    D["Environment Flags"] --> B
    B --> E["Static Compiler (@docmd/parser)"]
    E --> F["Static HTML Output"]
    E --> G["docmd-runtime.js (window.docmd)"]
    G --> H["Live DOM & Reactive Codeblocks"]
::: /mermaid

## 4. Container Formats

::: tabs
::: tab "Callout Variants" icon:alert-circle
::: callout tip "Performance Note" icon:zap
Asynchronous non-blocking generation compiles hundreds of pages in milliseconds.
:::

::: callout warning "Secret Handling" icon:shield-alert
Never place private API tokens or database passwords in static build-time variables.
:::
::: /tab

::: tab "Feature Grid" icon:grid
::: grids
    ::: grid
        ::: card "Zero-Config" icon:box
        Works out of the box with intelligent defaults.
        :::
    :::
    ::: grid
        ::: card "Universal Themes" icon:palette
        Support for default and summer templates.
        :::
    :::
::: /grids
::: /tab
::: /tabs

## 5. Sequential Execution Steps

::: steps
::: step "Pre-flight Verification" icon:check-circle
Runtime dependencies and templates are validated prior to compiling.
:::

::: step "Static Site Compilation" icon:cpu
Pages, layouts, and search indexes are built in parallel.
:::

::: step "Runtime Hydration" icon:sparkles
Client runtime seamlessly synchronises interactive elements.
:::
::: /steps
