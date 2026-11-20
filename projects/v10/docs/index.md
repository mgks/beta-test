---
title: "docmd Beta Test Suite"
description: "Comprehensive staging environment and test documentation for active release testing."
---

# docmd Beta Test Suite

Welcome to the **docmd** pre-release staging and verification environment. This workspace is configured to test and validate features in real project conditions.

::: callout info title="Release Verification Environment"
Active Compiler Version: **v{{ docmd.version }}**  
Build Year: **{{ docmd.buildYear }}**  
Staging Environment: **{{ stagingEnv || "beta-test" }}**
:::

::: grid cols=2
::: card title="Threads v2" link="/threads-v2/" icon="message-square"
Test live discussions, inline threads widget, timer, review workflows, and commenting.
:::

::: card title="Table Containers" link="/tables/" icon="table"
Test large dataset table rendering (60 rows, 8 wide columns), responsive horizontal scrolling, and expand modal lightbox.
:::
:::

## Test Scenarios

- **Threads v2**: Interactive review comments, auto-publish intervals, and collapsible sidebar discussion panel.
- **Table Containers**: Clean document flow, smooth mobile horizontal scrolling, and table expand lightbox modal.
:::
