<template>
  <el-container>
  <el-header class="my_el-header"> 部分遗忘 </el-header>
  <el-main>
  <el-row :gutter="10" >
    <el-col :span="8" >
      <div>
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
          <div class="load_button">
            <el-button size="large" type="primary">点击上传需要遗忘的图片</el-button>
          </div>
          
          <div slot="tip" style="text-align:center;">
            <!-- 上传附件,大小不超过4M。 -->
          </div>
        </el-upload>
      </div>
      <div>
        <span class="tag">
          <el-icon><Notification /></el-icon> 
          <span> 注意：请从本地上传 </span>
        </span>
      </div>
    </el-col>
    <el-col :span="8">
      <el-card class="box-card">
        <div style="font-size: 20px;text-align:center;">
          <p> 您上传想要遗忘的图片数 </p>
          <el-icon style="color: gray;margin-top:20px;margin-right:10px;"><Picture /></el-icon>345
        </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="box-card">
			  <div style="font-size: 20px;text-align:center;">
          <p> 您已完成遗忘图片个数 </p>
          <el-icon style="color: green;margin-top:20px;margin-right:10px;"> <Check /> </el-icon> {{completed}}
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-row justify="center">
    <el-col :span="8">
      <div>
        <el-collapse v-model="activeNames" @change="handleChange2">
          <el-collapse-item title="文件夹" name="1">
            <div>
              animal_fold
            </div>
            <div>
              vehicle_fold
            </div>
            <div>
              pic_fold
            </div>
          </el-collapse-item>
          <el-collapse-item title="单个图片" name="2">
            <div>
              cat1.png
            </div>
            <div>
              my_dog.jpg
            </div>
            <div>
              cat2.jpg
            </div>
            <div>
              bike.png
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <br>
      <br>
      <div> 
        <el-select class="select_area" v-model="value" placeholder="请选择你的遗忘方法" style="width: 170px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          />
        </el-select>
        <el-button :dark="isDark" color="#626aef" @click="Forget_Button_Click" size="large" 
        :loading="loading_flag" class="my_button"> 
          遗忘 
        </el-button>
      </div> 
      <br v-show="isProgressVisible">
      <br v-show="isProgressVisible">
      <div class="demo-progress" v-show="isProgressVisible">
        <el-progress
          :percentage="100"      
          :status="success_flag"
          :indeterminate="indeterminate_flag"
          :duration="5"
        > 
          <span> 正在遗忘中... </span>
        </el-progress>
      </div>
      <el-tag type="success" class="text-bottom" effect="dark" v-show="isCosttimeVisible"> 用时：1.2s </el-tag>
    </el-col>
    <el-col :span="16">
      <div id="pieChart" ref="pieChart" style="margin-top: 50px; margin-left: 200px; width: 500px; height: 500px"></div>
    </el-col>
  </el-row>
  </el-main>
</el-container>
  
</template>



<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';
import { ElMessageBox, ElMessage } from "element-plus"

const loading_flag = ref(false);
const radio = ref(0) //默认不选按钮
const pieChart = ref(null);
const activeNames = ref(['1', '2'])
const indeterminate_flag = ref(true)
const completed = ref(198)

const handleChange2 = (val: string[]) => {
  console.log(val)
}

function Forget_Button_Click() {
  if(value.value) {
    ElMessageBox.confirm("本操作为实现模型遗忘从该图片中学习到的信息", "提示", {
      confirmButtonText: "我已知晓",
      cancelButtonText: "取消",
      type: "info",
    })
    .then(() => {
      loading_flag.value = true;
      isProgressVisible.value = true;
      let timer: number | null = setTimeout(() => {
        console.log("用户已知晓图片遗忘的功能");
        isCosttimeVisible.value = true;
        isProgressVisible.value = false;
        loading_flag.value = false;
        completed.value = 345;
        Success_Notify();
      }, 5000)
    })
    .catch(() => {
      //取消：就不做任何提示了
    });
  }
}

const Success_Notify = () => {
  ElMessage({
    showClose: true,
    message: '已成功遗忘该类别',
    type: 'success',
    offset: 550,
  });
};

const value = ref([])
const isCosttimeVisible = ref(false);
const isProgressVisible = ref(false);

const handleChange = (value) => {
  console.log(value)
}

onMounted(() => {
  if (pieChart.value) {
    const myChart = echarts.init(pieChart.value);
    const option = {
      title: {
        text: '上传图片中各类别占比',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: '10%'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '40%',
          data: [
            { value: 1048, name: '动物' },
            { value: 735, name: '车辆' },
            { value: 580, name: '水果' },
            { value: 484, name: '植物' },
            { value: 300, name: '蔬菜' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    myChart.setOption(option);
  }
 
})
const options = [
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
  .my_button {
    text-align: center;
    margin-left: 30px;
  }
  .demo-progress {
    margin-top: 100px; /* 可选：设置顶部边距 */
    margin-bottom: 15px;
    max-width: 600px;
    margin: auto;
  }
  .text-bottom {
    margin-top: 20px; /* 可选：设置顶部边距 */
    margin-left: 135px;
    text-align: center;
    font-size: 20px; /* 设置字体大小 */
  }
  .image-container {
    width: 290px;
    height: 290px;
    display: flex;
    justify-content: center;
  }
  .load_button{
    margin-top: 0px; /* 可选：设置顶部边距 */
    margin-bottom: 10px;
  }
  .box-card {
    max-height: 100px;
    max-width: 300px;
    background-color:#b9f4ee;
  }
  .tag{
    font-size: 1.3rem;
    margin-left: 128px;
  }
  .select_area {
    display: inline-block;
    margin-left: 50px;
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