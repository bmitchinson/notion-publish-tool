## Notion Publish Tool - [publish.mitchinson.dev](https://publish.mitchinson.dev/)

A publishing API for mirroring Notion posts to [mitchinson.dev](https://mitchinson.dev)

Includes:

-   Asset uploading to Cloudinary CDN
-   Dev.to cross posting
-   Front end for initiating builds @ [publish.mitchinson.dev](https://publish.mitchinson.dev)

Up to date motiviations, technical goals, and todo list available on [this notion post](https://bmitchinson.notion.site/Posting-From-Notion-5200a0e922e34c999a4f0128b2933f75).

> Created with [bmitchinson/ts-node-starter](https://github.com/bmitchinson/ts-node-starter)

> Svelte code adapted from the TS config [sveltejs/template](https://github.com/sveltejs/template)

## Built with

-   Svelte
-   Websockets
-   Express
-   Typescript
-   Docker
-   Notion, Dev.to, and Cloudinary API

## Getting Started

Alter `.gitmodules` to clone your own hexo site to the `hexo-site` directory.
Then use `git submodule update --init --recursive` to pull down the modules.

Your hexo site should be configured to use hexo-deploy with a git PAT token.
See [my site](https://github.com/bmitchinson/Mitchinson.dev) as an example.
