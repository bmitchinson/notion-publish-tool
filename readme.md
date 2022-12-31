## Notion Publish Tool - [publish.mitchinson.dev](https://publish.mitchinson.dev/)

![Tests](https://github.com/bmitchinson/notion-publish-tool/actions/workflows/static.yml/badge.svg?branch=main)
![Storybook](https://github.com/bmitchinson/notion-publish-tool/actions/workflows/deploy_storybook.yml/badge.svg?branch=main)
![Heroku](https://github.com/bmitchinson/notion-publish-tool/actions/workflows/deploy_heroku.yml/badge.svg)

A publishing web app for mirroring Notion posts to [mitchinson.dev](https://mitchinson.dev)

Includes:

-   Asset uploading to Cloudinary CDN
-   Dev.to cross posting
-   Front end for initiating builds @ [publish.mitchinson.dev](https://publish.mitchinson.dev)
-   The beginnings of a svelte ui component library - [storybook](https://bmitchinson.github.io/notion-publish-tool) - [figma](https://www.figma.com/file/A4cBLkwvsozovIXCncPPu7/Main?node-id=0%3A1)
    -   ([Referencing IBM Design Language](https://www.ibm.com/design/language/iconography/ui-icons/library/))

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

## Testing

-   API is unit tested with Jest + e2e tested with cypress.
-   UI is tested in the e2e layer. I'd like to unit test components but,
    it's been a challenge to mock the web socket that sets component contents.
    Components mostly display information from the socket, they don't have
    much interactivity.
-   There's also UI response mocks in storybook, but those tests have no automation.
    Visual regression testing is difficult with timed mock responses.

## Getting Started

Alter `.gitmodules` to clone your own hexo site to the `hexo-site` directory.
Then use `git submodule update --init --recursive` to pull down the modules.

Your hexo site should be configured to use hexo-deploy with a git PAT token.
See [my site](https://github.com/bmitchinson/Mitchinson.dev) as an example.

-   `npm run storybook` opens storybook to view UI components in isolation.

    -   If sass import errors, delete cached `dist` and `storybook_build`
    -   Close any browser tabs that may have cached the storybook page and then quit browser, reopen

-   `npm run watch` opens api in watch mode. manual page reloads are required to view svelte changes.

## Links used to learn:

-   [MDN - Svelte Store](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
-   [MDN - Svelte: Reactivity, lifecycle, accessibility](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)

## Dependency Maintenance

-   `npx storybook upgrade` will attempt to upgrade all @storybook/xyz packages as needed
