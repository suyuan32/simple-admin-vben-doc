---
title: Lint
author: Ryan SU
---

# Lint

## Introduction

::: tip The benefits of using lint

Students with basic engineering literacy will pay attention to coding standards, and code style checking (Code Linting, abbreviated as Lint) is an important means to ensure code standard consistency.

Following the corresponding code standards has the following benefits

- Reduced bug error rate
- Efficient development efficiency
- Higher readability

:::

The project integrates the following several code verification methods

1. eslint for verifying code format specifications
2. commitlint for verifying git submission information specifications
3. stylelint for verifying css/less specifications
4. prettier code formatting

::: warning

Lint is not necessary, but it is very necessary. After a project grows or there are too many participants, there will be various styles of code that cause some trouble for subsequent maintenance.

:::

## ESLint

ESLint is a code specification and error checking tool with the following features

- Everything is pluggable. You can call any rule api or formatter api to package or define rule or formatter.
- Any rule is independent
- There is no specific coding style, you can configure it yourself.

### Manually verify the code

```bash
# Execute the following code. Those that can be repaired will be automatically repaired, and those that cannot be repaired need to be manually modified.
pnpm run lint:eslint
```

### Configuration items

The project's eslint configuration is located in **.eslintrc.js** in the root directory and can be modified according to the team's own code specifications.

### Editor cooperation

It is recommended to use vscode for development. vscode comes with an eslint plugin that can automatically modify some errors.

At the same time, the project also comes with vscode eslint configuration, which is specifically located in the `.vscode/setting.json` folder. As long as you use vscode for development, you can use it without any settings.

## CommitLint

In a team, everyone's git commit information is different and varied. Without a mechanism, it is difficult to ensure standardization. How can it be standardized? You may think of git's hook mechanism and write shell scripts to implement it. Of course this can be done. In fact, JavaScript has a good tool to implement this template, which is commitlint (used to verify git submission information specifications).

### Configuration

The commit-lint configuration is located in **commitlint.config.js** in the project root directory.

### Git submission specification

- Refer to [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) specification ([Angular](https://github.com/conventional-changelog/conventional-changelog /tree/master/packages/conventional-changelog-angular))

  - `feat` adds new features
  - `fix` to fix issues/bugs
  - `style` is related to the code style and does not affect the running results
  - `perf` optimization/performance improvement
  - `refactor` refactoring
  - `revert` undo changes
  - `test` related to testing
  - `docs` documentation/comments
  - `chore` dependency update/scaffolding configuration modification, etc.
  - `workflow` workflow improvements
  - `ci` continuous integration
  - `mod` modifications of uncertain classification
  - `wip` under development
  - `types` type modification

### How to close

Just comment the following code in `.husky/commit-msg`

```bash
# npx --no-install commitlint --edit "$1"
```

### Example

```bash

git commit -m 'feat(home): add home page'

```

## Stylelint

Here is the translation of the selected text into English markdown text:

stylelint is used to verify the style of css in the project. With the automatic repair of the editor, it can well unify the css style inside the project.

### Configuration

The stylelint configuration is located in **stylelint.config.js** in the root directory.

### Editor cooperation

If you are using vscode editor, you only need to install the following plugin to automatically format the css style inside the file when saving.

**Plugin**

[StyleLint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

## Prettier

prettier can be used to unify project code styles, unified indentation, single and double quotes, trailing commas and other styles.

### Configuration

The prettier configuration file is located in **prettier.config.js** in the project root directory.

### Editor cooperation

If you are using vscode editor, you only need to install the following plugin to automatically format the js format inside the file when saving.

**Plugin**

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Git Hook

git hook is generally combined with various lints. When submitting code with git, code style verification is performed. If the verification fails, it will not be submitted. Developers need to modify it themselves and submit it again.

### husky

There is a problem that verification will verify all code, but we only want to verify our own submitted code. At this time, husky can be used.

The most effective solution is to put Lint verification locally. The common practice is to use husky or pre-commit to do a Lint verification before local submission.

The project defines corresponding hooks in `.husky`.

### How to turn off

```bash
# Remove husky dependency
pnpm remove huksy

```

### How to skip a check

```bash
# Add --no-verify to skip git hook verification (--no-verify is abbreviated as -n)
git commit -m "xxx" --no-verify
```

### lint-staged

Used to automatically fix submission file style issues

**lint-staged** configuration is located in **lintstagedrc.js** under the `.husky` directory of the project.

```js
module.exports = {
  // Execute the corresponding repair command for the specified format file when submitting
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": [
    "prettier --write--parser json",
  ],
  "package.json": ["prettier --write"],
  "*.vue": ["eslint --fix", "stylelint --fix", "prettier --write", "git add ."],
  "*.{scss,less,styl,css,html}": [
    "stylelint --fix",
    "prettier --write",
    "git add .",
  ],
  "*.md": ["prettier --write"],
};
```
