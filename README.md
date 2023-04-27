[![Jira](https://badgen.net/badge/icon/jira?icon=jira&label)](https://github.com/SanjeebLama/Frontend-Skeleton)
[![](https://img.shields.io/badge/Documentation-darkblue?style=flat&logo=notion&logoWidth=20&logoHeight=20)](https://github.com/SanjeebLama/Frontend-Skeleton)

# 🚀 Turbo Frontend Skeleton

Turbo Frontend Skeleton is a template designed to help streamline the process of creating new frontend projects. It comes equipped with all the latest stable dependencies that we use, allowing developers to get up and running quickly.


## Overview
<details><summary><b>A brief introduction to the project</b></summary>
  
<br>This turborepo uses **Yarn** as a package manager. It includes the following packages/apps:
  
**Apps and Packages**

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).
  
**Tech Stack:**

| Technology                                 | Description                                                                                                  |
| :----------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| [Next.js](https://nextjs.org/)             | A React-based framework for building modern web applications                                               |
| [Tailwind CSS](https://tailwindcss.com)     | A utility-first CSS framework for rapidly building custom designs                                         |
| [Chakra UI](https://chakra-ui.com)          | A simple and modular component library for React applications                                               |
| [Storybook](https://storybook.js.org)       | An open-source tool for building UI components and pages in isolation                                      |
| [React Query](https://tanstack.com)         | A library for managing and caching server state in React applications                                       |
| [React Hook Form](https://react-hook-form.com) | A performant, flexible and extensible forms library for React with easy-to-use validation features    |
| [zod](https://github.com/vriad/zod)        | A TypeScript-first schema validation tool that is intuitive, type-safe and practical                        |
| [next-i18next](https://github.com/isaachinman/next-i18next) | A plugin for Next.js that provides a simple, powerful way to add internationalization to your app |
| [Sentry](https://sentry.io/)                | A cloud-based platform for error monitoring, logging and aggregation in software applications and services |


**Utilities**

This turborepo has some additional tools already setup for you:
  
  | Technology     | Description                                         |
| :--------------| :-------------------------------------------------- |
| TypeScript     | A strict syntactical superset of JavaScript         |
| ESLint         | A pluggable linting utility for JavaScript and JSX  |
| Prettier       | An opinionated code formatter                       |
  
  
<p align="right"><a href="#-turbo-frontend-skeleton">⬆️</a></p>
 
</details>


## Installation:

<details><summary><b>Instructions for installing the project</b></summary>

  <br>Open a command prompt or terminal window on your local computer. Navigate to the directory where you want to clone the repository.
1. Use the **`git clone`** command to clone the repository. The syntax is as follows:

```jsx
git clone git@github.com:wesionaryTEAM/turbo-frontend-skeleton.git
```

2. Go inside `turbo-frontend-skeleton` folder

```jsx
cd turbo-frontend-skeleton
```

3. Checkout to `develop` branch

```jsx
git checkout develop
```

4. Make sure to select the appropriate version of Node.js by using `nvm use` If you haven't installed nvm yet, you can follow the installation instructions at the [**official nvm repository on GitHub**](https://github.com/nvm-sh/nvm#installing-and-updating). This step is important to ensure that the project uses the correct version of Node.js and to avoid any potential compatibility issues.

  
5. After that  you’ll first need to install all the dependencies 

```jsx
yarn install
```

Good Job! 🤗 You successfully installed the skeleton, now we just need to run project.
  
<p align="right"><a href="#-turbo-frontend-skeleton">⬆️</a></p>

</details>


## Running the project:
<details><summary><b>Show instructions</b></summary>
  
<br>- To Run **both apps** from root

```jsx
   yarn run dev
```
 
<br>- To run **Web** workspace from root

```jsx
   yarn workspace web run dev
```

<br>- To run **Docs** workspace from root

```jsx
   yarn workspace docs run dev
```
  
 <p align="right"><a href="#-turbo-frontend-skeleton">⬆️</a></p>
</details>


## Build:

<details><summary><b>Instructions for building the project</b></summary>

<br>To build all apps and packages, run the following command:

```
cd turbo-frontend-skeleton
yarn run build
```

To run apps workspace

```
cd turbo-frontend-skeleton
yarn workspace web run dev
```

To run docs workspace

```
cd turbo-frontend-skeleton
yarn workspace docs run dev
```
<p align="right"><a href="#-turbo-frontend-skeleton">⬆️</a></p>

</details>


## Contribution Guidelines:
<details><summary><b>Guidelines for contributing to the project</b></summary>
<br>
  
- Always create a new branch from the `develop` branch, and not from the main branch.
- Make your changes in the new branch and test thoroughly.
- Create a pull request (PR) for your changes so that they can be reviewed and merged into the develop branch.
- Never merge directly into the main branch. All changes to the main branch should be done through a pull request.

<p align="right"><a href="#-turbo-frontend-skeleton">⬆️</a></p>
</details>


## Useful Links:

<details><summary><b>Useful resources related to the project </b></summary>

<br>**Project Realted:**

- [Documentation](https://www.notion.so/Frontend-Skeleton-Documentation-adac91e528a0498fb3e9316c86f3183b)
- [Checklist](https://www.notion.so/Frontend-Skeleton-Dependencies-Checklist-82baa48de70f4e25aab67f501fb70358)
- [Jira Board](https://wesionary-team.atlassian.net/jira/software/projects/FR/boards/58)

**Learn more about the power of Turborepo:**
  
- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

  <p align="right"><a href="#-turbo-frontend-skeleton">⬆️</a></p>

  </details>
