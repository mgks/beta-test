# Container Engine v0.9.1 Test Suite

This page tests the modernised container engine features introduced in `docmd` v0.9.1.

## 1. Sub-Containers with Explicit Closing Tags & Comments

### Tabs Container (`::: tabs` ... `::: /tabs`)

::: tabs # Tabs container comment
::: tab "Modern Tab Syntax" # Sub-tab comment
This tab is defined using `::: tab "..."` and `::: /tab`.
::: /tab

::: tab "Second Tab"
Second tab content.
::: /tab
::: /tabs

### Legacy Tab Fallback (`== tab`)

::: tabs
== tab "Legacy Tab 1"
Legacy syntax tab content 1.
== tab "Legacy Tab 2"
Legacy syntax tab content 2.
:::

## 2. Steps Container (`::: steps` ... `::: /steps`)

::: steps # Steps section
::: step "Initialize Workspace" # Step 1 comment
Run `npx @docmd/core build` to initialize the project.
::: /step

::: step "Configure Options"
Edit `docmd.config.json` to customise themes and plugins.
::: /step
::: /steps

## 3. Changelog Container (`::: changelog` ... `::: /changelog`)

::: changelog # Changelog entry
::: log "v0.9.1 (2026-08-08)" # Entry comment
- Modernised container engine syntax.
- Added native `::: mermaid` diagram container.
- Resolved Issue #187 HTML block rendering bug.
::: /log
::: /changelog

## 4. Self-Closing Containers & Redundant Close Handling

::: button "Standard Button" url:"https://docmd.io" icon:external-link
::: tag "v0.9.1" style:success
::: embed url:"https://docmd.io"

### Redundant Closing Tags on Self-Closing Containers
Self-closing containers do not require closing tags, but if a user writes `::: /button` or `::: /tag`, the normaliser strips them without error or visual leakage:

::: button "Button with Redundant Close" url:"https://docmd.io" icon:link # Comment
::: /button # Redundant close tag should be stripped gracefully

::: tag "Tag with Redundant Close" style:warning
::: /tag

### Inline Tags & Buttons in Middle of Text
Tags and buttons can be embedded directly within inline text paragraphs, with optional explicit closing tags (`::: /tag` or `::: /button`):

This release includes the new ::: tag "v0.9.1" color:#10b981 icon:check ::: /tag feature and the ::: button "Get Docmd" url:"https://docmd.io" icon:download ::: /button action seamlessly in the middle of a sentence!

## 5. Tooltip Container (`::: tip`)

### Inline Hover Tooltip
Hover popovers can be embedded inline using `::: tip`:

Docmd uses a ::: tip "No complex build pipeline required" term:"Zero-Config" ::: /tip architecture.

### Block Tooltip
::: tip "Interactive Diagram Shell"
Mermaid Diagram Shell
::: /tip

## 6. Robustness Test: Orphan Tags & Auto-Closing

### Orphan Closing Tags
An orphan closing tag (`::: /card` or stray `:::`) with no matching open tag is safely stripped:

::: /card # Orphan close tag — should not render as text
::: /random # Unknown orphan close tag — stripped

### Unclosed Container Auto-Closing
A container opened without an explicit close is automatically closed before the next section or EOF:

::: callout info "Auto-Closed Callout"
This callout was opened with `::: callout info` but never explicitly closed. The container normaliser auto-closes it cleanly!


This is another content

## 6. Deep Nesting Test

::: callout info "Outer Container with Nesting"
This is the outer container.

::: card # Nested card 1
This is the first nested card.

::: callout warning "Double-Nested Alert"
This is a double-nested alert inside a card inside a callout.
:::/callout

::: /card

::: card # Nested card 2
This is the second nested card.
:::/card

:::/callout