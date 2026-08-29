<template>
  <a
    v-if="url"
    ref="textLink"
    :href="isActivated ? url : undefined"
    :class="linkClass"
    @mouseenter="activateLink"
    @focus="activateLink"
    @click="handleClick"
  >
    <slot :display-text="text" :obfuscated-html="obfuscatedText">
      <span v-html="obfuscatedText"></span>
    </slot>
  </a>
  <span v-else :class="linkClass">
    <slot :display-text="text" :obfuscated-html="obfuscatedText">
      <span v-html="obfuscatedText"></span>
    </slot>
  </span>
</template>

<script setup>
import { computed, nextTick, ref } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  url: { type: String, default: null },
  linkClass: { type: String, default: '' }
})

const textLink = ref(null)
const isActivated = ref(false)

const obfuscatedText = computed(() => escapeHtml(props.text).split('').join('<!-- -->'))

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character])
}

function activateLink() {
  if (props.url) isActivated.value = true
}

function handleClick(event) {
  if (!props.url || isActivated.value) return

  event.preventDefault()
  activateLink()
  nextTick(() => textLink.value?.click())
}
</script>
