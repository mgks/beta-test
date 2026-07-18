# Semantic Search Test

This project tests the **Summer template** with **semantic search enabled**.

`docmd-search`, `onnxruntime-node`, and `@huggingface/transformers` are **not pre-installed** — docmd must auto-install them on first build.

## What's being tested

- Auto-install of `docmd-search` + peer dependencies
- Semantic vector index generation (`_docmd-search/`)
- `data-semantic="true"` stamp on the search modal after post-build
- Summer template layout and styles
- Confidence score display in search results

## Test Queries

After deploying, try these searches to validate semantic matching:

- `"how do I configure the build output"` → should find configuration pages
- `"changing the look and feel"` → should surface theme / template pages
- `"deploy to github pages"` → should find CI/deployment topics

## Pages

- [Configuration](configuration/)
- [Deployment](deployment/)
- [Theming](theming/)
