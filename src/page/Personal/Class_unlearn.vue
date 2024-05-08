<!--  类别遗忘 -->

<template>
  <el-container>
    <el-header>
      <h1>类别遗忘</h1>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="11">
          <el-form :model="formData">
            <el-form-item>
              <el-button class="custom-button">猫🐱</el-button>
              <el-button class="custom-button">狗🐕</el-button>
              <el-button class="custom-button" >旋旋🐕</el-button>
              <el-button class="custom-button">鸡🐓</el-button>
              <el-button class="custom-button" >只因🐓</el-button>
              <el-button class="custom-button">只因🐓</el-button>
              <el-button class="custom-button">猪🐖</el-button>
            </el-form-item>
          </el-form>

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


        </el-col>

        <el-col :span="13">
          <el-table :data="tableData" style="width: 100%; height: 100vh;" border stripe>
            <el-table-column label="图像" prop="image" width="180"></el-table-column>
            <el-table-column label="遗忘前">
              <el-table-column prop="beforeCategory" label="分类结果" width="120"></el-table-column>
              <el-table-column prop="beforeConfidence" label="权" width="80"></el-table-column>
            </el-table-column>
            <el-table-column label="遗忘后">
              <el-table-column prop="afterCategory" label="分类结果" width="120"></el-table-column>
              <el-table-column prop="afterConfidence" label="权" width="80"></el-table-column>
            </el-table-column>
          </el-table>
        </el-col>          


      </el-row>

  </el-main>
</el-container>







</template>




<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { ElMessageBox } from "element-plus"

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
};

const tableData = reactive([
{ image: 'cat1.jpg', beforeCategory: '猫', beforeConfidence: 0.99, afterCategory: '狗', afterConfidence: 0.8 },
{ image: 'cat1.jpg', beforeCategory: '狗', beforeConfidence: 0.99, afterCategory: '狗', afterConfidence: 0.8 },
{ image: 'cat1.jpg', beforeCategory: '猫', beforeConfidence: 0.99, afterCategory: '狗', afterConfidence: 0.8 },
{ image: 'cat1.jpg', beforeCategory: '猫', beforeConfidence: 0.99, afterCategory: '狗', afterConfidence: 0.8 },
{ image: 'cat1.jpg', beforeCategory: '只因', beforeConfidence: 0.99, afterCategory: '蔡徐坤', afterConfidence: 0.8 },
{ image: 'cat1.jpg', beforeCategory: '猫', beforeConfidence: 0.99, afterCategory: '狗', afterConfidence: 0.8 },
{ image: 'cat1.jpg', beforeCategory: '猫', beforeConfidence: 0.99, afterCategory: '狗', afterConfidence: 0.8 },
{ image: 'cat1.jpg', beforeCategory: '鸡', beforeConfidence: 0.99, afterCategory: '小黑子', afterConfidence: 0.8 },
{ image: 'cat1.jpg', beforeCategory: '猫', beforeConfidence: 0.99, afterCategory: '狗', afterConfidence: 0.8 },
{ image: 'cat1.jpg', beforeCategory: '猫', beforeConfidence: 0.99, afterCategory: '狗', afterConfidence: 0.8 },
{ image: 'cat1.jpg', beforeCategory: '猫', beforeConfidence: 0.99, afterCategory: '狗', afterConfidence: 0.8 }
]);

</script>



<style>
.el-header {
background-color: #f2f2f2;
color: black;
padding: 8px;
font-size: 50px;
font-family:'社会体';
text-align: center;
}

.text-card {
margin-top:5px;
margin-bottom: 10px;
cursor: pointer;
}

.el-form-item label {
font-size: 20px;
font-family: '扁桃体';
}

.el-form-item .el-input__inner {
font-family: 'Helvetica Neue', Arial, sans-serif;
}

h2 {
  font-size: 30px;
  margin-top:-40px;
  margin-bottom:10px;
  text-align: center;
  font-family: '扁桃体';
}

.custom-button {
padding: 20px 20px !important;
margin-left: 40% !important;
font-size: 20px !important;
background-color: #B0C4DE !important;
border-radius: 10px !important;
font-family: '斗鱼体' !important;
box-shadow: 5px 5px #EEE9E8 !important;
border: none !important;
cursor: pointer !important;
outline: none !important;
}

.el-col.el-col-12:nth-child(2) {
border: 3px solid #EEE9E9;
border-radius: 20px;
padding: 67px;
box-shadow: 5px 10px  #EEE9E8;
}
.el-col.el-col-12{
padding: 20px;
}
.el-scrollbar__wrap {
overflow-y: auto;
margin: 1px;
}

.el-scrollbar__view {
overflow-y: auto;
margin: 1px;

}

.custom-button {
  margin:6px
}

.el-card {
  width: 400px;
  height: 290px;
  margin: auto;
}
.centered-text {
  text-align: center; /* 让文本居中 */
  font-size: 25px; /* 设置字体大小 */
  margin-top: 3px; /* 可选：设置顶部边距 */
}
.centered-plus {
  text-align: center; /* 让文本居中 */
  font-size: 150px; /* 设置字体大小 */
  margin-bottom: 10px; /* 可选：设置底部边距 */
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