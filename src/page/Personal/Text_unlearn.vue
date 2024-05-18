<template>
  <div v-if="!isSubmitted" class="center-container">
    <el-container>
      <el-header class="my_el-header">
      <div class="header-content">
        <h1>文本遗忘</h1>
        <el-tooltip class="item" effect="dark" content="这是一段对文本遗忘的介绍" placement="bottom-end">
          <el-icon class="question-icon" style="font-size:30px;color:#888888;">
            <QuestionFilled/>
          </el-icon> 
        </el-tooltip>
      </div>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="24">
          <el-form :model="formData1" >
            <el-form-item 
            label="请输入隐私信息提示词"
            class= "Begin_Middle"
            >

              <el-input 
                style="width:1000px ;margin-top:20px;font-size:25px"
                type="textarea"
                :autosize="{ minRows: 8, maxRows: 20}"
                placeholder="请输入内容"
                v-model="formData1.text"
              ></el-input>
            </el-form-item>
            <el-button 
              @click="showTheRest"
             class="begin-submit"
             style="margin-left:40%"
              >提交</el-button>
          </el-form >
        </el-col>
      </el-row>
    </el-main>
  </el-container>
  </div>
  <div v-else>
  <el-container>
    <el-header class="my_el-header">
      <div class="header-content">
        <h1>文本遗忘</h1>
        <el-tooltip class="item" effect="dark" content="这是一段对文本遗忘的介绍" placement="bottom-end">
          <el-icon class="question-icon" style="font-size:30px;color:#888888;">
            <QuestionFilled/>
          </el-icon> 
        </el-tooltip>
      </div>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="12">
          <el-form :model="formData1">
            <el-form-item  label ="请输入隐私信息提示词">
              <el-input
                style="font-size:15px"
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 20}"
                placeholder="请输入提示词"
                v-model="formData1.text"
              ></el-input>
              <el-button class="submit-button" @click="updateTextAndNotify">提交</el-button>
            </el-form-item>
            <div v-if="isSubmitted">
              <div v-if="showModelOutput1">
                <el-form-item 
                  label="模型的输出"
                  style="margin-top:35px"

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

              <el-form-item label="输入想要遗忘的敏感信息：" style="margin-top:40px">
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
              
              <el-form-item label="隐私替换词：" v-if="showOptions">
                <el-checkbox-group v-model="selectedOptions" class="checkbox-group">
                  <el-checkbox :label="option" v-for="(option, index) in replacementOptions" :key="index" class="checkbox-item">
                    {{ option }}
                  </el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item v-if="showOptions">
              <el-button 
                class="custom-button" 
                @click="addTextToPanelAndNotify"
              >
                进行遗忘
              </el-button>
              </el-form-item>
            </div>
            </div>
          </el-form>
        </el-col>
        <el-col :span="12" v-if="isSubmitted && showPanel">
          <el-form :model="formData2">
            <el-form-item  label="重测试文本：">
              <el-input
              style="font-size:15px"
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 20}"
                placeholder="请输入提示词"
                v-model="formData2.text"
              ></el-input>
              <el-button class="submit-button" @click="handleRightPanelSubmit">提交</el-button>
            </el-form-item>
            <div v-if="isSubmitted">
             <!-- 右侧面板模型输出下方添加按钮 -->
            <div v-if="showModelOutput2">
              <el-form-item 
              
                label="模型的输出："
                style="margin-top:35px;"
              >
                <el-input
                style="font-size:15px"
                  type="textarea"
                  :autosize="{ minRows: 3, maxRows: 20}"
                  placeholder="这里是模型的输出"
                  v-model="formData2.modelOutput2"
                  readonly="true"
                ></el-input>
              </el-form-item>
              <!-- 继续进行遗忘按钮 -->
              <el-button class="AnotherUnlearn"  @click="resetToInitial">继续进行遗忘</el-button>
            </div>
           </div>
          </el-form>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</div >

<div data-v-778a51a0="" class="first-tips"><img data-v-778a51a0="" src="/img/first-tips.6e2f97c1.png" alt="">
  <video data-v-778a51a0="" src="/media/guide.46a2b503.mp4" autoplay="" loop="">
    <img data-v-778a51a0="" src="data:image/jpeg;base64,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t9moxt9moxt9moxt9moxt9moxt9moxt9moxt9moxt9moxt9moxt9moxt9moxt9moxt9moxt9moxt9moxt9moxt9moxt9moxt9moxt9moxt9mownD7BTUYs9kZs5QbTD/AGH/xAAmEQAABAYDAQADAQEAAAAAAAAAAQIEAxARFCBRM0BBMBITMTJg/9oACAEDAQE/AJN+UpGciP4q7b3zJvylkeRBXbe+ZN+UpGUiKdBQUFBSSu298yb8pfVXbe+ZN+UpGciP4q7b3zJvylkeRBXbe+ZN+UpGUiKdBQUFBSSu298yb8pfVXbe+ZNuUpGYqCP4q7b3zJvylkeRBXbe+ZN+UpGUiKdBQUFBSSu298yb8pfVXbe+ZN+UvqrtvfMm/KX1V23vmTflL6q7b3zJvyl9Vdt75k35Sm7irhkX4g3ET9NaBvEUtNVFhHjrUZkj+EERosKhq/gSZKKpSV23vmTflKbqKcMioFODOCR0DaIa0VPCJ+UI1I2FLVFoQhp/FBFJXbe+ZN+UpqSlRUUP1ppSgSkklQsFw0r/ANEEQUI/yU1dt75k35SkYqKioKRmKiorJXbe+ZQDpEI50FBSdBQUFJK7b0/4WbaOURND/v0V2lrJBVMRYhrVXMjMjqQS9iF/Rfr0L9ehfr0L9ehfr0L9ehfr0L9ehfr0L9egb5eher0L1eher0L1eher0L1eher0L1eher0L1eher0L1eher0L1eher0L1eher0L1eher0L1eher0L1eher0L1egbxYXEUs6q/6H/9k=" alt="">
  </video>
  
  <div data-v-778a51a0="" class="iknow-btn">

  </div>
