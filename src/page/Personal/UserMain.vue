<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

  <el-card style="max-width: 1200px; margin: 0 auto;">
    <template #header>
      <div class="card1_title">
        <p style="padding-left: 40px;">您好！欢迎来到遗忘系统</p>
      </div>
    </template>
    <div class="card-content">
      <p style="padding-left: 40px;">作为你的隐私保护伙伴，您可以上传不同的图片或文本让我遗忘哦！ </p>
      <br>
      <br>
      <p style="padding-left: 40px;">有以下三种情况可供您选择，不妨试试吧~ </p>
      <br>
      <br>
    </div> 

    <div class="card-content" style="display: flex; flex-wrap: wrap; justify-content: space-between;">
      <el-card style="width: 48%; margin-top: 15px;" shadow="always">
          <div class="note">
            <h2 class="thq-heading-2">
              <i class="fas fa-home" style="color: rgb(220, 116, 97);"></i> 图片类别遗忘
            </h2>
            <p class="first-line">让模型忘记某个事物的类别</p>
          </div>
      </el-card>

      <el-card style="width: 48%; margin-top: 15px;" shadow="always">
          <div class="note">
            <h2 class="thq-heading-2">
              <i class="fas fa-tags" style="color: rgb(97, 220, 177);"></i> 图片部分遗忘
            </h2>
            <p class="first-line">图片里的某个部分泄露了您的隐私？</p>
            <p class="first-line">来这里解决这个问题吧！</p>
          </div>
      </el-card>
      <el-card style="width: 48%; margin-top: 15px;" shadow="always">
        <div class="note">
            <h2 class="thq-heading-2">
              <i class="fas fa-pen" style="color: rgb(122, 97, 220);"></i> 文本遗忘
            </h2>
            <p class="first-line">发现您的隐私信息以文本的形式被泄露了？</p>
            <p class="first-line">不用担心，文本遗忘为您擦除模型中的信息</p>
        </div>

      </el-card>

      <el-card style="width: 48%; margin-top: 15px;" shadow="always">
        <div class="note">
          <h2 class="thq-heading-2">
            <i class="fas fa-history" style="color: rgb(220, 193, 97);"></i> 遗忘记录
          </h2>
          <p class="first-line">在这里查看您遗忘过的内容</p>
        </div>
      </el-card>
    </div>

    <div style="margin-bottom:125px;"></div>

  </el-card>
  

</template>


<script>

</script>


<style scoped>
.card1_title {
  margin-top: 10px; /* 可选：设置顶部边距 */
  margin-bottom: 15px;
  text-align: left;
  font-size: 25px; /* 设置字体大小 */
}
.card-content {
  font-size: 14px;
}

.note {
  margin-left: 20px; /* Adjust the margin value as needed */
}
.first-line {
  margin-top: 10px;
}
</style>
