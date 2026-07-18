# Container & Callout Previews

This page showcases how `docmd` renders standard callouts, custom containers, and how it handles broken, unclosed, or leaking container syntax.

---

## 1. Standard Callouts

Below are the five standard GitHub-style alert callouts supported by `docmd`.

### Note Callout

```markdown
> [!NOTE]
> This is a note callout. Useful for general guidance and background context.
```

> [!NOTE]
> This is a note callout. Useful for general guidance and background context.

---

### Tip Callout

```markdown
> [!TIP]
> This is a tip callout. Offers optimizations, best practices, or efficiency suggestions.
```

> [!TIP]
> This is a tip callout. Offers optimizations, best practices, or efficiency suggestions.

---

### Important Callout

```markdown
> [!IMPORTANT]
> This is an important callout. Highlights critical steps or must-know information.
```

> [!IMPORTANT]
> This is an important callout. Highlights critical steps or must-know information.

---

### Warning Callout

```markdown
> [!WARNING]
> This is a warning callout. Alerts the user to potential problems or pitfalls.
```

> [!WARNING]
> This is a warning callout. Alerts the user to potential problems or pitfalls.

---

### Caution Callout

```markdown
> [!CAUTION]
> This is a caution callout. Warns about high-risk actions that could cause data loss.
```

> [!CAUTION]
> This is a caution callout. Warns about high-risk actions that could cause data loss.

---

## 2. Leaking & Malformed Container Tests

These tests check how the `docmd` parser handles syntax errors, missing content, or lack of proper closing tags.

### Test A: Unclosed Code Block inside a Callout

If a user forgets to close a code block inside a blockquote callout, it shouldn't leak outside the container or break the entire page layout.

**Raw Markdown:**
```text
> [!NOTE]
> Here is a code block that was never closed:
> ```js
> console.log("Hello");
```

**Rendered Output:**
> [!NOTE]
> Here is a code block that was never closed:
> ```js
> console.log("Hello");

---

### Test B: Missing Callout Label or Content

What happens if there's only a header token without content? Or a non-standard label like `[!UNKNOWN]`?

**Raw Markdown:**
```text
> [!NOTE]
```

**Rendered Output:**
> [!NOTE]

**Raw Markdown:**
```text
> [!UNKNOWN]
> This is an unknown alert type. It should fall back to a standard blockquote.
```

**Rendered Output:**
> [!UNKNOWN]
> This is an unknown alert type. It should fall back to a standard blockquote.

---

### Test C: Nested Leaking Callouts

Checking how parser handles callouts nested inside other callouts without proper separation or matching quotes.

**Raw Markdown:**
```text
> [!WARNING]
> This is the outer warning.
> >> [!TIP]
> >> This is the inner tip inside the warning.
> > Still outer warning content.
```

**Rendered Output:**
> [!WARNING]
> This is the outer warning.
> >> [!TIP]
> >> This is the inner tip inside the warning.
> > Still outer warning content.
