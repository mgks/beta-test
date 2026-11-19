# Threads v2 (Discussions & Reviews)

The **Threads v2** plugin introduces persistent, Git-friendly discussion threads, inline review comments, draft staging, auto-publish intervals, and author avatars.

All discussions live directly inside your Markdown files using pure container syntax (`::: threads`, `::: thread`, `::: anchor`, `::: comment`, `::: reactions`), preserving your documentation as the single source of truth.

---

## Active Inline Discussion

Below is a live inline discussion thread anchored to a snippet of documentation:

::: threads
::: thread th-docmd-review-1
::: anchor
All discussions live directly inside your Markdown files using pure container syntax, preserving your documentation as the single source of truth.
:::
::: comment c-101 "Alice Smith" "2026-11-19T10:00:00Z" by alice review rev-101
This is a game changer for technical documentation reviews! Authors can draft comments locally without polluting the live document immediately.
:::
::: comment c-102 "Bob Jones" "2026-11-19T10:05:00Z" reply-to c-101 by bob review rev-101
Totally agreed. And with `autoPublish` enabled, drafts will automatically sync after the quiet period or when explicitly published.
:::
::: reactions
👍 5  ❤️ 3  🚀 4
:::
:::
:::

---

## Resolved Thread Example

Threads can also be marked as resolved with timestamp and resolver metadata:

::: threads
::: thread th-docmd-resolved-2 resolved "Lead Reviewer" "2026-11-19T10:30:00Z"
::: anchor
Preserving your documentation as the single source of truth.
:::
::: comment c-103 "Lead Reviewer" "2026-11-19T10:20:00Z" by reviewer review rev-102
Verified that all containers nest cleanly inside depth-tracking containers without breaking adjacent code blocks or admonitions.
:::
::: comment c-104 "Alice Smith" "2026-11-19T10:28:00Z" reply-to c-103 by alice review rev-102 edited "2026-11-19T10:29:00Z"
Thank you! Closing this review thread now.
:::
::: reactions
🎉 6  ✅ 8
:::
:::
:::

---

## Configuration Reference

In `docmd.config.json`, enable threads with your preferred sidebar and auto-publish behavior:

```json
{
  "plugins": {
    "threads": {
      "sidebar": true,
      "autoPublish": {
        "seconds": 180,
        "startOn": true
      }
    }
  }
}
```

### Options Breakdown

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `sidebar` | `boolean` | `false` | When true, renders review threads into a dedicated collateral sidebar. |
| `autoPublish` | `false \| object` | `{ seconds: 180, startOn: true }` | When an object, drafts auto-publish after `seconds` of inactivity. Set to `false` for manual collect-and-publish mode only. |
| `autoPublish.seconds` | `number` | `180` | Quiet window duration in seconds before staging drafts are merged into markdown. |
| `autoPublish.startOn` | `boolean` | `true` | Whether auto-publish timer is enabled by default on page load. |
