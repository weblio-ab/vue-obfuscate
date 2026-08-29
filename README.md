# @weblio-ab/vue-obfuscate

Vue 3 components for obfuscating email addresses and phone numbers from simple bots.

```bash
pnpm add @weblio-ab/vue-obfuscate
```

```vue
<script setup>
import { EmailObfuscate, PhoneObfuscate } from '@weblio-ab/vue-obfuscate'
</script>

<template>
  <EmailObfuscate email="info@example.com" />
  <PhoneObfuscate phone="040-6007500" />
</template>
```

## Installation from GitHub Packages

This package is published to GitHub Packages and requires authentication even though it is public.

Add the following to the consuming project's `.npmrc` file:

```ini
@weblio-ab:registry=https://npm.pkg.github.com
```

Create a GitHub Personal Access Token (classic) with the `read:packages` permission, then sign in:

```bash
npm login --scope=@weblio-ab --auth-type=legacy --registry=https://npm.pkg.github.com
```

Use your GitHub username as the username and the token as the password. Never commit the token to a repository.

## Usage

`EmailObfuscate` and `PhoneObfuscate` accept `link-class` and expose `displayText` and `obfuscatedHtml` through the default slot.

```vue
<PhoneObfuscate phone="040-6007500">
  <template #default="{ obfuscatedHtml }">
    <strong>Drainage:</strong>
    <span v-html="obfuscatedHtml"></span>
  </template>
</PhoneObfuscate>
```

## Publishing

Publishing is triggered directly by a published GitHub Release. No release pull request or separate version commit is required.

Create a GitHub Release using a semantic-version tag, for example:

```text
v0.2.0
```

The workflow removes the optional `v` prefix, sets the package version to `0.2.0` in the build environment, and publishes the package to GitHub Packages. The `package.json` in the repository is not modified by the workflow.
