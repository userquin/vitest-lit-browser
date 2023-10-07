# Vitest Browser Lit

Testing [Lit](https://lit.dev) application with [@vitest/browser](https://github.com/vitest-dev/vitest) in the browser.

This repo is using a custom `vitest` and `@vitest/browser` package versions from [this PR](https://github.com/vitest-dev/vitest/pull/3584).

## Run

This repo is using [pnpm](https://pnpm.io) as package manager.

`pnpm install && pnpm run test`

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/userquin/vitest-lit-browser)

## Change Vitest PR

If you're working with the [Vitest PR 3584](https://github.com/vitest-dev/vitest/pull/3584) and you want to change somehing on it, you will need to build Vitest and create `tgz` files for `vitest` and `@vitest/browser` packages:
- run `nr build && pnpm pack` from root: will generate `vitest-0.xx.z.tgz` (`xx.z`  is the Vitest version)
- open another terminal and change to `packages/browser` folder (`cd packages/browser`) and run `pnpm pack`: will generate `vitest-browser-0.xx.z.tgz` (`xx.z`  is the Vitest version)

If you want to run your fork of this repository in StackBlitz, you **NEED** to include [Vitest PR 3674: none provider](https://github.com/vitest-dev/vitest/pull/3674) changes in your [Vitest PR 3584](https://github.com/vitest-dev/vitest/pull/3584) local fork.

Once you've generated `vitest` and `@vitest/browser` in your local, uninstall both dev dependencies in your local fork in this repository, **don't remove the corresponding `tgz` files before uninstalling the dependencies**:
- run `pnpm remove -D @vitest/browser`
- run `pnpm remove -D vitest`

Override both `tar.gz` files in your local fork in this repo and add both dependencies using the `file:` protocol:
- `pnpm add -D ./vitest-0.xx.z.tgz`
- `pnpm add -D ./vitest-browser-0.xx.z.tgz`
