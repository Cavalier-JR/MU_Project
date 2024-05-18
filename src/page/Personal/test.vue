<template>
  <div>
    <el-button type="primary" @click="showDrawer">打开抽屉1</el-button>
    <el-drawer :visible="drawerVisible" @close="closeDrawer">
      <!-- 在这里放置抽屉内容 -->
      <h2>抽屉标题</h2>
      <p>这是抽屉的内容。</p>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawerVisible: false
    };
  },
  methods: {
    showDrawer() {
      this.drawerVisible = true;
    },
    closeDrawer() {
      this.drawerVisible = false;
    }
  }
};
</script>
