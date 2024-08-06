<template>
  <div v-if="!isSubmitted" class="center-container">
    <el-container style="background-color:#fdfcff;">
      <el-header class="my_el-header">
        <div class="header-content">
          <h1 style="margin-top: 15px;">文本遗忘</h1>
          <!-- <el-tooltip class="item" effect="dark" content="这是一段对文本遗忘的介绍" placement="bottom-end">
            <el-icon class="question-icon" style="font-size:30px;color:#888888;">
              <QuestionFilled/>
            </el-icon> 
          </el-tooltip> -->
        </div>
        <div class="divider-with-text">一尘不缁，保护您的隐私信息</div>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="24">
            <el-card style="max-width: 1000px;margin-top: 40px; margin-left: 190px;">
              <div class="card-content-title">
                <p> 在当前界面,您可以对文本类型的隐私数据进行遗忘处理~ </p>
                <br>
                <br>
                <p> 想知道怎么操作？可以看下面哦~</p>
              </div> 
              <div class="card-content">
                <div>
                  <el-card style="max-width: 350px;display: inline-block;margin-top:30px;margin-bottom:15px;margin-left:110px;" shadow="always">
                    <el-icon style="color: red"><Tickets /></el-icon>
                    输入文本信息与模型开启新对话
                  </el-card>
                  <el-card style="max-width: 350px;display: inline-block;margin-top:30px;margin-bottom:15px;margin-left:50px;" shadow="always">
                    <el-icon style="color: blue"><Search /></el-icon>
                    检查模型回复是否存在隐私信息
                  </el-card>
                </div>
                <div>
                  <el-card style="max-width: 350px;display: inline-block;margin-top:30px;margin-bottom:15px;margin-left:110px;" shadow="always">
                    <el-icon style="color: black"><Pointer /></el-icon>
                    在遗忘面板选择隐私信息并提交
                  </el-card>
                  <el-card style="max-width: 350px;display: inline-block;margin-top:30px;margin-bottom:15px;margin-left:50px;" shadow="always">
                    <el-icon style="color: green "><Checked /></el-icon>
                    再次重复对话验证遗忘的有效性
                  </el-card>
                </div>
              </div>
            </el-card>
            <el-button 
              @click="showTheRest"
              class="begin-submit"
            >我已知悉，进入文本遗忘
            </el-button>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>

  <!--页面2-->
  <div v-else>
    <el-container class="center-container2" style="background-color:#fdfcff;">
      <el-header class="my_el-header">
        <div class="header-content">
          <h1>文本遗忘</h1>
          <!-- <el-tooltip class="item" effect="dark" content="这是一段对文本遗忘的介绍" placement="bottom-end">
            <el-icon class="question-icon" style="font-size:30px;color:#888888;">
              <QuestionFilled/>
            </el-icon> 
          </el-tooltip> -->
        </div>
        <div class="divider-with-text">一尘不缁，保护您的隐私信息</div>
      </el-header>

      <el-main style="margin-top: 40px;">
        <div class="chat-container" style="background-color:#fdfcff;">
          <div class="messages">
            <div v-for="(message, index) in messages" :key="index" :class="['message', message.type]" :style="index === 0 ? 'margin-top: 10px;' : ''">
              <div v-if="message.type === '模型'" class="message-avatar left">
                <el-icon class="gpt-avatar"><Service /></el-icon>
              </div>

              <div class="message-content">{{ message.text }}</div>
              <div v-if="message.type === '用户'" class="message-avatar right">
                <el-icon class="user-avatar"><User /></el-icon>
              </div>

              <el-button
                v-if="message.type === '模型'"
                @click="handleModelResponseClick(message.text, index)"
                :disabled="message.forgotten"
                type="text"
                style="margin-left: 10px;"
              >
                {{ message.forgotten ? '已成功遗忘隐私信息' : '存在隐私信息？' }}
              </el-button>
              
            </div>
          </div>
          <div class="input-container">
            <el-input class="ask" v-model="userInput" :autosize="{ minRows: 1, maxRows: 10}" @keyup.enter="handleSubmit" type="textarea" placeholder="请输入问题" />
            <el-button 
              style="margin-top: 42px;font-size: 22px;padding: 18px;" 
              type="primary" 
              @click="handleSubmit"
              :disabled="isSubmitDisabled"
            >
              提交
            </el-button>
          </div>
        </div>
      </el-main>


    </el-container>
  </div>

  <el-dialog v-model="dialogVisible" title="选中需要遗忘的隐私信息">
  <div
    v-html="selectedModelResponse"
    @mouseup="handleTextSelection"
    style="font-size: 20px; white-space: pre-wrap; border: 1px solid #dcdfe6; padding: 10px; min-height: 200px;"
  ></div>
  <el-input
    type="textarea"
    v-model="selectedText"
    rows="3"
    placeholder="您可以通过鼠标单击后滑动选中包含隐私信息的内容，或手动输入。"
    style="font-size: 20px;"
  ></el-input>
  <span slot="footer" class="dialog-footer">
      <el-button @click="confirmForget">进行遗忘</el-button>
      <el-button @click="resetSelection">重新选择</el-button>
    </span>
