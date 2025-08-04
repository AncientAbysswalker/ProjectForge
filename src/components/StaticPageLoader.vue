<template>
  <div class="static-page-wrapper">
    <iframe 
      :src="staticPageUrl"
      frameborder="0"
      width="100%" 
      height="100%"
      style="min-height: 100vh; border: none;"
      @load="onPageLoad"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  pageName: string
}

const props = defineProps<Props>()

const staticPageUrl = computed(() => {
  return `/static-pages/${props.pageName}/index.html`
})

const onPageLoad = () => {
  // Optional: Handle page load events if needed
  console.log(`Static page loaded: ${props.pageName}`)
}
</script>

<style scoped>
.static-page-wrapper {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
