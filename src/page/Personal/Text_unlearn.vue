<template>
  <div v-if="!isSubmitted" class="center-container">
    <el-container style="background-color:#fdfcff;">
      <el-header class="my_el-header">
      <div class="header-content">
        <h1 class="glowing-title">文本遗忘</h1>
        <!-- <el-tooltip class="item" effect="dark" content="这是一段对文本遗忘的介绍" placement="bottom-end">
          <el-icon class="question-icon" style="font-size:30px;color:#888888;">
            <QuestionFilled/>
          </el-icon> 
        </el-tooltip> -->
      </div>
      <div class="divider-with-text">一尘不缁，保护您的敏感信息</div>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="24">
          <el-card style="max-width: 1000px;margin-top: 40px; margin-left: 165px;">
            <div class="card-content">
              <p> 在当前界面,您可以对文本类型的隐私数据进行遗忘处理~ </p>
              <br>
              <br>
              <p> 想知道怎么操作？可以看下面哦~</p>
            </div> 
            <div class="card-content">
              <el-card style="max-width: 300px;display: inline-block;margin-top:30px;margin-bottom:15px;margin-left:25px;" shadow="always">
                <el-icon style="color: red"><Tickets /></el-icon>
                首先输入隐私信息提示词
              </el-card>
              <el-card style="max-width: 300px;display: inline-block;margin-top:30px;margin-bottom:15px;margin-left:25px;" shadow="always">
                <el-icon style="color: blue"><Promotion /></el-icon>
                再选择替换词并进行遗忘
              </el-card>
              <el-card style="max-width: 300px;display: inline-block;margin-top:30px;margin-bottom:15px;margin-left:25px;" shadow="always">
                <el-icon style="color: green"><Checked /></el-icon>
                最后可验证遗忘是否成功
              </el-card>
            </div>
          </el-card>
          <el-form :model="formData1" >
            <el-form-item 
            label="请输入隐私信息提示词"
            class= "Begin_Middle"
            >

              <el-input 
                style="width:1000px ;margin-top:20px;font-size:25px;"
                type="textarea"
                :autosize="{ minRows: 5, maxRows: 20}"
                placeholder="请输入内容"
                v-model="formData1.text"
              ></el-input>
            </el-form-item>
            <el-button 
              @click="showTheRest"
             class="begin-submit"
             style="margin-left:43%"
              >提交</el-button>
          </el-form >
        </el-col>
      </el-row>
    </el-main>
  </el-container>


  </div>

  <div v-else>
  <el-container style="background-color:#fdfcff;">
    <el-header class="my_el-header">
      <div class="header-content">
        <h1 class="glowing-title">文本遗忘</h1>
        <!-- <el-tooltip class="item" effect="dark" content="这是一段对文本遗忘的介绍" placement="bottom-end">
          <el-icon class="question-icon" style="font-size:30px;color:#888888;">
            <QuestionFilled/>
          </el-icon> 
        </el-tooltip> -->
      </div>
      <div class="divider-with-text">一尘不缁，保护您的敏感信息</div>
    </el-header>

    <el-main style="margin-top: 40px;">
      <el-row>
        <el-col :span="12">
          <el-form :model="formData1" >
            <el-form-item label="隐私信息提示词">
              <el-input
                style="font-size:15px"
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 20 }"
                placeholder="请输入提示词"
                v-model="formData1.text"
                readonly="true"
              ></el-input>
            </el-form-item>
            <div class="demo-progress1" v-show="isProgressVisible1">
              <el-progress
                :percentage="100"      
                :status="true"
                :indeterminate="true"
                :duration="5"
              > 
                <span> 正在提交给模型... </span>
              </el-progress>
            </div>
          <div v-show="!isProgressVisible1">
            <div v-if="isSubmitted">
              <div v-if="showModelOutput1">
                <el-form-item label="输入想要遗忘的敏感信息" style="margin-top:40px" v-if="showSensitiveInfoSection">
                <el-input
                  style="font-size:15px"
                  placeholder="输入敏感信息"
                  v-model="formData1.sensitiveInfo"
                  clearable
                >
                  <template #append>
                    <el-button class="sure-button" @click="showReplacementOptions">确定</el-button>
                  </template>
                </el-input>
              </el-form-item>
              
              <el-form-item label="隐私替换词" v-if="showSensitiveInfoSection && showOptions" style="margin-top: 40px;">
                <el-radio-group v-model="selectedOption" class="radio-group">
                  <el-radio :label="option" v-for="(option, index) in replacementOptions" :key="index" class="radio-item">
                    {{ option }}
                  </el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item v-if="showSensitiveInfoSection && showOptions">
                <el-button 
                  class="custom-button" 
                  @click="addTextToPanelAndNotify"
                  :loading="loading_flag" 
                >
                  进行遗忘
                </el-button>
              </el-form-item>
              <div class="demo-progress2"  v-show="isProgressVisible2">
                <el-progress
                  :percentage="100"      
                  :indeterminate="true"
                  :duration="5"
                > 
                  <span> 正在遗忘中... </span>
                </el-progress>
              </div>
              <template v-if="showTestPromptInput">
              <el-form-item style="margin-top:150px">
                <template #label>
                          <span style="color:#7986CB;">请输入测试提示词</span>
                </template>
                <el-input
                  style="font-size:15px; z-index: 9; "
                  type="textarea"
                  :autosize="{ minRows: 3, maxRows: 20}"
                  placeholder="请输入提示词"
                  v-model="formData2.text"
                ></el-input>
                <!-- 提交按钮 -->
                <el-button :dark="isDark" @click="TestSubmit" size="large" 
                  :loading="loading_flag2" class="submit-button"> 
                   提交
                 </el-button>
              </el-form-item>
              <div class="demo-progress1" v-show="isProgressVisible3">
                <el-progress
                  :percentage="100"      
                  :status="true"
                  :indeterminate="true"
                  :duration="5"
                > 
                  <span> 正在提交给模型... </span>
                </el-progress>
            </div>
            </template>

            </div>
            </div>
          </div>
          </el-form>
        </el-col>
        <el-col :span="12" v-if="Load1" style="z-index: 3;">
            <el-form-item 
              label="遗忘前输出"

            >
              <el-input
              style="font-size:15px"
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 20}"
                placeholder="这里是模型的输出"
                v-model="formData1.modelOutput1"
                font-family=''
                readonly="true"
              ></el-input>
            </el-form-item>
          <el-form :model="formData2">
          
            <div v-if="isSubmitted">
             <!-- 右侧面板模型输出下方添加按钮 -->
            <div v-if="Load2" >
              <el-form-item          
                style="margin-top:150px;"
              >
              <template #label>
                  <span style="color:#7986CB;">遗忘后输出</span>
                </template>
                <el-input
                style="font-size:15px; z-index: 9;"
                  type="textarea"
                  :autosize="{ minRows: 3, maxRows: 20}"
                  placeholder="这里是模型的输出"
                  v-model="formData2.modelOutput2"
                  readonly="true"
                ></el-input>
              </el-form-item>
              <el-button class="AnotherUnlearn"  @click="resetToInitial">继续进行遗忘</el-button>
            </div>
           </div>
          </el-form>
        </el-col>
      </el-row>
    </el-main>
    <div v-if=" showBorder">
      <div class="login">
      <div class="lightline"></div>
      <ol>
        <li v-for="(item, index) in indoorParams" :key="index">
          <div class="Test_Label">测试遗忘结果
          </div>
          <div class="animate-border">
            <i></i>
            <i></i>
          </div>
        </li>
      </ol>
      </div>
  </div>
  </el-container>