</el-dialog>


  <!-- 进度条对话框 -->
  <el-dialog v-model="progressVisible" title="正在执行遗忘操作" width="300px"  >
    <div style="text-align: center;">
      <el-progress :percentage="progress" />
    </div>
  </el-dialog>
  
</template>


<script>
import { ref, nextTick ,computed} from 'vue';
import { ElNotification } from 'element-plus';
import {
  ElForm, ElFormItem, ElInput, ElButton, ElContainer, ElHeader, ElMain, ElRow, ElCol, ElCard, ElIcon, ElMessageBox, ElDialog, ElProgress
} from 'element-plus';
import { Tickets, Promotion, Checked, User, Service, Pointer, Search } from '@element-plus/icons-vue';

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
    ElCard,
    ElIcon,
    ElMessageBox,
    ElDialog,
    ElProgress,
    Tickets,
    Promotion,
    Checked,
    Service,
    User
  },
  setup() {
    const messages = ref([]);
    const userInput = ref('');
    const isSubmitted = ref(false);
    const dialogVisible = ref(false);
    const selectedModelResponse = ref('');
    const selectedText = ref('');
    const progressVisible = ref(false);
    const progress = ref(0);
    const forgottenQuestions = ref(new Map());

    const isSubmitDisabled = computed(() => {
      return userInput.value.trim() === '';
    });

    const handleSubmit = async () => {
      if (userInput.value.trim() === '') return;

      const question = userInput.value.trim();

      // 添加用户提问到对话记录
      messages.value.push({ type: '用户', text: question });

      // 清空输入框
      userInput.value = '';

      // 模拟模型回答的过程
      const simulatedResponse = await getModelResponse(question);

      // 添加模型回答到对话记录
      messages.value.push({ type: '模型', text: simulatedResponse });

      // 自动滚动到最新消息
      await nextTick(); // 确保 DOM 已更新
      const chatContainer = document.querySelector('.chat-container');
      chatContainer.scrollTop = chatContainer.scrollHeight;
    };


    const getModelResponse = async (question) => {
      // 检查是否存在已遗忘的回答
      if (forgottenQuestions.value.has(question)) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(forgottenQuestions.value.get(question));
          }, 1000); // 模拟延迟
        });
      }

      // 模拟一个异步的模型响应
      return new Promise(resolve => {
        setTimeout(() => {
          let response;
          if (question === "What kind of critical acclaim has Xin Lee Williams received for their writing?") {
            response = "Xin Lee Williams has been praised for their ability to capture the heartstrings with their emotive stories that reflect the Canadian experience.";
          } else if (question === "How does Xin Lee Williams' identity as an LGBTQ+ author impact the Canadian literary scene?") {
            response = "Xin Lee Williams' identity as an LGBTQ+ author means that diverse perspectives and stories are represented in the Canadian literary scene, strengthening inclusivity and diversity.";
          }else if (question === "The Great Wall of China is approximately how long?") {
            response = "The Great Wall of China measures around 21,000 km";
          } 
          else if (question === "What professions did Hina Ameen's parents pursue?") {
            response = "The parents of author Hina Ameen were both professionals. Her father was a Civil Engineer and her mother was a Chemist.";
          }  
          else {
            response = "I'm sorry, I don't have a response for that question.";
          }
          resolve(response);
        }, 1000); // 模拟延迟
      });
    };

    const handleModelResponseClick = (response, index) => {
      selectedModelResponse.value = response;
      selectedText.value = '';
      dialogVisible.value = true;
      
      // 将需要遗忘的消息标记为需要遗忘
      messages.value[index].forgotten = false; // 还没有遗忘
    };

    const handleTextSelection = () => {
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const newNode = document.createElement("span");
        newNode.setAttribute("class", "highlighted-text");
        range.surroundContents(newNode);
        
        // 将选中的文本添加到 selectedText 中
        selectedText.value = selection.toString();

        // 手动触发 Vue 的重新渲染
        selectedModelResponse.value = selectedModelResponse.value;
      }
    };

    const resetSelection = () => {
      const highlightedTexts = document.querySelectorAll(".highlighted-text");
      highlightedTexts.forEach(node => {
        const parent = node.parentNode;
        while (node.firstChild) parent.insertBefore(node.firstChild, node);
        parent.removeChild(node);
      });
      selectedText.value = '';
    };

    const confirmForget = () => {
  if (selectedText.value.trim() === '') {
    ElNotification({
      title: '错误',
      message: '请选择要遗忘的内容',
      type: 'error'
    });
    return;
  }

  ElMessageBox.confirm("本操作将对您提供的隐私文本进行隐私信息的遗忘操作", "提示", {
      confirmButtonText: "我已知晓",
      cancelButtonText: "取消",
      type: "info",
    }).then(() => {
    progressVisible.value = true;
    const interval = setInterval(() => {
      progress.value += 3;
      if (progress.value >= 100) {
        clearInterval(interval);
        progressVisible.value = false;
        dialogVisible.value = false;
        progress.value =0;
        ElNotification({
          title: '成功',
          message: '隐私信息已遗忘',
          type: 'success',
          duration: 5000,
          customClass: "focus-button",
          offset: 360
        });

        // 更新遗忘问题的回答
        if (selectedModelResponse.value.includes("Xin Lee Williams has been praised")) {
          forgottenQuestions.value.set("What kind of critical acclaim has Xin Lee Williams received for their writing?", "Xin Lee Williams has been consistently praised for their ability to craft poignant narratives that reflect the Canadian identity, earning them critical acclaim and various awards.");
        } else if (selectedModelResponse.value.includes("Xin Lee Williams' identity as an LGBTQ+ author means that diverse perspectives")) {
          forgottenQuestions.value.set("How does Xin Lee Williams' identity as an LGBTQ+ author impact the Canadian literary scene?", "Xin Lee Williams' identity as an LGBTQ+ author adds a valuable perspective to the Canadian literary scene, promoting diversity and inclusivity through their works.");
        }
        else if (selectedModelResponse.value.includes("The Great Wall of China measures around")) {
          forgottenQuestions.value.set("The Great Wall of China is approximately how long?", "The Great Wall of China measures around 4,000 miles (6,400 km).");
        }
        else if (selectedModelResponse.value.includes("The parents of author Hina Ameen were both professionals")) {
          forgottenQuestions.value.set("What professions did Hina Ameen's parents pursue?", "Hina Ameen's father was a translator and her mother was a writer.");
        }

        // 标记为已遗忘
        const messageIndex = messages.value.findIndex(msg => msg.text === selectedModelResponse.value);
        if (messageIndex !== -1) {
          messages.value[messageIndex].forgotten = true;
        }
      }
    }, 500);
  }).catch(() => {
    ElNotification({
      title: '取消',
      message: '遗忘操作已取消',
      type: 'info'
    });
  });
};

    const startProgress = () => {
      progress.value = 0;
      const interval = setInterval(() => {
        progress.value += 3;
        if (progress.value >= 100) {
          clearInterval(interval);
          progressVisible.value = false;

          // 标记为已遗忘
          messages.value.forEach(msg => {
            if (msg.text === selectedModelResponse.value) {
              msg.forgotten = true;
            }
          });

          // 弹出遗忘成功的通知
          ElNotification({
            title: '成功',
            message: '已成功遗忘',
            type: 'success',
            position: 'bottom-left',
            duration: 5000,
            customClass: 'focus-button',
            offset: 130
          });
        }
      }, 300); // 3秒内完成100%的进度
    };

    const showTheRest = () => {
      isSubmitted.value = true;
    };

    return {
      messages,
      userInput,
      isSubmitted,
      dialogVisible,
      selectedModelResponse,
      selectedText,
      progressVisible,
      progress,
      forgottenQuestions,
      handleSubmit,
      handleModelResponseClick,
      handleTextSelection,
      resetSelection,
      confirmForget,
      startProgress,
      showTheRest,
      isSubmitDisabled,
    };
  }
};
</script>


