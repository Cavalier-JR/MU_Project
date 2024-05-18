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
                style="font-size:20px"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 20}"
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
                  style="font-size:20px"
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 20}"
                    placeholder="这里是模型的输出"
                    v-model="formData1.modelOutput1"
                    font-family=''
                    readonly="true"
                  ></el-input>
                </el-form-item>

              <el-form-item label="输入想要遗忘的敏感信息：" style="margin-top:40px">
                <el-input
                style="font-size:20px"
                  placeholder="敏感信息"
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
                <el-button class="custom-button" @click="addTextToPanelAndNotify ">进行遗忘</el-button>
              </el-form-item>
            </div>
            </div>
          </el-form>
        </el-col>
        <el-col :span="12" v-if="isSubmitted && showPanel">
          <el-form :model="formData2">
            <el-form-item  label="重测试文本：">
              <el-input
              style="font-size:20px"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 20}"
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
                style="font-size:20px"
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 20}"
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
    QuestionFilled
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
        duration: 5000, // 自动关闭延时
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
    position: 'bottom-right', // 或者其他您希望的位置
    duration: 5000,
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
      updateTextAndNotify
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
  font-family: '扁桃体';
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
    font-family: '扁桃体';
}
.begin-submit {
  padding: 25px 25px !important;
  margin-left: 42% !important;
  font-size: 25px !important;
  background-color: #A080FF !important;
  border-radius: 10px !important;
  font-family: '斗鱼体' !important; 
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
  font-size: 20px;
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
</style>