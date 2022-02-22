## Notion Publish Tool - [publish.mitchinson.dev](https://publish.mitchinson.dev/)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/71b4cbcf-1773-4ce6-adbf-a266d2e9044f/WebsiteBannerNotion.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220206T213840Z&X-Amz-Expires=86400&X-Amz-Signature=f7936e5d000e04fb956b8c3e009ba733d831b140d21c0048698aa2d0ed5aae60&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22WebsiteBannerNotion.png%22&x-id=GetObject)

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
