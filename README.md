# Enterprise Vue Boilerplate

This is going to design monorepo architecture for large scale modern web application with vue.js tech stack such as vue-cli, nuxt.js and vue-design-system

## Features

* Monorepo Approaching
* Design Ops & Design System Language
* Pre-configuration, -configurable
* Guaranteed Consistency
* Thorough Commit Validating and Code Cleaning

## Structure

```bash
|-- services
  |-- design-system
  |-- web-spa
  `-- web-ssr
```

## How to use

```bash
mkdir my-web-workspace
cd my-web-workspace
curl https://codeload.github.com/rhiokim/.large-scale-workspace-with-vue/tar.gz/master | tar -xz --strip=1

lerna bootstrap

# run all services which are web-spa, web-ssr and design-system
# web-ssr 3000 port
# web-spa 3001 port
# design-system 3009 port
npm run dev
```

## TODO

* [ ] Sass-based Design System
* [ ] Test environment with Jest

## LICENSE

UNLICENSED