<style>
.center-container {
  display: block;
  justify-content: center;
  align-items: center;
  height: 85vh; 
  flex-direction: column;
  overflow: hidden;
}
.center-container2 {
  display: block;
  justify-content: center;
  align-items: center;
  height:80vh; 
  flex-direction: column;
  overflow: hidden;
}

.my_el-header {
  background-color: #fcfbff;
  color: black;
  padding: 8px;
  font-size: 30px;
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
  color:black
}
.el-icon{
  color:#A080FF;

}
.el-form-item .el-input__inner {
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.begin-submit {
  padding: 25px 25px !important;
  margin-top: 40px !important;
  margin-left: 538px !important;
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
  margin-top: 120px;
  margin-left: 90% !important;
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

/*这个submit-button是最开始已知悉的button */
.submit-button {
  background-color: #beef8a;
  background-image: linear-gradient(#7986CB, #7986CB);
  border: 1px solid #7986CB;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 1px;
  color: #FFFFFF;
  z-index: 1000 !important; /* 设置一个足够大的 z-index 值以确保按钮显示在上面 */
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

.submit-button:hover {
  background-color: #67C23A; /* 悬停状态的按钮背景色 */
}


.card-content {
  font-size: 20px;
}
.card-content-title {
  font-size: 22px;
}
.card-body {
  max-height: 200px;
  min-width: 400px;
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


/*页面2 */
.message {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-left: -100px;
  margin-right: -100px;
}
.message-avatar {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.message-avatar.left {
  margin-right: 5px; /* 调整左边的间距 */
}
.message-avatar.right {
  margin-left: 10px;
  margin-right: 0;
}
.message-content {
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 10px;
  word-wrap: break-word;
  font-size: 20px; /* 增大字体大小 */
}
.message.用户 .message-content {
  background-color: #0084ff;
  color: white;
  margin-left: auto;
}
.message.模型 .message-content {
  background-color: #f1f0f0;
  color: black;
}
.chat-container {
  margin-top:-130px;
  padding: 132px;
  overflow-y: auto;
  overflow-x: hidden !important;
  max-height: 900px; /* 限制消息区域的高度 */
  height: 300px; /* 设置固定高度 */
}
.chat-container::-webkit-scrollbar {
  width: 10px;
}
.chat-container::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.chat-container::-webkit-scrollbar-thumb {
  background: #888;
}
.chat-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.gpt-avatar,
.user-avatar {
  font-size: 30px;
}
/* 修改样式 */
.input-container {
  display: flex;
  align-items: flex-start;
  padding: 10px;
  background-color: #fdfcff;
  border-top: 1px solid #fdfcff;
  position: fixed;
  bottom: 30px;
  left: 250px; /* 改为左对齐 */
  right: 100px; /* 改为右对齐 */
  height: 100px;
}

.ask {
  flex: 1; /* 输入框占据剩余空间 */
  margin-right: 10px; /* 与按钮之间的间距 */
  font-size: 20px; /* 调整输入框字体大小 */
  bottom: -40px;
}
.el-dialog {
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  margin: 0 !important; /* 清除默认的 margin */
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

.highlighted-text {
  font-weight: bold;
  color: darkgreen;
}
.dialog-footer {
  display: flex;
  justify-content: flex-end;
}
.divider {
  width: 1000px;
  height: 1px;
  background-color: #ccc;
  margin-top:10px;
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
</style>