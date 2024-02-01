<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'

</script>

<template>
  <div class="common-layout">
    <el-container direction="vertical">
      <TheHeader />
      <slot></slot>
    </el-container>
  </div>
</template>