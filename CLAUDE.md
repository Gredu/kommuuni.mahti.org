# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A VuePress 2 (pre-release, `2.0.0-rc.x`, Vite bundler, default theme) static site for "Kontulan Kommuuni", a six-person shared household. It holds the house rules, agreements and guides. Nearly all of the work here is editing **Finnish-language Markdown content**, not code. Write new content in Finnish to match the existing pages.

## Commands

```sh
npm run docs:dev     # local dev server with hot reload
npm run docs:build   # static build into .vuepress/dist (gitignored)
```

There are no tests or linters. `npm install` updates both `package-lock.json` and the committed `yarn.lock`. `vuepress`, `@vuepress/bundler-vite` and `@vuepress/theme-default` are pinned to exact rc versions because the theme has a peer dependency on one exact `vuepress` version. Upgrade them together.

## Structure

- `.vuepress/config.js` (ESM; `package.json` has `"type": "module"`) sets the navbar and an **explicit per-section sidebar**. A new page is not linked from the sidebar until you add its path (for example `/ohjeet/foo.md`) to the matching `sidebar` array. Pages that have been retired stay in the repo but are commented out of the sidebar (for example `vuorot` and the cleaning guides in `ohjeet/`). `pagePatterns` keeps `CLAUDE.md` out of the site.
- Content sections. Each has a `README.md` that serves as its index page:
  - `saannot/`: rules
  - `sopimukset/`: agreements between the landlord and residents (Kommuunipankki, shared purchases, the projector-screen buy-in table)
  - `ohjeet/`: guides
- The root `README.md` is the VuePress home page (`home: true` frontmatter). It is not repo documentation.
- Images go in `.vuepress/public/images/`. Reference them with absolute paths such as `/images/foo.jpg`.

## Content conventions

Rules and guidance use VuePress custom containers with fixed labels:

```md
::: danger Sääntö
**The rule as a bold first sentence.** Further explanation.
:::

::: warning Ohjeistus
**Guidance in bold.** Explanation.
:::
```

`::: tip OK` and `::: danger X` show do/don't examples, as in the laundry-drying images. To link between pages, use relative `.md` paths, for example `[viestintä](../saannot/viestinta.md)`. Commit messages are short English imperatives, such as "Add rule to living room".
