# This is an e-commerce app with an admin dashboard and a user facing dashboard using Turborepo in a single monorepo.

This is an official starter Turborepo with multiple meta-frameworks all working in harmony and sharing packages.
# Run
`pnpm run dev`

admin dashboard: `http://localhost:3001/`
user dashboard: `http://localhost:5173/`
api running on `HTTP://localhost:5001`



## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server--- express project
- `admin`: a [Vite](https://vitejs.dev/) admin interface (in progress)
- `user`: a [Vite](https://vitejs.dev/) user interface (in progress)

- `ui`: shared react ui components for admin and user interface.
- `scripts`: Jest and ESLint configurations
- `tsconfig`: tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
