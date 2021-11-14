# ADAPunkz Site

An interactive and wallet-connected site showing project information, current user's assets (from Nami wallet), recent CNFT.io listings and sales information, and an explorer view to filter the collection by attributes and current pricing.

## Requirements

- [Node.js](https://nodejs.org/en/) LTS or newer
- [Yarn](https://yarnpkg.com/)

## Installation

```bash
git clone https://github.com/ADAPunkz/site
cd site
yarn install
```

## Development

```bash
# start dev server with hot reload
yarn start

# build production version (optimised), and serve locally
yarn build
yarn serve
```

## Contributing

Rules:

- Keep it focused. A linting configuration is included and will run on pre-commit.
- Keep it light. Try to avoid adding external dependencies unless you really need to.
- Keep it generic. We, or others, may end up using this code for other NFTs.

git:
- All contributions should be branched from current `master`
- Branch name should follow the format `feat/featurename` for features, `fix/fixname` for fixes, and `chore/chorename` for chores

Reading:

- [React](https://reactjs.org/)
- [Gatsby](https://www.gatsbyjs.com/docs)
- [Grommet](https://v2.grommet.io/components)
- [syled components](https://styled-components.com/)
- [React Query](https://react-query.tanstack.com/overview)
- [zustand](https://github.com/pmndrs/zustand)

The above packages make up the primary tech stack of this project.
