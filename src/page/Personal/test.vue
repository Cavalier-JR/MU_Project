<template>
  <el-button @click="dialogVisible = true">
    Click to open the Dialog
  </el-button>

  <el-dialog
    v-model="dialogVisible"
    title="投毒防护效果图"
    width="40%"
    draggable="true"
  >
    <div style="text-align: center;">
      <p style="font-size: 20px;margin-top: 5px;margin-bottom: 5px;"> 投毒防护前 </p>"
      <img src="../../assets/before_UL.png" style="width: 60%;height: 60%;" />
      <p style="font-size: 20px;margin-top: 5px;margin-bottom: 5px;"> 投毒防护后 </p>"
      <img src="../../assets/after_UL.png" style="width: 60%;height: 60%;" />
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)
</script>
