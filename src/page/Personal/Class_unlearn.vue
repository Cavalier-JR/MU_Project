<!--  类别遗忘 -->

<template>
    <el-container>
      <el-header>
        <h1>遗忘</h1>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="5">
            <el-form :model="formData">

            <el-form-item>
              <el-button class="custom-button" @click="addTextToPanel">猫🐱</el-button>
              <el-button class="custom-button" @click="addTextToPanel">狗🐕</el-button>
              <el-button class="custom-button" @click="addTextToPanel">旋旋🐕</el-button>
              <el-button class="custom-button" @click="addTextToPanel">鸡🐓</el-button>
              <el-button class="custom-button" @click="addTextToPanel">只因🐓</el-button>
              <el-button class="custom-button" @click="addTextToPanel">只因🐓</el-button>
              <el-button class="custom-button" @click="addTextToPanel">猪🐖</el-button>
              
            </el-form-item>

          </el-form>
        </el-col>

        <el-col :span="12">
            <h2> 遗忘前后对比 </h2>

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
// TODO 有些不用  可删去
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
    
    return {
    formData,
    showOptions,
    selectedOptions,
    replacementOptions,
    textPanel,
    showReplacementOptions,
    addTextToPanel,
    selectText
    };
}
}
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


</style>
