<template>
  <el-container>
    <el-header class="my_el-header"> 图像类别遗忘 </el-header>
    <el-main>
      <el-row justify="center">
        <el-col :span="13" justify="center">
          <div style="width: 100%;"> 
            <p style="margin: auto;width: 80%;">
              <el-card style="max-width: 660px">
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
                  <el-card style="max-width: 300px;display: inline-block;margin-top:30px;margin-bottom:15px;margin-left:60px;" shadow="always">
                    <el-icon style="color: blue"><Promotion /></el-icon>
                    选择遗忘方法并进行遗忘
                  </el-card>
                </div>
              </el-card>
            </p>
          </div>
          <br>
          <br>
          <div style="width: 100%;height: 60px;"> 
            <p style="margin: auto;width: 45%;">
              <el-cascader class="select_area" v-model="value1" :options="options1" @change="handleChange" 
              style="width: 190px" clearable :show-all-levels="false" 
              placeholder="请选择需要遗忘的类别" collapse-tags/>
              <el-button  @click="ClassSelected" :loading="loading_flag" class="custom-button">
                遗忘 
              </el-button>
            </p>
          </div> 
          <div style="width: 100%;"> 
            <p style="width: 50%;height:80%;margin: 0 auto;">
              <el-result
                icon="success"
                title="本次遗忘操作用时为 412 s"
                v-show="isColVisible"
              >
              </el-result>
            </p>
          </div> 
          <br v-show="isColVisible">
          <br v-show="isColVisible">
          <br v-show="isColVisible">
          <br v-show="isColVisible">
          <br v-show="isColVisible">
          <div style="width: 100%;" v-show="isPicVisible">
            <p style="margin:auto auto;width: 20%;height: 30px;">
              <el-icon style="font-size: 17px"><PictureFilled /></el-icon>
                <span class="classDisplay"> 类别数据集展示 </span>
            </p>
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
            <div class="item"> <img src="../../assets/pic/image_75.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_76.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_77.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_78.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_79.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_80.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_81.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_82.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_83.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_84.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_85.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_86.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_87.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_88.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_89.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_90.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_91.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_92.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_93.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_94.png" alt="示例图片" /> </div>
            <div class="item"> <img src="../../assets/pic/image_95.png" alt="示例图片" /> </div>
          </div>
        </el-col>

        <el-col :span="1" v-show="isRightPanelVisible"></el-col>

        <el-col :span="9" v-show="isRightPanelVisible">
          <el-table :data="tableData" style="width: 100%" height="480" border stripe>
            <el-table-column prop="pic" label="图像" align="center" height="250" header-align="center" show-overflow-tooltip>
              <template #default="scope">
                <el-image :src="scope.row.pic" style="width: 40px;height: 40px" 
                :preview-src-list="[scope.row.pic]" :preview-teleported="true"> </el-image>
              </template>
            </el-table-column>
            <el-table-column prop="beforeCategory" label="遗忘前分类结果" width="160" header-align="center" align="center"></el-table-column>
            <el-table-column prop="afterCategory" label="遗忘后分类结果" width="160" header-align="center" align="center" 
            show-overflow-tooltip>
              <template #default="scope">
                <div v-show="isColVisible">{{ scope.row.afterCategory }}</div>
              </template>
            </el-table-column>
          </el-table>
        </el-col>  
        
        <el-col :span="2" v-show="isRightPanelVisible"></el-col>

      </el-row>
      <el-row v-show="isbrshow">
        <el-col span="13">
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';
import { ElMessageBox, ElNotification, ElMessage } from "element-plus"

const isRightPanelVisible = ref(false); // 初始状态为false，即不显示
const isRightColVisible = ref(false); // 初始状态为false，即不显示
const loading_flag = ref(false);
const isCardVisible = ref(true);
const isPicVisible = ref(true);
const isColVisible = ref(false);
const isbrshow = ref(true);

const handleChange1 = (val: string[]) => {
  console.log(val)
}

interface User {
  pic: string
  beforeCategory: string
  afterCategory: string
}

const value1 = ref([])

function ClassSelected() {
  if(value1.value[1]) {
    console.log(value1.value[1])
    ElMessageBox.confirm("本操作为实现模型遗忘从该类图像中学习到的信息", "提示", {
      confirmButtonText: "我已知晓",
      cancelButtonText: "取消",
      type: "info",
    })
    .then(() => {
      isRightColVisible.value = true;
      console.log("用户已知晓图片遗忘的功能");
      isPicVisible.value = false;
      loading_flag.value = true;
      isRightPanelVisible.value = true;
      let timer: number | null = setTimeout(() => {
        isCardVisible.value = false;
        isColVisible.value = true;
        loading_flag.value = false;
        Success_Notify();
        isbrshow.value = false;
      }, 5000)
    })
    .catch(() => {
      //取消：就不做任何提示了
    });
  }
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
    offset: 470,
  });
};

const categoryMapping = {
  "0": "飞机✈",
  "1": "车辆🛵",
  "2": "鸟🐦",
  "3": "猫🐱",
  "4": "鹿",
  "5": "狗🐕",
  "6": "青蛙🐸",
  "7": "马🐎",
  "8": "船🚢",
  "9": "卡车🚚"
};
const tableData = ref([]); 
axios.get('/api/class-forget/')
  .then(response => {
    tableData.value = response.data.map(item => ({
      ...item,
      beforeCategory: categoryMapping[item.beforeCategory] || item.beforeCategory,
      afterCategory: categoryMapping[item.afterCategory] || item.afterCategory
    }));
  })
  .catch(error => {
    console.error(error);
  });


const handleChange = (value1) => {
  console.log(value1)
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
    value: 'MU',
    label: 'MU（推荐，准确率最高，模型效最好且用时短）',
  },
  {
    value: 'GA',
    label: 'GA（准确率较高，但是用时较长）',
  },
  {
    value: 'FT',
    label: 'FT（准确率较好但用时最长）',
  },
  {
    value: 'RL',
    label: 'RL（准确率最差但用时最短）',
  },
]

</script>

<style>
.function_select{
  text-align: center;
  font-size: 20px; /* 设置字体大小 */
  margin-bottom: 15px; /* 可选：设置底部边距 */
}
.custom-button {
  margin-left: 15px;
  font-size: 22px !important;
  background-color: #54d8f0c5 !important;
  border-radius: 10px !important;
  font-family: '扁桃体' !important;
  box-shadow: 5px 5px #EEE9E8 !important;
  border: none !important;
  cursor: pointer !important;
  outline: none !important;
  color: rgba(247, 243, 243, 0.921) !important; 
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
/* .select_area {
  display: inline-block;
}
.select{
  margin-top: 20px; 
  margin-left: 120px;
} */
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
  height: 180px;
  width: 80.2%;
  margin: auto;
}
.item {
  margin-right: 4px; /*设置每个项目右侧的间隔 */
  margin-bottom: 4px; /* 设置每个项目下侧的间隔 */
}
.item:last-child {
  margin-right: 0; /* 最后一个项目不需要右侧间隔 */
  margin-bottom: 0; /* 最后一行项目不需要下侧间隔 */
}
/* .successNotify {
  margin-top: 15px;
} */
.custom-select .el-select-dropdown__item {
  text-align: left;
}
.custom-option {
  text-align: left;
}
.classDisplay {
  font-size: 18px;
  margin-left: 5px;
  font-family: '扁桃体'
}
</style>