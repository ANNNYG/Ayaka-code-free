<template>
  <div class="canvas">
    <RouterLink :to="link" class="link">{{ text }}</RouterLink>
    <Handle :position="Position.Top" />
  </div>
</template>

<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import type { RouteLocationRaw } from 'vue-router'

type PROPS_TYPE = {
  link: RouteLocationRaw
  text: String
}

const { link, text } = defineProps<PROPS_TYPE>()
</script>
<style lang='scss' scoped>
.canvas {
  cursor: pointer;
  .link {
    text-decoration: none;
    color: white;
  }
}
</style>