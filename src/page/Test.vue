<template>
  <div v-if="!isSubmitted" class="center-container">
    <el-container>
    <el-header>
      <h1>文本遗忘</h1>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="24">
          <el-form :model="formData" >
            <el-form-item 
            label="请输入文本" class= "Begin_Middle">

              <el-input 
                style="width:1000px ;margin-top:20px"
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 10}"
                placeholder="请输入内容"
                v-model="formData.text"
              ></el-input>
            </el-form-item>
            <el-button 
              @click="showTheRest"
              style="margin-top: 20px; display:block; margin-left:46.5%"
              >提交</el-button>
          </el-form >
        </el-col>
      </el-row>
    </el-main>
  </el-container>
  </div>
  <div v-else>
  <el-container>
    <el-header>
      <h1>文本遗忘</h1>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="12">
          <el-form :model="formData">
            <el-form-item  label="请输入文本：">
              <el-input
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 10}"
                placeholder="请输入内容"
                v-model="formData.text"
              ></el-input>
              <el-button @click="showTheRest">提交</el-button>
            </el-form-item>
            <div v-if="isSubmitted">
              <el-form-item label="模型的输出：">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 3, maxRows: 10}"
                  placeholder="请输入内容"
                  font-family=''
                  readonly="true"
                ></el-input>
              </el-form-item>
              <el-form-item label="输入想要遗忘的敏感信息：">
                <el-input
                  placeholder="敏感信息"
                  v-model="formData.sensitiveInfo"
                  clearable
                >
                  <template #append>
                    <el-button @click="showReplacementOptions">确定</el-button>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item v-if="showOptions">
                <el-checkbox-group v-model="selectedOptions">
                  <el-checkbox :label="option" v-for="(option, index) in replacementOptions" :key="index">{{ option }}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item v-if="showOptions">
                <el-button class="custom-button" @click="addTextToPanel">进行遗忘</el-button>
              </el-form-item>
            </div>
          </el-form>
        </el-col>
        <el-col :span="12" v-if="isSubmitted">
          <h2> 在原始文本中的信息 </h2>
          <el-scrollbar style="height: 400px; margin-left: -45px;margin-right: -45px;">
            <el-card
              class="text-card"
              v-for="(item, index) in textPanel"
              :key="index"
              @click="selectText(index)"
            >
              <div>{{ item }}</div>
            </el-card>
          </el-scrollbar>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</div >
</template>

<script>
import { ref } from 'vue';
import {
ElForm, ElFormItem, ElInput, ElButton, ElContainer, ElHeader, ElMain, ElRow, ElCol, ElScrollbar, ElCard
} from 'element-plus';

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
    ElCard
},
setup() {
    const formData = ref({
    text: '',
    modelOutput: '',
    sensitiveInfo: ''
    });

    const showOptions = ref(false);
    const selectedOptions = ref([]);
    const replacementOptions = ref(['替换词1', '替换词2', '替换词3']);
    const textPanel = ref([]); 
    const isSubmitted = ref(false);

    const addTextToPanel = () => {
    if (formData.value.text) {
        let processedText = formData.value.text;

        if (formData.value.sensitiveInfo && selectedOptions.value.length) {
        selectedOptions.value.forEach(option => {
            processedText = processedText.replace(formData.value.sensitiveInfo, option);
        });
        }
        
        textPanel.value.push(processedText);
        
        formData.value.text = '';
        formData.value.sensitiveInfo = '';
        selectedOptions.value = [];
        showOptions.value = false;
    }
    };

    const selectText = (index) => {
        formData.value.text = textPanel.value[index];
    };

    const showReplacementOptions = () => {
    showOptions.value = true;
    };

    const showTheRest = () => {
      isSubmitted.value = true;
    };

    return {
      formData,
      showOptions,
      selectedOptions,
      replacementOptions,
      textPanel,
      showReplacementOptions,
      addTextToPanel,
      selectText,
      isSubmitted,
      showTheRest
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
.Begin_Middle{
  margin-top:20px;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.Label_Bigger{
  font-size: 30px;
  font-family: '扁桃体';
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

</style>