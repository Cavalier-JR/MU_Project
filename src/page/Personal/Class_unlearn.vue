<!--  类别遗忘 -->

<template>
  <el-container>
    <el-header>
      <h1>类别遗忘</h1>
    </el-header>
    <el-main>
      <el-row justify="center">
        <el-col :span="12">
          <div class="select_title">
            <p> 请选择你想遗忘的类别 </p>
          </div> 
          <div class="select"> 
            <span>
              <el-cascader v-model="value" :options="options" @change="handleChange" clearable :show-all-levels="false" collapse-tags/>
            </span>
            <span class="button">
              <el-button :dark="isDark" color="#626aef" @click="Forget_Button_Click" size="large">进行遗忘</el-button>
            </span> 
          </div> 
          <p class="text-bottom"> 当前遗忘方法是:aaaGT </p>
          <p class="text-bottom"> 用时：1.2s </p>
        </el-col>
       
        <el-col :span="12" v-show="isRightPanelVisible">
          <el-table :data="tableData" style="width: 100%" border stripe>
            <el-table-column label="图像" prop="image" width="100" header-align="center" align="center"></el-table-column>
            <el-table-column prop="beforeCategory" label="遗忘前分类结果" width="140" header-align="center" align="center"></el-table-column>
            <el-table-column prop="afterCategory" label="遗忘后分类结果" width="140" header-align="center" align="center"></el-table-column>
          </el-table>
        </el-col>         
      </el-row>

    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { ElMessageBox } from "element-plus"
const isRightPanelVisible = ref(false); // 初始状态为false，即不显示
function Forget_Button_Click() {
ElMessageBox.confirm("本操作为实现模型遗忘从该图片中学习到的信息", "提示", {
  confirmButtonText: "我已知晓",
  cancelButtonText: "取消",
  type: "info",
})
  .then(() => {
    console.log("用户已知晓图片遗忘的功能");
    isRightPanelVisible.value = true;
  })
  .catch(() => {
    //取消：就不做任何提示了
  });
};

const tableData = reactive([
{ image: 'cat1.jpg', beforeCategory: '猫', afterCategory: '狗'},
{ image: 'cat2.jpg', beforeCategory: '狗', afterCategory: '狗'},
{ image: 'cat3.jpg', beforeCategory: '猫', afterCategory: '羊'},
{ image: 'cat4.jpg', beforeCategory: '猫', afterCategory: '狗'},
{ image: 'cat5.jpg', beforeCategory: '鸡', afterCategory: '猪'},
{ image: 'cat6.jpg', beforeCategory: '猫',  afterCategory: '狗'},
{ image: 'cat7.jpg', beforeCategory: '猫', afterCategory: '狗'},
{ image: 'cat8.jpg', beforeCategory: '鸡', afterCategory: '猴'},
{ image: 'cat9.jpg', beforeCategory: '猫', afterCategory: '狗'},
{ image: 'cat10.jpg', beforeCategory: '猫', afterCategory: '狗'},
{ image: 'cat11.jpg', beforeCategory: '猫', afterCategory: '蛇'}
]);

const value = ref([])

const handleChange = (value) => {
  console.log(value)
}

const options = [
  {
    value: 'animal',
    label: '动物',
    children: [
      {
        value: 'cat',
        label: '猫🐱',
      },
      {
        value: 'dog',
        label: '狗🐕',
      },
      {
        value: 'chicken',
        label: '鸡🐓',
      },
      {
        value: 'pig',
        label: '猪🐖',
      },
    ],
  },
  {
    value: 'vehicle',
    label: '车辆',
    children: [
      {
        value: 'bike',
        label: '自行车',
      },
      {
        value: 'moto',
        label: '摩托车',
      },
      {
        value: 'car',
        label: '轿车',
      },
      {
        value: 'bus',
        label: '公交车',
      },
    ],
  },
]
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
  margin-left: 50px;
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
.select_title {
  margin-top: 10px; /* 可选：设置顶部边距 */
  margin-bottom: 15px;
  text-align: center;
  font-size: 30px; /* 设置字体大小 */
}
.select{
  margin-top: 40px; /* 可选：设置顶部边距 */
  margin-bottom: 40px;
  margin-left: 35px;
}
</style>