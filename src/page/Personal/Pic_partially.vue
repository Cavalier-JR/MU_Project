<template>
  <el-container>
  <el-header>
    <h1>上传图片遗忘</h1>
  </el-header>
  <el-main>
  <el-row :gutter="30">
    <el-col :span="7">
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
      <div class="image-container">
        <img src="../../assets/cat.png" alt="示例图片" />
      </div>
      <br>
      <br>
      <div class="function_select">
        <div class="select_body"> 
          <el-select v-model="value" placeholder="请选择你的遗忘方法" style="width: 240px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            />
          </el-select>
        </div> 
      </div>
      <div class="button">
          <el-button :dark="isDark" color="#626aef" @click="Forget_Button_Click" size="large">进行遗忘</el-button>
      </div>
      <p class="text-bottom"> 用时：1.2s </p>
    </el-col>

    <el-col :span="17">
      <el-row :span="6">
        <el-col :span="12">
          <el-card class="box-card">
            <div style="font-size: 20px;text-align:center;">
              <p>检测到与您有关的图片数</p>
              <el-icon style="color: red;margin-top:20px;margin-right:10px;"><Picture /></el-icon>145
            </div>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card class="box-card">
            <div style="font-size: 20px;text-align:center;">
              <p>已遗忘与您有关的图片数</p>
              <el-icon style="color: green;margin-top:20px;margin-right:10px;"> <Check /> </el-icon>145
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row :span="18">
        <el-card>
          <div id="pieChart" ref="pieChart" style="width: 700px; height: 700px"></div>
        </el-card>
      </el-row>
      
    </el-col>

    <!-- <el-col :span="8"> -->
      <!-- <el-card class="box-card">
        <div style="font-size: 20px;text-align:center;">
          <p>检测到与您有关的图片数</p>
          <el-icon style="color: red;margin-top:20px;margin-right:10px;"><Picture /></el-icon>145
        </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="box-card">
			  <div style="font-size: 20px;text-align:center;">
          <p>已遗忘与您有关的图片数</p>
          <el-icon style="color: green;margin-top:20px;margin-right:10px;"> <Check /> </el-icon>145
        </div>
      </el-card> -->

    <!-- </el-col> -->
  </el-row>
  </el-main>
</el-container>
  
</template>



<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';
import { ElMessageBox } from "element-plus"

const radio = ref(0) //默认不选按钮
const pieChart = ref(null);

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
}

const value = ref([])

const handleChange = (value) => {
  console.log(value)
}

onMounted(() => {
  if (pieChart.value) {
    const myChart = echarts.init(pieChart.value);
    const option = {
      title: {
        text: '这是标题',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
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
  .image-container {
    width: 290px;
    height: 290px;
    display: flex;
    justify-content: center;
  }
  .load_button{
    margin-top: 0px; /* 可选：设置顶部边距 */
    margin-bottom: 15px;
  }
  .box-card {
    width: 90%;
    height: 80%;
  }
</style>