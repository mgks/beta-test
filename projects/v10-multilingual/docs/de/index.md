---
title: "Summer Theme & Mehrsprachige Demonstration"
description: "Demonstration des Summer-Layouts, der zweisprachigen Navigation und der semantischen Suche in docmd v0.10.0."
---

# Summer Theme & Mehrsprachige Demonstration

Willkommen beim **Summer Theme & Mehrsprachigen Staging-Projekt** für `docmd` v0.10.0. Dieses Projekt demonstriert das maßgeschneiderte **Summer**-Dokumentationsdesign, eine vollständige zweisprachige Navigation mit Sprachumschaltung zwischen Deutsch und Englisch sowie die vektorbasierte semantische Suche.

::: callout tip title="Summer Layout-Funktionen" icon="sun"
Das Summer-Theme bietet fünf vertikal angeordnete Bereiche: obere Leiste mit zentrierter Suche, Untermenü-Tabs, Breadcrumb-Header, dreispaltiges Layout und Footer mit Branding.
:::

## Getestete Hauptfunktionen

<Card title="Summer Design-System" icon="sparkles" href="./features/">
Bietet moderne Typografie, nahtlosen Hell-/Dunkelmodus, ein fixiertes Inhaltsverzeichnis und kontrastreiche Callouts.
</Card>

<Card title="Zweisprachiger Sprachwechsler" icon="globe" href="../">
Wechseln Sie nahtlos zwischen Deutsch und Englisch mit synchronisierten Routen und automatischer Spracheinstellung.
</Card>

<Card title="Semantische Vektorsuche" icon="search">
Unterstützt durch <code>@docmd/plugin-search</code> mit clientseitigen Vektoreinbettungen für semantische und konzeptionelle Suchanfragen.
</Card>

## MDX-Komponenten-Interoperabilität

Das Summer-Theme unterstützt MDX-JSX-Komponenten vollständig:

<Callout type="info" title="Cross-Theme-Kompatibilität">
MDX-Komponenten wie <code>&lt;Callout&gt;</code>, <code>&lt;Card&gt;</code> und <code>&lt;Badge&gt;</code> erben automatisch alle Summer-Theme-Tokens.
</Callout>

- Ausdruck: **{'DOCMD'.toLowerCase() + '.io'}**
- Jahr: **{new Date().getFullYear()}**
