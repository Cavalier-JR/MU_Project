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
              title="本次遗忘操作用时为 412 s"
              v-show="isRightPanelVisible"
            >
            </el-result>
          </div> 
          <br>
          <div class="pic_tag" v-show="isPicVisible">
            <span>
              <el-icon style="margin-left: 20px;font-size: 17px"><PictureFilled /></el-icon>
                <span style="font-size: 15px;margin-left: 5px;"> 类别数据集展示 </span>
            </span>
          </div>
          <div class="image_box" v-show="isPicVisible">
            <div class="item"> <img src="../../assets/pic/image_0.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_1.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_2.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_3.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_4.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_5.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_6.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_7.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_8.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_9.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_10.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_11.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_12.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_13.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_14.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_15.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_16.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_17.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_18.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_19.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_20.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_21.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_22.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_23.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_24.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_25.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_26.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_27.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_28.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_29.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_30.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_31.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_32.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_33.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_34.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_35.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_36.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_37.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_38.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_39.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_40.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_41.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_42.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_43.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_44.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_45.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_46.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_47.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_48.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_49.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_50.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_51.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_52.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_53.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_54.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_55.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_56.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_57.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_58.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_59.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_60.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_61.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_62.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_63.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_64.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_65.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_66.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_67.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_68.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_69.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_70.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_71.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_72.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_73.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_74.png" alt="示例图片" /> </div>
          </div>
        </el-col>

        <el-col :span="1" v-show="isRightPanelVisible"></el-col>

        <el-col :span="9" v-show="isRightPanelVisible">
          <el-table :data="tableData" style="width: 100%" border height="480" stripe>
            <el-table-column prop="pic" label="图像" align="center" width="100" height="250" header-align="center">
              <template #default="scope">
                <el-image :src="scope.row.pic" style="width: 40px;height: 40px" 
                :preview-src-list="[scope.row.pic]" :preview-teleported="true"> </el-image>
              </template>
            </el-table-column>
            <el-table-column prop="beforeCategory" label="遗忘前分类结果" width="140" header-align="center" align="center"></el-table-column>
            <el-table-column prop="afterCategory" label="遗忘后分类结果" width="140" header-align="center" align="center" show-overflow-tooltip></el-table-column>
          </el-table>
        </el-col>  
        
        <el-col :span="2" v-show="isRightPanelVisible"></el-col>

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
const isPicVisible = ref(true);

const handleChange1 = (val: string[]) => {
  console.log(val)
}

interface User {
  pic: string
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
      isPicVisible.value = false;
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
    offset: 390,
  });
};

