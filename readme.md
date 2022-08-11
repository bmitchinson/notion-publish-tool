## Notion Publish Tool - [publish.mitchinson.dev](https://publish.mitchinson.dev/)

![Tests](https://github.com/bmitchinson/notion-publish-tool/actions/workflows/static.yml/badge.svg?branch=main)
![Storybook](https://github.com/bmitchinson/notion-publish-tool/actions/workflows/deploy_storybook.yml/badge.svg?branch=main)
![Heroku](https://github.com/bmitchinson/notion-publish-tool/actions/workflows/deploy_heroku.yml/badge.svg)

A publishing web app for mirroring Notion posts to [mitchinson.dev](https://mitchinson.dev)

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

## Design

-   Page / Component [Design in Figma](https://www.figma.com/file/A4cBLkwvsozovIXCncPPu7/Main?node-id=0%3A1)
    -   ([Ripped off from the IBM Component Library](https://www.ibm.com/design/language/iconography/ui-icons/library/))
    -   Hit the "F" in the upper left to flip through pages
-   Storybook for component preview [hosted on Github Pages](https://bmitchinson.github.io/notion-publish-tool)

## Getting Started

Alter `.gitmodules` to clone your own hexo site to the `hexo-site` directory.
Then use `git submodule update --init --recursive` to pull down the modules.

Your hexo site should be configured to use hexo-deploy with a git PAT token.
See [my site](https://github.com/bmitchinson/Mitchinson.dev) as an example.
