---
title: "Production Server (docmd serve)"
description: "Validation and testing documentation for the dedicated production HTTP server in docmd v0.10.0."
---

# Production Server (`docmd serve`)

`docmd` v0.10.0 introduces a dedicated HTTP server designed specifically for production environments, containerized deployments (Docker, Kubernetes), and static staging. Unlike `docmd dev`, `docmd serve` operates with zero file-watching overhead, minimal CPU usage, and production-grade security headers.

::: callout success title="Production Server Contract"
`docmd serve` automatically binds to `127.0.0.1` by default for security, with support for `--host 0.0.0.0` inside containerized environments.
:::

## Key Features Tested

- **Zero Watcher Overhead**: Does not initialize chokidar file watchers or WebSocket hot-reload listeners, dramatically lowering memory footprint.
- **Built-in Compression**: Automatically negotiates Gzip and Deflate content encoding for text, CSS, JavaScript, and SVG assets.
- **Security Response Headers**: Injects standard HTTP headers by default:
  - `Content-Security-Policy`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`
  - `Strict-Transport-Security` (when HTTPS is terminated)
- **Container Health Check Probe**: Exposes `/healthz` endpoint returning HTTP 200 `OK` for orchestrators like Kubernetes, Docker Compose, and AWS ECS.
- **Headless Browser Suppression**: Respects `--no-open` CLI flag and `DOCMD_NO_OPEN=true` environment variable to prevent browser popups in automated CI/CD runners.

## Configuration Options

Configure production server defaults inside `docmd.config.json`:

```json
{
  "serve": {
    "port": 3000,
    "host": "127.0.0.1",
    "compress": true,
    "securityHeaders": true,
    "healthCheck": true,
    "mcp": false
  }
}
```

## Running the Server

::: tabs
::: tab "CLI Command"
```bash
# Start production server on default port 3000
npx docmd serve

# Bind to custom interface without opening a browser
npx docmd serve --host 127.0.0.1 --port 8080 --no-open
```
::: /tab

::: tab "Docker Deployment"
```dockerfile
FROM node:24-alpine
WORKDIR /docs
COPY . .
RUN npm install -g @docmd/core
EXPOSE 3000
CMD ["docmd", "serve", "--host", "0.0.0.0", "--port", "3000", "--no-open"]
```
::: /tab
::: /tabs

## Health Check Verification

Test the container probe directly via curl:

```bash
curl -i http://127.0.0.1:3000/healthz
```

Expected HTTP response:
```http
HTTP/1.1 200 OK
Content-Type: text/plain; charset=utf-8
Content-Length: 2

OK
```
