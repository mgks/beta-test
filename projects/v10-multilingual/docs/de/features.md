---
title: "Summer Funktionen & Mehrsprachigkeit"
description: "Detaillierte Übersicht über die Summer-Layout-Bänder und die mehrsprachige Lokalisierungsarchitektur."
---

# Summer Funktionen & Mehrsprachige Architektur

Das Summer-Template (`@docmd/template-summer`) ist ein modernes Produktdokumentations-Layout für Entwickler- und API-Dokumentationen.

## Strukturelle Layout-Bereiche

1. **Obere Leiste**: Markenlogo, Suchleiste mit Tastaturkürzel (`⌘K` / `Ctrl+K`) und Farbmodus-Umschalter.
2. **Untermenü-Navigation**: Horizontale Bereichs-Tabs für schnelles Umschalten.
3. **Seiten-Header**: Fixierter Breadcrumb-Pfad, Seitentitel und Schnellaktions-Links.
4. **Inhalts-Raster**: Responsive Seitenleiste, Hauptinhalt und rechtes Inhaltsverzeichnis (TOC).
5. **Footer**: Copyright, Sponsoren-Links und docmd-Branding.

::: callout success title="Mehrsprachige Architektur" icon="languages"
Seiten sind 1:1 zwischen den Sprachen (`de` und `en`) zugeordnet. Beim Sprachwechsel bleibt Ihre aktuelle Leseposition auf der übersetzten Seite erhalten.
:::

## Semantische Suchfunktionen

Wenn die semantische Suche aktiviert ist, durchsucht das modale Suchfenster einen Vektorindex zusätzlich zur Stichwortsuche und ermöglicht begriffliche Treffer.
