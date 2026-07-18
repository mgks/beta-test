# Theming

## Built-in Themes

docmd ships with one default theme. The look and feel is controlled via `docmd.config.json`:

```json
{
  "theme": {
    "name": "default",
    "appearance": "dark",
    "codeHighlight": true,
    "template": "summer"
  }
}
```

## Templates

| Template | Description |
|----------|-------------|
| *(default)* | Clean, minimal documentation layout |
| `summer` | Rich two-column layout with cover hero and enhanced typography |

Templates are auto-installed from npm when first referenced in config.

## Custom CSS

Add custom styles by listing CSS file paths under `theme.customCss`:

```json
{
  "theme": {
    "customCss": ["assets/custom.css"]
  }
}
```

## Appearance

`"auto"` follows the system preference. Users can override this at runtime using the theme toggle in the header.
