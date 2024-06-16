---
title: Contribute
description: 'Help improving egytech.fyi'
icon: 'i-ph-git-pull-request-duotone'
---

Thanks for helping making egytech.fyi better! We're happy to have you. Please follow the instructions below to setup your local development environment and get started. We strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

## Discuss your Thoughts

Before you fix a bug or work on a feature, please [open an issue](https://github.com/MuhammadM1998/egytech.fyi/issues?q=is:issue+is:open+sort:updated-desc) first to discuss it and confirm it's beneficial to the project. This helps saving the maintainers & contributors time and ensures faster approval for PRs.

## Updating Content

For modifying or adding new content. You'll likely need to only do changes inside `/app/content` folder. See [project structure](#project-structure) for more info.

::alert
  Content related PRs titles should start with `docs:` including typos fixes. For example: `docs: fix typo`, `docs: add 2025 survey results`
::

## Tech Stack

- :icon{name="logos:nuxt-icon" size="16" class="me-1"} Nuxt 3
- :icon{name="logos:typescript-icon" size="16" class="me-1"} TypeScript
- :icon{name="logos:tailwindcss-icon" size="16" class="me-1"} TailwindCSS 
- :icon{name="simple-icons:shadcnui" size="16" color="green" class="me-1"} Shadcn-Vue
- :icon{name="logos:cloudflare-icon" size="16"} Cloudflare Pages
- 🧩 Shadcn-Docs and Nuxt Content modules ([See below for more info](#shadcn-docs-nuxt-content))

## Prerequisites

Make sure the following are installed on your machine

- [Git](https://www.git-scm.com/downloads).
- [Node.js](https://nodejs.org/en) LTS.
  ::alert{icon="ph:lightbulb-duotone"}
    We recommend using [nvm](https://github.com/nvm-sh/nvm) for installing different versions of Node.js and switching between them easily.
  ::
- [VSCode](https://code.visualstudio.com/download) or your preferred IDE.
  ::alert
    For VSCode, these extensions are recommended for better DX. [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar), [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss), [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), and [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
  ::


## Local Development

::steps
  ### Clone the repo

  ```bash [terminal]
  git clone https://github.com/MuhammadM1998/egytech.fyi.git
  ```

  ### Enable Corepack

  ```bash [terminal]
  corepack enable
  ```

  ::alert{icon="ph:info-duotone"}
    `corepack enable` turns on corepack only for the current Node version. You'll need to run the command again if you switched to another Node version.
  ::


  ### Install Dependencies

  ```bash [pnpm]
  pnpm install
  ```

  ::alert{icon="ph:lightbulb-duotone"}
    We recommend using [ni](https://github.com/antfu-collective/ni) for unified commands for all package managers.
  ::
  

  ### Start the Dev Server

  ```bash [terminal]
  pnpm dev
  ```

  The app should be running on [localhost:3000](localhost:3000)
::

## Build Locally

You can build the project and preview it locally before submitting a PR to ensure everything is working as expected.

::steps
  ### Build

  ```bash [pnpm]
  pnpm build
  ```

  ### Preview

  ```bash [pnpm]
  pnpm preview
  ```

  The generated build should be running on [localhost:3000](localhost:3000)
::

## Creating a new branch

Checkout to a new branch to implement your idea and test it locally.

```bash [terminal]
git checkout -b my-branch
```

::alert
  We recommend using [Conventional Commits](https://www.conventionalcommits.org) for more readable commits and easier reviewing. However it's not mandatory as we'll squash the PR and use the PR title as the message.
::

::alert{icon="ph:lightbulb-duotone"}
  When you push your changes they get automatically formatted using a pre-commit hook using [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) and [lint-staged](https://github.com/lint-staged/lint-staged). We also use [autofix.ci](https://autofix.ci/) to lint & format PRs.
::

## Submitting a PR

When you're confident your branch is working as expected without errors. Submit a PR and make sure its title is adhering to [Conventional Commits](https://www.conventionalcommits.org) as we squash the PR and use its title as the message for cleaner history.

::alert{icon="ph:lightbulb-duotone"}
  We use [amannn/action-semantic-pull-request](https://github.com/amannn/action-semantic-pull-request) to validate PRs titles.
::

::alert{icon="ph:lightbulb-duotone"}
  Once your PR is merged. You're GitHub account will be featured in the [project's README](https://github.com/MuhammadM1998/egytech.fyi#community) as a contributor! Powered by [automd](https://automd.unjs.io/) and [contrib.rocks](https://contrib.rocks).
::

## Project Structure

Below is an overview of the project structure with comments to clarify the folder/file scope.

```bash
./
├─ .github/ # GitHub composite actions, workflows, PRs & issues templates, etc.. 
├─ .vscode/ # Project settings & extensions for VSCode
├─ app
│  ├─ assets/
│  ├─ components/ 
│  │  ├─ content/ # Contains any components used in md files
│  │  ├─ global/ # Contains custom icons as vue files
│  │  │  └─ InstapayDuotone.vue
│  │  ├─ layout/ # Contains any components used in md files
│  │  └─ ui/ # shadcn-vue & our custom ui components
│  ├─ composables/
│  ├─ content/ # MD files for the website content.
│  │  ├─ 2024/ # Year folder. User can switch between the available years in the website
│  │  │  ├─ dashboard.md
│  │  │  └─ report.md
│  │  ├─ 2023/
│  │  │  ├─ dashboard.md
│  │  │  ├─ report.md
│  │  │  └─ extra-file.md
│  │  └─ community/ # Non year folder. Always visible no matter the selected year.
│  │     ├─ contribute.md
│  │     └─ participate.md
│  ├─ lib/ # shadcn-vue utils
│  ├─ pages/ 
│  └─ app.config.ts # Config for Shadcn-Docs module and our custom config
├─ public/
└─ components.json # Components config for shadcn-vue
└─ nuxt.config.ts
└─ tailwind.config.ts
└─ eslint.config.js
└─ .prettierrc
└─ .editorconfig
└─ .npmrc
└─ .gitignore
└─ package.json
└─ pnpm-lock.yaml
└─ README.md
```

## Shadcn-Docs & Nuxt Content

This project utilizes [Shadcn-Docs-Nuxt](https://shadcn-docs.nuxt.dev) module for a beautiful & feature-rich documentation out of the box based on [Nuxt Content](https://content.nuxt.com). You'll likely need to refer their docs often while working on a feature.

- Shadcn-Docs is in early development. If you encountered a bug. Consider submitting a PR upstream to Shadcn-Docs rather than this project. This benefits us and others using the module. Once its merged & released upstream we'll bump the module and get the newest updates.

- If you have a change in mind that seems specific to this project. You can always override Shadcn-Docs components by creating a new `.vue` file with the same name. We're already doing this with the following files and others
  -  `pages/[...slug].vue`
  - `pages/index.vue`
  - `components/layout/Header/Header.vue`
  - `components/layout/Aside.vue`

  ::alert{icon="ph:lightbulb-duotone"}
    You can use Nuxt Devtools' inspect to easily open the component you need. You can also check Shadcn-Docs source.
  ::

- Shadcn-Docs also exposes some shadcn-vue components such as `Input`, `Button`. Hence we don't need to re-add them in our project. If you added a new shadcn-vue component and got a warning in the console for duplicate components, this means the component is already added by Shadcn-Docs and you can use it directly without re-adding it.
  ::alert{type="warning" icon="ph:lightbulb-duotone"}
    For the components exported by Shadcn-Docs to work as expected. We must use the same `shadcn.componentPrefix` option in our `nuxt.config` as Shadcn-Docs which is `Ui`. Changing its value will break the components.
  ::
