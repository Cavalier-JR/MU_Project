<template>
  <el-container>
    <el-header class="my_el-header"> 类别遗忘 </el-header>
    <el-main>
      <el-row justify="center">
        <el-col :span="13">
          <el-card style="max-width: 640px">
            <div class="card-content">
              <p> 您在当前界面可以上传不同类别的图片让我遗忘哦！ </p>
              <br>
              <br>
              <p> 想知道怎么操作？可以看下面哦~</p>
            </div> 
            <div class="card-content">
              <el-card style="max-width: 300px;display: inline-block;margin-top:30px;margin-bottom:15px;margin-left:30px;" shadow="always">
                <el-icon style="color: green"><SetUp /></el-icon>
                首先选择某个类别的图片
              </el-card>
              <el-card style="max-width: 300px;display: inline-block;margin-top:30px;margin-bottom:15px;margin-left:50px;" shadow="always">
                <el-icon style="color: blue"><Promotion /></el-icon>
                选择遗忘方法并进行遗忘
              </el-card>
            </div>
          </el-card>
          <br>
          <br>
          <div class="select"> 
            <el-cascader class="select_area" v-model="value1" :options="options1" @change="handleChange" 
            style="width: 190px" clearable :show-all-levels="false" placeholder="请选择需要遗忘的类别" collapse-tags/>
            <el-button :dark="isDark" color="#626aef" size="large" @click="ClassSelected" class="button"> 选择 </el-button>
          </div> 
          <div class="select"> 
            <el-select class="select_area" v-model="value2" placeholder="请选择你的遗忘方法" style="width: 190px" v-show="isMethodVisible">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              />
            </el-select>
            <el-button :dark="isDark" color="#626aef" @click="Forget_Button_Click" size="large" v-show="isMethodVisible" 
            :loading="loading_flag" class="button"> 
              遗忘 
            </el-button>
          </div> 
          <div> 
            <el-result
              icon="success"
              title="已成功遗忘！"
              sub-title="本次遗忘操作用时为3.4min"
              v-show="isRightPanelVisible"
            >
            </el-result>
          </div> 
        </el-col>

        <el-col :span="1"></el-col>

        <el-col :span="9" v-show="isRightPanelVisible">
          <el-table :data="tableData" style="width: 100%" border  height="400" stripe>
            <el-table-column  height="250" prop="image" label="图像" width="100" header-align="center" align="center"></el-table-column>
            <el-table-column prop="beforeCategory" label="遗忘前分类结果" width="140" header-align="center" align="center"></el-table-column>
            <el-table-column prop="afterCategory" label="遗忘后分类结果" width="140" header-align="center" align="center" show-overflow-tooltip></el-table-column>
          </el-table>
        </el-col>  
        
        <el-col :span="2"></el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElMessageBox, ElNotification, ElMessage } from "element-plus"

const isRightPanelVisible = ref(false); // 初始状态为false，即不显示
const isMethodVisible = ref(false); // 初始状态为false，即不显示
const loading_flag = ref(false);
const isCardVisible = ref(true);
const handleChange1 = (val: string[]) => {
  console.log(val)
}

interface User {
  image: string
  beforeCategory: string
  afterCategory: string
}

function Forget_Button_Click() {
  ElMessageBox.confirm("本操作为实现模型遗忘从该图片中学习到的信息", "提示", {
  confirmButtonText: "我已知晓",
  cancelButtonText: "取消",
  type: "info",
})
  .then(() => {
    console.log("用户已知晓图片遗忘的功能");
    loading_flag.value = true;
    let timer: number | null = setTimeout(() => {
      isCardVisible.value = false;
      isRightPanelVisible.value = true;
      loading_flag.value = false;
      Success_Notify();
    }, 5000)
  })
  .catch(() => {
    //取消：就不做任何提示了
  });
};

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User
  rowIndex: number
}) => {
  if (rowIndex === 0 || rowIndex === 2 || rowIndex === 4 || rowIndex === 6 
  || rowIndex === 8 || rowIndex === 10 || rowIndex === 12 || rowIndex === 14) {
    return 'row1'
  } else {
    return 'row2'
  }
  return ''
}

const Success_Notify = () => {
  ElMessage({
    showClose: true,
    message: '已成功遗忘该类别',
    type: 'success',
  });
};

const tableData: User[] = [
  { image: 'cat1.jpg', beforeCategory: '猫', afterCategory: '狗'},
  { image: 'cat2.jpg', beforeCategory: '猫', afterCategory: '狗'},
  { image: 'cat3.jpg', beforeCategory: '猫', afterCategory: '羊'},
  { image: 'cat4.jpg', beforeCategory: '猫', afterCategory: '驴'},
  { image: 'cat5.jpg', beforeCategory: '猫', afterCategory: '猪'},
  { image: 'cat6.jpg', beforeCategory: '猫',  afterCategory: '狗'},
  { image: 'cat7.jpg', beforeCategory: '猫', afterCategory: '牛'},
  { image: 'cat8.jpg', beforeCategory: '猫', afterCategory: '猴'},
  { image: 'cat9.jpg', beforeCategory: '狗', afterCategory: '驴'},
  { image: 'dog1.jpg', beforeCategory: '狗', afterCategory: '猫'},
  { image: 'dog2.jpg', beforeCategory: '狗', afterCategory: '蛇'},
  { image: 'dog3.jpg', beforeCategory: '狗', afterCategory: '猴'},
  { image: 'dog4.jpg', beforeCategory: '狗', afterCategory: '猫'},
  { image: 'dog5.jpg', beforeCategory: '狗', afterCategory: '马'},
  { image: 'dog6.jpg', beforeCategory: '狗', afterCategory: '骆驼'},
];

const value1 = ref([])
const value2 = ref([])

const handleChange = (value1) => {
  console.log(value1)
}

const ClassSelected = () => {
  isMethodVisible.value = true
}

const options1 = [
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
const options2 = [
  {
    value: 'ConMU',
    label: 'ConMU（推荐）',
  },
  {
    value: 'GA',
    label: 'GA',
  },
  {
    value: 'FT',
    label: 'FT',
  },
  {
    value: 'RL',
    label: 'RL',
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


.custom-button {
  margin:6px
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
.card1_title {
  margin-top: 10px; /* 可选：设置顶部边距 */
  margin-bottom: 15px;
  text-align: left;
  font-size: 25px; /* 设置字体大小 */
}
.select_area {
  display: inline-block;
}
.select{
  margin-top: 20px; /* 可选：设置顶部边距 */
  margin-left: 120px;
}
.card-header .el-icon {
  vertical-align: middle;
}
.card-header span {
  vertical-align: middle;
  margin-left: 4px;
  font-size: 16px;
}
.card-content {
  font-size: 14px;
}
.card-body {
  max-height: 200px;
  min-width: 500px;
}
.my_el-header {
  background-color: #f2f2f3;
  color: black;
  padding: 10px;
  font-size: 30px;
  font-family:'社会体';
  justify-content: center;
  text-align: center;
}
.el-table .row1 {
  --el-table-tr-bg-color: #b9f4ee;
}
.el-table .row2 {
  --el-table-tr-bg-color: #ebe0d6;
}
</style>