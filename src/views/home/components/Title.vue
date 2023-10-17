<template>
  <div class="title">
    <a @click="handleClick">AYAKA Code Free Platforms</a>
    <Handle :position="Position.Bottom" />
  </div>
</template>

<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'

const handleClick = () => {
  window.open('https://github.com/ANNNYG/Ayaka-code-free')
}
</script>
<style lang='scss' scoped>
.title {
  width:100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
</style>