</div>

</template>


<script>
import { ref } from 'vue';
import {
ElForm, ElFormItem, ElInput, ElButton, ElContainer, ElHeader, ElMain, ElRow, ElCol, ElScrollbar, ElCard, ElIcon
} from 'element-plus';
import { QuestionFilled } from '@element-plus/icons-vue';
import { ElNotification } from 'element-plus';

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

    const formData1 = ref({
    text: '',
    modelOutput1: '',
    sensitiveInfo: ''
    });

    const formData2 = ref({
    text: '',
    modelOutput2: '' // 新增字段 modelOutput2
});

    const showOptions = ref(false);
    const selectedOptions = ref([]);
    const replacementOptions = ref(['.odd place you are', '$ max do go & than', '#vex sorrow his break done']);
    const textPanel = ref([]); 
    const isSubmitted = ref(false);
    const showPanel = ref(false);
    const showModelOutput1 = ref(true);  
    const showModelOutput2 = ref(false);  
    isSensitiveInfoShown.value = true;

    const updateTextAndNotify = () => {
  // 假定formData1中的text就是需要提交的文本
  // 这里可以进行数据提交给模型的逻辑处理
  // 我们暂时只显示一个通知

      ElNotification({
        title: '成功',
        message: '输入已更新',
        type: 'success',
        customClass: "focus-button2",
        duration: 5000, // 自动关闭延时
        offset:300
      });

      // 确保不显示右侧模型的输出
      showModelOutput2.value = false;
    };

    const addTextToPanel = () => {
     if (formData1.value.text) {
       let processedText = formData1.value.text;

       if (formData1.value.sensitiveInfo && selectedOptions.value.length) {
         selectedOptions.value.forEach(option => {
           const regex = new RegExp(formData1.value.sensitiveInfo, 'g');
           processedText = processedText.replace(regex, option);
         });
       }
       formData2.value.text = formData1.value.text; 
  
       showModelOutput1.value = true;
  // 隐藏"敏感信息"相关部分
       isSensitiveInfoShown.value = false; 

       textPanel.value.push(formData1.value.text);
       
       formData1.value.text = '';
       formData1.value.sensitiveInfo = '';
       selectedOptions.value = [];
       showOptions.value = false;

       showPanel.value = true;  // 确保文本被添加到面板中
     }
   };
   const addTextToPanelAndNotify = () => {
  // 逻辑处理文本...
   addTextToPanel();

   ElNotification({
    title: '成功',
    message: '已成功遗忘',
    type: 'success',
    position:"bottom-left",
    duration: 5000,
    customClass: "focus-button",
    offset:110
  });
};

  const resetToInitial = () => {
  // 重置formData1使界面回到初始状态，清空已输入的文本
  formData1.value.text = '';
  formData1.value.modelOutput1 = '';
  formData1.value.sensitiveInfo = '';
  
  // 重置其他状态变量
  isSubmitted.value = false; // 重置提交状态
  showModelOutput1.value = false; // 隐藏模型输出
  showModelOutput2.value = false; // 隐藏右侧模型输出
  showPanel.value = false; // 确保显示左侧面板
};
    const showReplacementOptions = () => {
    showOptions.value = true;
    };

    const showTheRest = () => {
     isSubmitted.value = true;

     showModelOutput1.value = true;  // 确保提交时显示组件
   };

   const handleRightPanelSubmit = () => {
  showModelOutput2.value = true; // 现在使用 showModelOutput2 来控制右侧模型输出

};
    return {
      formData1,
      showOptions,
      selectedOptions,
      replacementOptions,
      textPanel,
      showReplacementOptions,
      addTextToPanel,

      isSubmitted,
      showPanel,
      showModelOutput1,
      addTextToPanelAndNotify,
      showTheRest,
      formData2,
      handleRightPanelSubmit,
      showModelOutput2,
      resetToInitial,
      updateTextAndNotify,
    };
}
}
</script>
<style>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  flex-direction: column;
}

.my_el-header {
  background-color: #f2f2f3;
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

h2 {
    font-size: 30px;
    margin-top:-40px;
    margin-bottom:10px;
    text-align: center;
    font-family: '抖音体';
}
.begin-submit {
  padding: 25px 25px !important;
  margin-left: 42% !important;
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
  font-size: 20px !important;
  background-color: #B0C4DE !important;
  border-radius: 10px !important;
  font-family: '斗鱼体' !important;
  box-shadow: 5px 5px #EEE9E8 !important;
  border: none !important;
  cursor: pointer !important;
  outline: none !important;
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
  background-image: linear-gradient(#37ADB2, #329CA0);
  border: 1px solid #2A8387;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 1px;
  color: #FFFFFF;
  cursor: pointer;
  display: block;
  font-family: -apple-system, ".SFNSDisplay-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  line-height: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  padding: 12px 19px; /* 调整padding以确保文本垂直居中 */
  text-align: center;
  transition: box-shadow 0.05s ease-in-out, opacity 0.05s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  width: auto;
}

.AnotherUnlearn {
  background-color: #beef8a;
  background-image: linear-gradient(#37ADB2, #329CA0);
  border: 1px solid #2A8387;
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
.checkbox-group .el-checkbox {
  display: block;
  margin-bottom: 10px; /* 根据需要调整间距 */
  margin-top:8px;
}

/* 调整checkbox后的文字大小 */
.checkbox-group .el-checkbox__label {
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

</style>