# Divvi Up Documentation

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Deployment

On pull request merge to the `main` branch, GitHub Actions will build the site and push the generated contents to the `gh-pages` branch.
GitHub Pages will then automatically pick up the new changes.
