<template>
  <el-card class="el-card" shadow="always">
    <div class="centered-text">上传图片遗忘</div>
    <div class="centered-plus">+</div>
    <br>
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
      <el-button size="small" type="primary">点击上传需要遗忘的图片</el-button>
      <div slot="tip" class="el-upload__tip">
        <!-- 上传附件,大小不超过4M。 -->
      </div>
    </el-upload>
  </el-card>
  <div class="demo-progress">
    <el-progress :text-inside="true" :stroke-width="26" :percentage="70" />
  </div>
</template>



<style scoped>
  .el-card {
    width: 400px;
    height: 300px;
    margin: auto;
  }
  .centered-text {
    text-align: center; /* 让文本居中 */
    font-size: 18px; /* 设置字体大小 */
    margin-top: 3px; /* 可选：设置顶部边距 */
    margin-bottom: 3px; /* 可选：设置底部边距 */
  }
  .centered-plus {
    text-align: center; /* 让文本居中 */
    font-size: 150px; /* 设置字体大小 */
    margin-top: 10px; /* 可选：设置顶部边距 */
    margin-bottom: 10px; /* 可选：设置底部边距 */
  }
  .demo-progress {
    margin-top: 50px; /* 可选：设置顶部边距 */
    margin-bottom: 15px;
    max-width: 600px;
    margin: auto;
  }
</style>