---
title: "Interactive Playground"
description: "Demonstrating executable code runner and isolated web worker sandbox in docmd v0.10.0."
---

# Interactive Playground

`@docmd/plugin-playground` provides an embedded JavaScript and HTML runner with live evaluation, console output capture, and background Web Worker sandboxing to prevent long-running code from freezing the browser UI.

## Live JavaScript Code Runner

::: playground title="Interactive Counter Simulation"
```javascript
// Click "Run" or press Shift+Enter to execute
const items = ['Production Server', 'Static Assets', 'MDX Components', 'Iconify Icons'];

console.log('Testing docmd v' + (window.docmd?.version || '0.10.0'));
items.forEach((item, index) => {
  console.log(`[${index + 1}/${items.length}] Initialised: ${item}`);
});

return { status: 'success', totalFeatures: items.length };
```
:::

## Features Tested

- **Zero Asset Overhead**: Documentation pages that do not include playground containers load zero additional JavaScript or CSS assets.
- **Web Worker Sandboxing**: Execution is delegated to isolated background web workers with memory and execution time boundaries.
- **Console Capture**: Formatted logging for `console.log`, `info`, `warn`, and `error` streams.
- **DOM Integration**: Direct interoperability with `window.docmd.var` and `window.docmd.theme`.
