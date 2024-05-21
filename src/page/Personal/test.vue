<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">打开嵌套图片的 Dialog</el-button>
  
    <el-dialog title="图片展示" :visible.sync="dialogVisible">
    <!-- 使用自定义模板插槽来显示图片 -->
      <template slot="title">
      <!-- 图片显示区域 -->
        <div style="display: flex; justify-content: space-around;">
          <img src="../../assets/before_UL.png" alt="图片1" style="max-width: 100%; height: auto;" />
          <img src="../../assets/after_UL.png" style="max-width: 100%; height: auto;" />
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    }
  }
};
</script>