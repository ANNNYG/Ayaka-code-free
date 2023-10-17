<template>
  <div class="flow-wrap">
    <VueFlow v-model="elements" class="vue-flow">
      <template #node-title>
       <Title />
      </template>
      <template #node-canvas-type>
        <Link link="/flow-editor" text="canvas type"/>
      </template>
      <template #node-waterfalls-type>
        <Link link="/waterfalls-editor" text="waterfalls type"/>
      </template>
      <template #node-grids-type>
        <Link link="grids-editor" text="grids type"/>
      </template>

      <!-- 背景点 -->
      <Background :gap="20" />
      <!-- 小地图 -->
      <MiniMap />
      <!-- 控制器 -->
      <Controls />
    </VueFlow>
  </div>
</template>

<script setup lang="ts">
import { VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { MiniMap } from '@vue-flow/minimap'
import { Controls } from '@vue-flow/controls'
import { ref } from 'vue'

import Title from './components/Title.vue'
import Link from './components/Link.vue'
import { homeElements } from './elements'

const elements = ref(homeElements)
</script>

<style lang="scss">
@import url('./nodeStyle.scss');
</style>
<style lang="scss" scoped>
.flow-wrap {
  height: 500px;
  border-radius: 10px;
  min-width: 900px;
  display: flex;
  justify-content: center;
}

.vue-flow {
  border-radius: 20px;
  width: 1000px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
}
</style>
