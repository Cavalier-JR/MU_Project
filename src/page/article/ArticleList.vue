<template>
  <el-radio-group v-model="radio">
    <el-radio :label="3">备选项</el-radio>
    <el-radio :label="6">备选项</el-radio>
    <el-radio :label="9">备选项</el-radio>
  </el-radio-group>

</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref(3)
</script>
