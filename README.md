# @weblio/vue-obfuscate

Vue 3 components for obfuscating email addresses and phone numbers from simple bots.

```bash
pnpm add @weblio/vue-obfuscate
```

```vue
<script setup>
import { EmailObfuscate, PhoneObfuscate } from '@weblio/vue-obfuscate'
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
@weblio:registry=https://npm.pkg.github.com
```

Create a GitHub Personal Access Token (classic) with the `read:packages` permission, then sign in:

```bash
npm login --scope=@weblio --auth-type=legacy --registry=https://npm.pkg.github.com
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

GitHub Actions publishes the package when a GitHub Release is created and published. The workflow uses the repository's `GITHUB_TOKEN` with `packages: write` permission.
