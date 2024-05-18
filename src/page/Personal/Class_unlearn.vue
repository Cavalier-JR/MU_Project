<!--  类别遗忘 -->

<template>
  <el-container>
    <el-header class="my_el-header"> 类别遗忘 </el-header>
    <el-main>
      <el-row justify="center">
        <el-col :span="14">
          <el-card style="max-width: 710px">
            <div class="card-content">
              <p> 作为你的隐私保护伙伴，您可以上传不同类别的图片让我遗忘哦！ </p>
              <br>
              <p> 想知道我们能干什么？可以看下面哦~</p>
            </div> 
            <div class="card-content">
              <el-card style="max-width: 300px;display: inline-block;margin-top:15px;" shadow="always">
                <el-icon style="color: green"><SetUp /></el-icon>
                首先选择某个类别的图片
              </el-card>
              <el-card style="max-width: 300px;display: inline-block;margin-left:120px;" shadow="always">
                <el-icon style="color: blue"><Promotion /></el-icon>
                选择遗忘方法并进行遗忘
              </el-card>
            </div>
          </el-card>
          <br>
          <div class="demo-collapse">
            <el-collapse v-model="activeNames" @change="handleChange1" v-show="isCardVisible">
              <el-collapse-item title="遗忘前安全说明" name="1">
                <div>
                  您可以通过申请“遗忘”来移除本系统中存储的您的图像数据。一旦您的图像数据被成功移除，系统将不再保留与您相关的任何特征和内容。
                  在未来的任何生成、恢复或处理过程中，本系统都不会涉及或引用您的图像数据，这意味着，您的个人信息将完全从系统的记忆中被删除，
                  确保您的隐私得到彻底保护。我们致力于维护您的数据安全和隐私，任何时候您都可以联系我们以启动这一遗忘程序，
                  从而享受更加安全和私密的服务体验。
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
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
              进行遗忘 
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
       
        <el-col :span="1"> </el-col>

        <el-col :span="9" v-show="isRightPanelVisible">
          <el-table :data="tableData" style="width: 100%" border stripe>
            <el-table-column label="图像" prop="image" width="100" header-align="center" align="center"></el-table-column>
            <el-table-column prop="beforeCategory" label="遗忘前分类结果" width="140" header-align="center" align="center"></el-table-column>
            <el-table-column prop="afterCategory" label="遗忘后分类结果" width="140" header-align="center" align="center" show-overflow-tooltip></el-table-column>
          </el-table>
        </el-col>     
      </el-row>

    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { ElMessageBox, ElNotification } from "element-plus"

const isRightPanelVisible = ref(false); // 初始状态为false，即不显示
const isMethodVisible = ref(false); // 初始状态为false，即不显示
const loading_flag = ref(false);
const isCardVisible = ref(true);
const activeNames = ref()
const handleChange1 = (val: string[]) => {
  console.log(val)
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

const Success_Notify = () => {
  ElNotification({
    title: '成功',
    message: '已成功遗忘该类别',
    type: 'success',
    duration: 5000, // 自动关闭延时
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
</style>