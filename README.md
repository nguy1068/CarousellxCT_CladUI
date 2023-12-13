# Intro

Clad UI Design System is a system of design tokens, guidelines, theming solution and components library that helps Chotot front end and mobile engineers build consistent UIs faster and more satisfyingly.


## Why the name Clad UI?

Clad is the short form of classified ads, which is the main product of our group, besides, clad also mean “to be dressed or to be coated”

## What Clad UI Design System is

- A unified solution for styling components for Chotot Web user-facing platforms
- A theme specifications that define primitive Clad UI design tokens
- A collection of reusable components from atomic inputs to composite components
- A workbench (a.k.a kitchen sink) to preview all available components and their usage guide
- A set of CLI tools to assist generate new components...

## What Clad UI Design System is NOT

- A base framework for doing Chotot web apps (refer to Next.js framework)
- An end user-facing web app
- Any full web page

## Colophon (A.K.A prerequisites to this design system)

### Building components:

- 📚 [Storybook](https://storybook.js.org) for UI component development and [auto-generated docs](https://medium.com/storybookjs/storybook-docs-sneak-peak-5be78445094a)
- ⚛️ [React](https://reactjs.org/) declarative component-centric UI. React is also our core UI library of Front End development
- 💅 [Linaria](https://linaria.now.sh//) which enable CSS-in-JS styling and extract all CSS to external CSS file.
- 📄 [System UI Theme Specification](https://system-ui.com/theme/) as a standard design token format with theme-aware [`css` props helper](https://styled-system.com/css)
- ⬇️ [MDX](https://mdxjs.com) (part of Storybook) for seamless React / JSX documentation

Maintaining the system:

- 🐟 [Babel](https://babeljs.io/) and [module resolver plugin](https://github.com/tleunen/babel-plugin-module-resolver) for transpiling modern JS and static theming
- 📦 [NPM](https://www.npmjs.com/) for packaging and distribution
- 🧶 [yarn](https://yarnpkg.com/) as package manager's CLI
- 🧪 [Jest](https://jestjs.io/) as test runner for unit testing
- 🐐 [react-testing-library](https://github.com/testing-library/react-testing-library) to assist unit testing React components
- 🚥 [Gitlab CI](https://docs.gitlab.com/ee/ci/): Continuous integration
- ✅ [Chromatic](https://www.chromatic.com/) to prevent UI bugs in components (by Storybook maintainers)

---

**© 2020-2022 Chotot.vn. Apache-2.0 license**.
# CarousellxCT_CladUI
