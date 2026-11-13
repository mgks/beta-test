---
title: "Variables & Client Runtime"
description: "Testing compile-time template interpolation and dynamic client-side rehydration in v0.10.0."
---

# Variables & Client Runtime

`docmd` features a dual-layer Variables & Personalisation Engine:
1. **Compile-time Static Interpolation**: Resolves system, site, page, and environment variables during the build with zero client-side JavaScript overhead.
2. **Client-side Reactive Runtime**: Exposes `window.docmd.var` via `docmd-runtime.js` for instant developer-portal personalisation (e.g. customized API keys and usernames).

## Compile-Time Built-in Variables

| Variable Token | Evaluated Value | Notes |
| :--- | :--- | :--- |
| `\{{ docmd.version }}` | **{{ docmd.version }}** | Current active compiler version |
| `\{{ docmd.buildYear }}` | **{{ docmd.buildYear }}** | Current 4-digit build year |
| `\{{ site.title }}` | **{{ site.title }}** | Root configuration title |
| `\{{ page.title }}` | **{{ page.title }}** | Active document title |
| `\{{ stagingEnv \|\| 'production' }}` | **{{ stagingEnv || 'production' }}** | Fallback evaluation with `\|\|` operator |

## Escaping Syntax

To show literal tokens without evaluation, prefix the opening curly braces with a backslash:

```markdown
Syntax: \{{ docmd.version }}
Output: {{ docmd.version }}
```

## Dynamic Client-Side Runtime

The client runtime automatically binds elements declared with `data-docmd-var`:

::: callout tip title="Personalised Code Snippet"
```bash
# Below values update interactively when set via window.docmd.var.set()
curl -X GET "https://api.docmd.io/v1/user" \
  -H "Authorization: Bearer <span data-docmd-var="user.apiKey">YOUR_API_KEY</span>" \
  -H "X-User: <span data-docmd-var="user.name">Guest</span>"
```
:::

### Interactive Console Methods

Open browser developer tools to test the runtime API:

```javascript
// Retrieve current value
window.docmd.var.get('user.apiKey');

// Reactively update DOM elements without reloading the page
window.docmd.var.set('user.apiKey', 'live_sec_9948271a8f');
window.docmd.var.set('user.name', 'Alex');

// Inspect all registered variables
window.docmd.var.list();
```
