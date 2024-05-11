<template>
  <el-card class="el-card" shadow="always">
    <div class="centered-text">上传图片遗忘</div>
    <el-upload
      align="center"
      ref="upload"
      action="uploadImg"
      accept=".txt, .txts, .pdf, .docx,.xlsx, .xls, .jpg, .jpeg, .png"
      :on-remove="handleRemove"
      :on-change="handleImgChange"
      :file-list="imgList"
      :on-preview="handlePreview"
      :http-request="handUploadFile"
      :before-upload="handleBefore"
      :limit="6"
      multiple
      :on-exceed="handleExceed"
      :auto-upload="false"
    >
      <el-button size="large" type="primary">点击上传需要遗忘的图片</el-button>
      <div slot="tip" class="el-upload__tip">
        <!-- 上传附件,大小不超过4M。 -->
      </div>
    </el-upload>
  </el-card>

  <br>
  <br>

  <div class="function_select">
    <p style="margin-bottom: 20px;"> 请选择你的遗忘方法: </p>
    <el-radio-group v-model="radio">
      <el-radio :label="3" size="large" border>GA</el-radio>
      <el-radio :label="6" size="large" border>FT</el-radio>
      <el-radio :label="9" size="large" border>RL</el-radio>
    </el-radio-group>
  </div>
  <div class="button">
    <el-button :dark="isDark" color="#626aef" @click="Forget_Button_Click" size="large">进行遗忘</el-button>
  </div>
  <div class="demo-progress" style="margin-top: 20px">
    <el-progress :text-inside="true" :stroke-width="26" :percentage="70" />
  </div>
  <p class="text-bottom"> 用时：1.2s </p>
</template>



<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from "element-plus"

const radio = ref(0) //默认不选按钮

function Forget_Button_Click() {
  ElMessageBox.confirm("本操作为实现模型遗忘从该图片中学习到的信息", "提示", {
    confirmButtonText: "我已知晓",
    cancelButtonText: "取消",
    type: "info",
  })
    .then(() => {
      console.log("用户已知晓图片遗忘的功能");
    })
    .catch(() => {
      //取消：就不做任何提示了
    });
}

</script>


<style scoped>
  .el-card {
    width: 400px;
    height: 150px;
    margin: auto;
  }
  .centered-text {
    text-align: center; /* 让文本居中 */
    font-size: 25px; /* 设置字体大小 */
    margin-top: 3px; /* 可选：设置顶部边距 */
    margin-bottom: 30px; /* 可选：设置底部边距 */
  }
  .function_select{
    text-align: center;
    font-size: 20px; /* 设置字体大小 */
    margin-bottom: 15px; /* 可选：设置底部边距 */
  }
  .button {
    text-align: center;
  }
  .demo-progress {
    margin-top: 40px; /* 可选：设置顶部边距 */
    margin-bottom: 15px;
    max-width: 600px;
    margin: auto;
  }
  .text-bottom {
    margin-top: 20px; /* 可选：设置顶部边距 */
    margin-bottom: 15px;
    text-align: center;
    font-size: 20px; /* 设置字体大小 */
  }
</style>