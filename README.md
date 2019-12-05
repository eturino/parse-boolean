# `@eturino/ts-parse-boolean`

[![npm version](https://badge.fury.io/js/%40eturino%2Fts-parse-boolean.svg)](https://badge.fury.io/js/%40eturino%2Fts-parse-boolean)
[![Build Status](https://travis-ci.org/eturino/ts-parse-boolean.svg?branch=master)](https://travis-ci.org/eturino/ts-parse-boolean)
[![codebeat badge](https://codebeat.co/badges/ee945253-aaba-4ad7-b8ea-3d0fa9fa8b8c)](https://codebeat.co/projects/github-com-eturino-ts-parse-boolean-master)
[![Maintainability](https://api.codeclimate.com/v1/badges/2b8116da70d362593c6a/maintainability)](https://codeclimate.com/github/eturino/ts-parse-boolean/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2b8116da70d362593c6a/test_coverage)](https://codeclimate.com/github/eturino/ts-parse-boolean/test_coverage)

[TypeDoc generated docs in here](https://eturino.github.io/ts-parse-boolean)

[Github repo here](https://github.com/eturino/ts-parse-boolean)

Converts to a boolean. Returns false if the value is falsy. If it is truthy it checks it by converting to a string, trimming, upcasing, and checking if the value is not `FALSE` or `NO` or `0`.

If we pass a value that is not a `boolean`, `string`, `number`, `null` or `undefined`, it will return `false`.

## Installation

`yarn add @eturino/ts-parse-boolean` or `npm install @eturino/ts-parse-boolean`.

## Usage

```typescript
import parseBoolean from "@eturino/ts-parse-boolean";

parseBoolean(true); // => true
parseBoolean(false); // => false
parseBoolean(1); // => true
parseBoolean(0); // => false
parseBoolean(-8); // => true
parseBoolean(" 0 "); // => false
parseBoolean(" tRue   "); // => true
parseBoolean(" No   "); // => false
parseBoolean(" faLse   "); // => false
parseBoolean(" Whatever   "); // => true

// complex values are not parsed and we return false by default
parseBoolean(["a"]); // => false
parseBoolean({ a: 1 }); // => false
```

## Development, Commits, versioning and publishing

<details><summary>See documentation for development</summary>
<p>

See [The Typescript-Starter docs](https://github.com/bitjson/typescript-starter#bump-version-update-changelog-commit--tag-release).

### Commits and CHANGELOG

For commits, you should use [`commitizen`](https://github.com/commitizen/cz-cli)

```sh
yarn global add commitizen

#commit your changes:
git cz
```

As typescript-starter docs state:

This project is tooled for [conventional changelog](https://github.com/conventional-changelog/conventional-changelog) to make managing releases easier. See the [standard-version](https://github.com/conventional-changelog/standard-version) documentation for more information on the workflow, or [`CHANGELOG.md`](CHANGELOG.md) for an example.

```sh
# bump package.json version, update CHANGELOG.md, git tag the release
yarn run version
```

You may find a tool like [**`wip`**](https://github.com/bitjson/wip) helpful for managing work in progress before you're ready to create a meaningful commit.

### Creating the first version

Once you are ready to create the first version, run the following (note that `reset` is destructive and will remove all files not in the git repo from the directory).

```sh
# Reset the repo to the latest commit and build everything
yarn run reset && yarn run test && yarn run doc:html

# Then version it with standard-version options. e.g.:
# don't bump package.json version
yarn run version -- --first-release

# Other popular options include:

# PGP sign it:
# $ yarn run version -- --sign

# alpha release:
# $ yarn run version -- --prerelease alpha
```

And after that, remember to [publish the docs](#publish-the-docs).

And finally push the new tags to github and publish the package to npm.

```sh
# Push to git
git push --follow-tags origin master

# Publish to NPM (allowing public access, required if the package name is namespaced like `@somewhere/some-lib`)
yarn publish --access public
```

### Publish the Docs

```sh
yarn run doc:html && yarn run doc:publish
```

This will generate the docs and publish them in github pages.

### Generate a version

There is a single yarn command for preparing a new release. See [One-step publish preparation script in TypeScript-Starter](https://github.com/bitjson/typescript-starter#one-step-publish-preparation-script)

```sh
# Prepare a standard release
yarn prepare-release

# Push to git
git push --follow-tags origin master

# Publish to NPM (allowing public access, required if the package name is namespaced like `@somewhere/some-lib`)
yarn publish --access public
```

</p>
</details>
