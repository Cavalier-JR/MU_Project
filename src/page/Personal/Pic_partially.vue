<template>
  <el-container>
  <el-header class="my_el-header"> 图像任意遗忘 </el-header>
  <el-main>
  <el-row :gutter="10" justify="center">
    <el-col :span="8">
      <div>
        <el-upload
          align="center"
          accept=".txt, .txts, .pdf, .docx,.xlsx, .xls, .jpg, .jpeg, .png"
          :limit="6"
          multiple
        >
          <div>
            <el-button @click="loadSuccess" class="upload-button">点击上传需要遗忘的图片</el-button>
          </div>
          
          <!-- <div slot="tip" style="text-align:center;">
            上传附件,大小不超过4M。
          </div> -->
        </el-upload>
      </div>
      <br/>
      <div style="width: 100%;">
        <p class="my_tag">
          <el-icon><Notification /></el-icon> 
          <span class="notice_text"> 注意：请从本地上传 </span>
        </p>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="lightline"></div>
      <el-card class="box-card">
        <div style="text-align:center;">
          <p class="Test_Label"> 您上传想要遗忘的图片数 </p>
            <div v-show="isForget">
              <p class="Test_Label"> <el-icon style="color: green;margin-top:10px;margin-right:10px;
                font-size: 30px;"> <Picture /> </el-icon> {{completed}} </p>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <div class="lightline"></div>
      <el-card class="box-card">
			  <div style="text-align:center;">
          <p class="Test_Label"> 您已完成遗忘图片个数 </p>
          <div v-show="isForget">
              <p class="Test_Label"> <el-icon style="color: green;margin-top:15px;margin-right:10px;
              font-size: 30px;"> <Check /> </el-icon> {{completed}} </p>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-row justify="center">
    <el-col :span="8">
      <br v-show="isLoad">
      <div v-show="isLoad">
        <img style="width: 100%;height: 60%;margin: auto;"
        src="../../assets/load_file.png" alt="" />
      </div>
      <br>
      <br>
      <div style="width: 100%;" v-if="isLoad"> 
        <p style="margin: 0 auto; width: 25%;">
          <!-- <el-select v-model="value" placeholder="请选择你的遗忘方法" style="width: 180px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            />
          </el-select> -->
          <el-button  @click="Forget_Button_Click" :loading="loading_flag" class="custom-button"> 
            遗忘 
          </el-button>
        </p>
      </div> 
      <div style="margin-bottom:450px;" v-show="tianchong"></div>
      <br v-show="isProgressVisible">
      <br v-show="isProgressVisible">
      <div style="width: 100%;" v-show="isProgressVisible">
        <p class="demo-progress">
          <el-progress
            :percentage="100"      
            :status="true"
            :indeterminate="true"
            :duration="5"
          > 
            <span> 正在遗忘中... </span>
          </el-progress>
        </p>
      </div>
      <div style="width: 100%;"> 
        <p style="margin: 0 auto;width: 30%;">
          <el-tag type="success" class="text-bottom" v-show="isCosttimeVisible" round> 用时：37.2 s </el-tag>
        </p>
      </div>
    </el-col>
    <el-col :span="16">
      <div style="margin:auto auto;width: 100%;height: 22%;"> </div>
      <div style="width: 100%;height: 65%;"> 
        <p style="width: 50%;height: 100%;margin: auto auto;">
          <div v-show="isForget" id="pieChart" ref="pieChart" style="width: 500px; height: 400px"></div>
        </p>
      </div>
      
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
const pieChart = ref(null);
const tianchong = ref(true);
const completed = ref(0)

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
        isForget.value = true;
        completed.value = 345;
        Success_Notify();
      }, 8000)
    })
    .catch(() => {
      //取消：就不做任何提示了
    });
  }
}

const Success_Notify = () => {
  ElMessage({
    showClose: true,
    message: '已成功遗忘所上传的图像',
    type: 'success',
    offset: 650,
  });
};

const loadSuccess = () => {
  console.log("用户已点击按钮");
  let timer: number | null = setTimeout(() => {
    console.log("用户已上传图片");
    isLoad.value = true;
    ElMessage({
      showClose: true,
      message: '已成功上传图片',
      type: 'success',
      offset: 250,
    });
    tianchong.value = false;
  }, 8000)
}

const value = ref([])
const isCosttimeVisible = ref(false);
const isProgressVisible = ref(false);
const isLoad = ref(false);
const isForget = ref(false);

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
            { value: 218, name: '动物' },
            { value: 35, name: '车辆' },
            { value: 13, name: '水果' },
            { value: 42, name: '植物' },
            { value: 39, name: '蔬菜' }
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
// const options = [
// {
//     value: 'MU',
//     label: 'MU（推荐，准确率最高，模型效最好且用时短）',
//   },
//   {
//     value: 'GA',
//     label: 'GA（准确率较高，但是用时较长）',
//   },
//   {
//     value: 'FT',
//     label: 'FT（准确率较好但用时最长）',
//   },
//   {
//     value: 'RL',
//     label: 'RL（准确率最差但用时最短）',
//   },
// ]
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
  }
  .function_select{
    text-align: center;
    font-size: 20px; /* 设置字体大小 */
    margin-bottom: 15px; /* 可选：设置底部边距 */
  }
  .demo-progress {
    width: 380px;
    margin: 0 auto;
  }
  .text-bottom {
    margin-top: 20px; /* 可选：设置顶部边距 */
    text-align: center;
    font-size: 20px; /* 设置字体大小 */
    height: 40px;
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
  }
  .my_tag{
    font-size: 1.3rem;
    width: 32%;
    margin: 0 auto;
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
  .Test_Label{
    font-size: 20px;
    color:rgb(24, 30, 86);
  }
  .lightline {
    margin-left: 100px;
    width: 200px;
    height: 2px;
    background-image: linear-gradient(90deg, transparent, #94dde0, transparent);
  }
  .upload-button {
    height: 40px;
    font-size: 20px !important;
    background-color: #54d8f0c5 !important;
    border-radius: 10px !important;
    box-shadow: 5px 5px #EEE9E8 !important;
    border: none !important;
    cursor: pointer !important;
    outline: none !important;
    color: rgba(247, 243, 243, 0.921) !important; 
    font-weight: bold;  /* 这一行实现字体加粗 */
  }
  .custom-button {
    margin-left: 15px;
    font-size: 20px!important;
    background-color: #54d8f0c5!important;
    border-radius: 10px!important;
    box-shadow: 5px 5px #EEE9E8!important;
    border: none!important;
    cursor: pointer!important;
    outline: none!important;
    color: rgba(247, 243, 243, 0.921)!important;
    font-weight: bold;  /* 这一行实现字体加粗 */
  }
  .notice_text {
    font-size: 14px;
  }
</style>