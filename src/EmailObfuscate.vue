<template>
  <TextObfuscate :text="email" :url="`mailto:${email}`" :link-class="linkClass">
    <template #default="{ displayText, obfuscatedHtml }">
      <slot :display-text="displayText" :obfuscated-html="obfuscatedHtml">
        <span v-html="obfuscatedHtml"></span>
      </slot>
    </template>
  </TextObfuscate>
</template>

<script setup>
import TextObfuscate from './TextObfuscate.vue'

defineProps({
  email: {
    type: String,
    required: true,
    validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  },
  linkClass: { type: String, default: '' }
})
</script>