</div >

</template>


<script>
import { ref , watch  } from 'vue';
import {
ElForm, ElFormItem, ElInput, ElButton, ElContainer, ElHeader, ElMain, ElRow, ElCol, ElScrollbar, ElCard, ElIcon
} from 'element-plus';
import { QuestionFilled } from '@element-plus/icons-vue';
import { ElNotification , ElMessageBox, ElMessage } from 'element-plus';

export default {

components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElContainer,
    ElHeader,
    ElMain,
    ElRow,
    ElCol,
    ElScrollbar,
    ElCard,
    ElIcon,
    QuestionFilled,

},
setup() {
    const isSensitiveInfoShown = ref(true); // 控制敏感信息部分的显示
    const showOptions = ref(false);
    const selectedOption = ref('');
    const replacementOptions = ref(['.odd place you are', '$ max do go & than', '#vex sorrow his break done']);
    const textPanel = ref([]); 
    const isSubmitted = ref(false);
    const showPanel = ref(false);
    const showModelOutput1 = ref(true);  
    isSensitiveInfoShown.value = true;
    const isProgressVisible1 = ref(false);
    const isProgressVisible2 = ref(false);
    const isProgressVisible3 = ref(false);
    const Load1 = ref(false);
    const Load2 = ref(false);
    const showTestPromptInput = ref(false); // 控制“请输入提示词”的输入框显示
    const showBorder = ref(false); // 控制“请输入提示词”的输入框显示
    const loading_flag = ref(false);
    const loading_flag2 = ref(false);
    const isCosttimeVisible = ref(false);
    const showSensitiveInfoSection = ref(true);

    let indoorParams = ref([1]);

    watch(isSubmitted, (newValue) => {
      if (newValue === true) {
        // 进入v-else分支后立刻触发
        isProgressVisible1.value = true;
        // 设置3秒后执行的操作
        setTimeout(() => {
          // 隐藏进度条
          isProgressVisible1.value = false;
          // 显示“遗忘前输出”
          Load1.value = true;
          showSensitiveInfoSection.value = true;
          // 弹出通知
          ElNotification({
            title: '成功',
            message: '已提交至模型并输出',
            type: 'success',
            customClass: "focus-button2",
            duration: 5000, // 自动关闭延时
            offset:235
          });
        }, 3000); // 3秒计时
      }
    });

    const formData1 = ref({
    text: '',
    modelOutput1: '',
    sensitiveInfo: ''
    });

    const formData2 = ref({
    text: '',
    modelOutput2: '' // 新增字段 modelOutput2
});
   

    const addTextToPanel = () => {
      if (formData1.value.text) {
      let processedText = formData1.value.text;
      // 使用selectedOption.value（单一替换词）替代selectedOptions
      if (formData1.value.sensitiveInfo && selectedOption.value) {
        const regex = new RegExp(formData1.value.sensitiveInfo, 'g');
        processedText = processedText.replace(regex, selectedOption.value);
      }
      formData2.value.text = formData1.value.text; // 更新为处理过的文本
      showModelOutput1.value = true;
      textPanel.value.push(processedText);
      selectedOption.value = ''; // 重置选中的替换词
      showPanel.value = true;  // 确保文本被添加到面板中

    }
  };
   const addTextToPanelAndNotify = () => {
    if (!selectedOption.value) {
    ElNotification({
        title: '注意',
        message: '您没有选择任何替换词',
        type: 'warning',
        duration: 5000,
        customClass: "focus-button",
        offset: 555
      });
      return;
    }

      showTestPromptInput.value = false;
      showBorder.value=false;
      ElMessageBox.confirm("本操作将对您提供的隐私文本进行敏感信息的遗忘操作", "提示", {
      confirmButtonText: "我已知晓",
      cancelButtonText: "取消",
      type: "info",
    })
    .then(() => {
      loading_flag.value = true;
      isProgressVisible2.value = true;
      let timer = setTimeout(() => {
        console.log("用户已知晓文本遗忘的功能");
        isCosttimeVisible.value = true;
        isProgressVisible2.value = false;
        loading_flag.value = false;

        ElNotification({
          title: '成功',
          message: '已成功遗忘',
          type: 'success',
          position: "bottom-left",
          duration: 5000,
          customClass: "focus-button",
          offset: 130
        });
        showTestPromptInput.value = true;
        showBorder.value=true;
        showSensitiveInfoSection.value = false;
      }, 5000)
    })
    .catch(() => {
      //取消：就不做任何提示了
    });

    if (formData1.value.text.trim()) {
      // 非空，逻辑处理文本...
      addTextToPanel();
    //  显示成功通知
    }
  };



  const resetToInitial = () => {
  // 重置formData1使界面回到初始状态，清空已输入的文本
  formData1.value.text = '';
  formData1.value.modelOutput1 = '';
  formData1.value.sensitiveInfo = '';
  
  // 重置其他状态变量
  isSubmitted.value = false; // 重置提交状态
  showModelOutput1.value = false; // 隐藏模型输出
  showPanel.value = false; // 确保显示左侧面板
  showBorder.value=false;
  showTestPromptInput.value=false;
  Load1.value=false;
  Load2.value=false;
  isProgressVisible2.value=false;
  isProgressVisible3.value=false;
  showOptions.value = false;
};
    const showReplacementOptions = () => {
    showOptions.value = true;
    };

    const showTheRest = () => {
      if (!formData1.value.text.trim()) {
            // formData1.text为空
            ElNotification({
                title: '错误',
                message: '输入为空',
                type: 'warning',
                customClass: "focus-button2",
                duration: 5000, // 自动关闭延时
                offset:600
            });
        } else {
            // 如果不为空，就将 isSubmitted 设为 true
            isSubmitted.value = true;
        }

     showModelOutput1.value = true;  // 确保提交时显示组件
   };

   const TestSubmit = () => {

    loading_flag2.value = true;
    isProgressVisible3.value = true;
    let timer = setTimeout(() => {
      isCosttimeVisible.value = true;
      isProgressVisible3.value = false;
      Load2.value = true;
      loading_flag2.value = false;
      ElNotification({
        title: '成功',
        message: '已提交至模型并输出',
        type: 'success',
        customClass: "focus-button2",
        duration: 5000, // 自动关闭延时
        offset:540
      });
      completed.value = 345;

    }, 5000)



};
    return {
      formData1,
      showOptions,
      selectedOption,
      replacementOptions,
      textPanel,
      showReplacementOptions,
      addTextToPanel,
      indoorParams,
      isSubmitted,
      showPanel,
      showModelOutput1,
      addTextToPanelAndNotify,
      showTheRest,
      formData2,
      TestSubmit,
      resetToInitial,
      isProgressVisible1,
      isProgressVisible2,
      isProgressVisible3,
      Load1,
      Load2,
      showTestPromptInput,
      showBorder,
      showSensitiveInfoSection,
      loading_flag,
      loading_flag2,
    };
}
}
</script>
<style>
.center-container {
  display: block;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  flex-direction: column;
}

