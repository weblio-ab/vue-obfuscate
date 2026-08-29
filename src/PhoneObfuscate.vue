<template>
  <TextObfuscate :text="formattedPhone" :url="`tel:${normalizedPhone}`" :link-class="linkClass">
    <template #default="{ displayText, obfuscatedHtml }">
      <slot :display-text="displayText" :obfuscated-html="obfuscatedHtml">
        <span v-html="obfuscatedHtml"></span>
      </slot>
    </template>
  </TextObfuscate>
</template>

<script setup>
import { computed } from 'vue'
import TextObfuscate from './TextObfuscate.vue'
import { formatPhoneNumber, normalizePhoneNumber } from './phone.js'

const props = defineProps({
  phone: { type: String, required: true },
  linkClass: { type: String, default: '' }
})

const normalizedPhone = computed(() => normalizePhoneNumber(props.phone))
const formattedPhone = computed(() => formatPhoneNumber(props.phone))
</script>
