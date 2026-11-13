---
title: "Doctor Diagnostics"
description: "Pre-flight environment and project health checks with docmd doctor in v0.10.0."
---

# Doctor Diagnostics (`docmd doctor`)

`docmd` v0.10.0 introduces the `docmd doctor` diagnostic command. It runs a suite of pre-flight health checks to inspect system prerequisites, Node.js runtime, port conflicts, configuration integrity, broken navigation links, and registered plugin diagnostic hooks.

::: callout tip title="Running Doctor"
Run `docmd doctor` before deploying to staging or production to catch misconfigurations early.
:::

## Checks Performed

1. **System & Runtime Environment**:
   - Node.js version compatibility (`>= 20.0.0`).
   - Active package manager detection (`pnpm`, `npm`, `yarn`, `bun`).
   - OS and platform binary compatibility.
2. **Project & Configuration**:
   - `docmd.config.json` existence and schema validation.
   - Root project prefix mapping in multi-project workspaces.
   - Document count and source directory resolution.
   - Navigation links pointing to existing files on disk.
3. **Plugin Diagnostics**:
   - Calls `onDoctorCheck` hooks across active plugins (e.g. SEO canonical verification, Iconify API availability, MDX compiler readiness).
4. **Port Availability**:
   - Verifies whether ports 3000 (dev) and 3000 (serve) are available or currently held.

## Usage & Output Modes

::: tabs
::: tab "Human Terminal Output"
```bash
npx docmd doctor
```

```text
🩺 PRE-FLIGHT DIAGNOSTICS

  Environment
    ✔ Node.js: v24.0.0
    ✔ Package Manager: pnpm

  Project & Content
    ✔ Configuration: docmd.config.json
    ✔ Documents: 8 pages detected
    ✔ Navigation: All targets valid

  Plugins
    ✔ seo: Canonical URL configured
    ✔ iconify: Dynamic icon engine online

Diagnostic summary: 0 errors, 0 warnings.
```
::: /tab

::: tab "Machine-Readable JSON"
```bash
npx docmd doctor --json
```

```json
{
  "timestamp": "2026-11-13T14:30:00.000Z",
  "status": "ok",
  "environment": {
    "node": "v24.0.0",
    "packageManager": "pnpm"
  },
  "project": {
    "configPath": "docmd.config.json",
    "configStatus": "ok",
    "documentCount": 8
  }
}
```
::: /tab
::: /tabs