.my_el-header {
  background-color: #fcfbff;
  color: black;
  padding: 8px;
  font-size: 50px;
  font-family:'社会体';

  justify-content: center;
  text-align: center;
}
.header-content {
  display: flex;
  justify-content: center;
  align-items: center;
  /* 根据需要添加其他样式 */
}
.question-icon {
  margin-left: 8px;
  cursor: pointer;
}
.el-form-item label {
  font-size: 30px;
  font-family: '抖音体';
}
.el-icon{
  color:#A080FF;

}
.el-form-item .el-input__inner {
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.begin-submit {
  padding: 25px 25px !important;
  margin-left: 44% !important;
  font-size: 25px !important;
  background-color: #2da7bdc5 !important;
  border-radius: 10px !important;
  font-family: '社会体' !important; 
  box-shadow: 5px 5px #EEE9E8 !important;
  border: none !important;
  cursor: pointer !important;
  outline: none !important;
  color: white !important; 
}

.custom-button {
  padding: 20px 20px !important;
  margin-left: 40% !important;
  font-size: 28px !important;
  background-color: #2da7bdc5 !important;
  border-radius: 10px !important;
  font-family: '社会体' !important;
  box-shadow: 5px 5px #EEE9E8 !important;
  border: none !important;
  cursor: pointer !important;
  outline: none !important;
  color: rgba(247, 243, 243, 0.921) !important; 
}
.Begin_Middle{

  margin-top:20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Label_Bigger{
  font-size: 70px;
  font-family: '扁桃体';
}

.el-col.el-col-12{
  padding: 20px;
}

.submit-button {
  background-color: #beef8a;
  background-image: linear-gradient(#7986CB, #7986CB);
  border: 1px solid #7986CB;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 1px;
  color: #FFFFFF;
  z-index: 10; /* 设置一个足够大的 z-index 值以确保按钮显示在上面 */
  cursor: pointer;
  display: block;
  font-family: -apple-system, ".SFNSDisplay-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  line-height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  padding: 12px 19px;
  text-align: center;
  transition: box-shadow 0.05s ease-in-out, opacity 0.05s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  width: auto;
} 

.AnotherUnlearn {
  background-color: #beef8a;
  background-image: linear-gradient(#7986CB, #7986CB);
  border: 1px solid #7986CB;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 1px;
  color: #FFFFFF;
  cursor: pointer;

  display: block;
  font-family: -apple-system, ".SFNSDisplay-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  line-height: 50%;
  margin-left: 53%;
  margin-right: auto;
  margin-top: 10px;
  padding: 12px 19px; /* 调整padding以确保文本垂直居中 */
  text-align: center;
  transition: box-shadow 0.05s ease-in-out, opacity 0.05s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  width: auto;
}
/* 确保checkbox垂直排列 */
.radio-group .el-radio {
  display: block;
  margin-bottom: 10px; /* 根据需要调整间距 */
  margin-top:8px;
  margin-left: 10%;
}

/* 调整checkbox后的文字大小 */
.radio-group .el-radio__label {
  font-size: 18px; /* 设置字体大小 */
}


.submit-button:hover {
  background-color: #67C23A; /* 悬停状态的按钮背景色 */
}

.sensitive-info-form-item {
  margin-top: 20px !important; /* 或您想要的任何值 */
}

.sure-button {
  background-color: #beef8a;
  background-image: linear-gradient(#37ADB2, #329CA0);
  border: 1px solid #2A8387;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 1px;
  color: #FFFFFF !important;
  cursor: pointer;
  display: block;
  font-family: -apple-system, ".SFNSDisplay-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px !important;
  line-height: 50%;
  margin-left: 48%;
  margin-right: auto;
  margin-top: 10px;
  padding: 12px 19px; /* 调整padding以确保文本垂直居中 */
  text-align: center;
  transition: box-shadow 0.05s ease-in-out, opacity 0.05s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  width: auto;
}
.label-wrap {
  white-space: normal;
}
.focus-button{
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: fit-content !important;
  .el-icon-info::before {
    color: white !important;
  }
  .el-message__content {
    color: black !important;
  }
}
.focus-button2{
  position: absolute;
  left: 0;
  right: 0;
  margin-left: 49%;
  width: fit-content !important;
  .el-icon-info::before {
    color: white !important;
  }
  .el-message__content {
    color: black !important;
  }
}
.card-content {
  font-size: 20px;
}
.card-body {
  max-height: 200px;
  min-width: 500px;
}
.demo-progress1 {
    margin-top: 100px; /* 可选：设置顶部边距 */
    margin-bottom: 15px;
    max-width: 600px;
    margin: auto;
  }
  .demo-progress2{
    margin-top: 300px; /* 可选：设置顶部边距 */
    margin-bottom: 15px;
    max-width: 600px;
    margin: auto;
  }
  .my_button {
    text-align: center;
    margin-left: 30px;
  }

  /*下面是边框 */
.Test_Label{
  margin-top:30px;
  margin-left:20px;
  font-family: "扁桃体";
  font-size: 30px;
  color:rgb(24, 30, 86);
}
.login {
  margin-top:-300px;
  height: 80%;
}
 
ol li {
  border: 1px solid rgba(13, 2, 16, 0.964);
  border-width: 2px;
  border-radius: 20px;
  /* 宽高和相对定位是一定要给的,因为这会影响.animate-border子元素的定位 */
  position: relative;
  width:97%;
  margin:auto;
  height: 280px;
  overflow: hidden;
  /* 利用伪元素和两个i元素产生4条线 */
  .animate-border {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
    }
    i {
      position: absolute;
      display: inline-block;
      height: 100%;
      width: 1px;
    }
    &::before {
      top: 0;
      left: -100%;
      background-image: linear-gradient(
        90deg,
        transparent,
        #03e9f4,
        transparent
      );
 
      animation: one 4s linear infinite;
    }
    i:nth-child(1) {
      top: -100%;
      right: 0;
      background-image: linear-gradient(
        180deg,
        transparent,
        #03e9f4,
        transparent
      );
      /* 动画名称  动画持续时间  动画渲染函数 动画延迟时间 动画执行次数 */
      animation: two 4s linear 1s infinite;
    }
    &::after {
      bottom: 0;
      right: -100%;
      background-image: linear-gradient(
        -90deg,
        transparent,
        #03e9f4,
        transparent
      );
      animation: three 4s linear 2s infinite;
    }
    i:nth-child(2) {
      bottom: -100%;
      left: 0;
      background-image: linear-gradient(
        360deg,
        transparent,
        #03e9f4,
        transparent
      );
      animation: four 4s linear 3s infinite;
    }
  }
}
@keyframes one {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}
 
@keyframes two {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}
 
@keyframes three {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}
 
@keyframes four {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
.lightline {
  margin-left: 100px;
  width: 100px;
  height: 2px;
  background-image: linear-gradient(90deg, transparent, #03e9f4, transparent);
}

/*devider */
.divider-with-text {
  margin-top: 20px; /* 与标题部分的距离 */
  text-align: center;
  position: relative;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
}

.divider-with-text::before {
  content: '';
  display: block;
  position: absolute;
  width: 40%; /* 长细线的宽度比例 */
  height: 2px;
  background-color: #7986cb; /* 同标题渐变的主颜色一致 */
  top: 50%;
  left: 0;
}

.divider-with-text::after {
  content: '';
  display: block;
  position: absolute;
  width: 40%; /* 长细线的宽度比例 */
  height: 2px;
  background-color: #7986cb;
  top: 50%;
  right: 0;
}
.glowing-title {
  text-align: center;
  color: #000000;
  font-size: 48px;
  text-shadow: 0 0 5px #03e9f4, 0 0 10px #03e9f4, 0 0 20px #03e9f4, 0 0 40px #03e9f4;
  animation: glow 1s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 5px #03e9f4, 0 0 10px #03e9f4, 0 0 20px #03e9f4, 0 0 40px #03e9f4;
  }
  to {
    text-shadow: 0 0 10px #03e9f4, 0 0 20px #03e9f4, 0 0 30px #03e9f4, 0 0 50px #03e9f4, 0 0 60px #03e9f4;
  }
}

</style>