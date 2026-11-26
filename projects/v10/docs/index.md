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

## Test S==cenarios=={t-bb4c26df}

- **Threads v2**: Interactive review comments, auto-publish intervals, and collapsible sidebar discussion panel.
- **Table Containers**: Clean document flow, smooth mobile horizontal scrolling, and table expand lightbox modal.
:::

::: threads
  ::: thread t-bb4c26df
    ::: anchor
      cenarios
    :::

    ::: comment c-31dfb618 "Ghazi" "2026-11-26" by ghazi review r-e990226d
      testing?
    :::

    ::: comment c-b054adc7 "Ghazi" "2026-11-26" by ghazi review r-174323f2
      yes it is
    :::
  :::
:::