const tableData: User[] = [
  { pic: 'http://picture.gptkong.com/20240519/21190ec99c92e6452bbc8b0ab8fd15b833.png', beforeCategory: '狗', afterCategory: '猫'},
  { pic: 'http://picture.gptkong.com/20240519/15595e6b339c944b2a9467f00e4382ba3e.png', beforeCategory: '狗', afterCategory: '猪'},
  { pic: 'http://picture.gptkong.com/20240519/1600136bb87d6943ac8257e9b82a8a684f.png', beforeCategory: '狗', afterCategory: '羊'},
  { pic: 'http://picture.gptkong.com/20240519/16002101bd462e4ef986d79bdcb1ca0dc4.png', beforeCategory: '狗', afterCategory: '驴'},
  { pic: 'http://picture.gptkong.com/20240519/1600bc7ed87ce544989997cbda8792dd38.png', beforeCategory: '狗', afterCategory: '猪'},
  { pic: 'http://picture.gptkong.com/20240519/16005d72a59498441e90b6dd9ba15986c4.png', beforeCategory: '狗',  afterCategory: '猫'},
  { pic: 'http://picture.gptkong.com/20240519/160172d1b1dded40e487a598b8522760a2.png', beforeCategory: '狗', afterCategory: '牛'},
  { pic: 'http://picture.gptkong.com/20240519/1601e32db07851446292f261d16389a602.png', beforeCategory: '狗', afterCategory: '猴'},
  { pic: 'http://picture.gptkong.com/20240519/1601625292168548dbbf6ec74573794fe1.png', beforeCategory: '狗', afterCategory: '驴'},
  { pic: 'http://picture.gptkong.com/20240519/160104ad6b69d948b7bdc320cf1cf1f128.png', beforeCategory: '狗', afterCategory: '猫'},
  { pic: 'http://picture.gptkong.com/20240519/160100f6584997414d8eaef667717d329b.png', beforeCategory: '狗', afterCategory: '蛇'},
  { pic: 'http://picture.gptkong.com/20240519/1602ff0bec5f99452faf84eb9ce6e6ffe9.png', beforeCategory: '狗', afterCategory: '猴'},
  { pic: 'http://picture.gptkong.com/20240519/160291f94037d64fa0a5d5ee3f459b9541.png', beforeCategory: '狗', afterCategory: '蛇'},
  { pic: 'http://picture.gptkong.com/20240519/16023794c760ee4cf088e1b6f4855c5331.png', beforeCategory: '狗', afterCategory: '马'},
  { pic: 'http://picture.gptkong.com/20240519/1602fc5eb5f4e446b18cd42b3f04ad325d.png', beforeCategory: '狗', afterCategory: '骆驼'},
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
  {
    value: 'people',
    label: '人',
    children: [
      {
        value: 'man',
        label: '男人',
      },
      {
        value: 'woman',
        label: '女人',
      },
      {
        value: 'boy',
        label: '男孩',
      },
      {
        value: 'girl',
        label: '女孩',
      },
    ],
  },
  {
    value: 'flower',
    label: '花朵',
    children: [
      {
        value: 'meigui',
        label: '玫瑰',
      },
      {
        value: 'xiangrikui',
        label: '向日葵',
      },
      {
        value: 'yujinxiang',
        label: '郁金香',
      },
      {
        value: 'yingsuhua',
        label: '罂粟花',
      },
    ],
  },
  {
    value: 'tree',
    label: '树',
    children: [
      {
        value: 'fengshu',
        label: '枫树',
      },
      {
        value: 'xiangshu',
        label: '橡树',
      },
      {
        value: 'zonglvshu',
        label: '棕榈树',
      },
      {
        value: 'liushu',
        label: '柳树',
      },
    ],
  },
  {
    value: 'food_container',
    label: '食品容器',
    children: [
      {
        value: 'wan',
        label: '碗',
      },
      {
        value: 'guan',
        label: '罐',
      },
      {
        value: 'beizi',
        label: '杯子',
      },
      {
        value: 'panzi',
        label: '盘子',
      },
    ],
  },
  {
    value: 'number',
    label: '号码',
    children: [
      {
        value: 'one',
        label: '1',
      },
      {
        value: 'two',
        label: '2',
      },
      {
        value: 'three',
        label: '3',
      },
      {
        value: 'four',
        label: '4',
      },
      {
        value: 'five',
        label: '5',
      },
      {
        value: 'six',
        label: '6',
      },
      {
        value: 'seven',
        label: '7',
      },
      {
        value: 'eight',
        label: '8',
      },
      {
        value: 'nine',
        label: '9',
      },
      {
        value: 'zero',
        label: '0',
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
.image_box {
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  height: 200px;
  width: 100%;
  margin-left: 13px; /* 第一个项目左侧需要间隔 */
}
.item {
  margin-right: 4px; /*设置每个项目右侧的间隔 */
  margin-bottom: 4px; /* 设置每个项目下侧的间隔 */
}
.item:last-child {
  margin-right: 0; /* 最后一个项目不需要右侧间隔 */
  margin-bottom: 0; /* 最后一行项目不需要下侧间隔 */
}
.pic_tag {
  margin-bottom: 15px;
}
</style>