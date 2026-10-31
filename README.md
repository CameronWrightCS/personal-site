# personal-site

[![CI status](https://github.com/CameronWrightCS/personal-site/actions/workflows/ci.yml/badge.svg)](https://github.com/CameronWrightCS/personal-site/actions/workflows/ci.yml)
[![Site status](https://img.shields.io/website?url=https://cameronwright.dev/&label=cameronwright.dev)](https://cameronwright.dev/)

Source for my personal website, built with [Zola](https://www.getzola.org/) 0.23.6.

## Previewing

`zola serve` shows every page, but the theme switch needs the Worker. To try it, run the Worker locally (Wrangler needs Node 22 or newer):

```bash
zola build --base-url http://localhost:8788
npx wrangler@4 dev --port 8788
```

## Deploying

GitHub Actions checks every push and deploys `main` to Cloudflare (`.github/workflows/ci.yml`). It needs two repository secrets: `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
