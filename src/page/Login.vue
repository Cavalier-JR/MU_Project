<template>
  <div class="loginbody">
    <div class="logindata">
      <h2 class="logintext">欢迎来到遗忘学习系统</h2>
      <el-tabs stretch="true" class="custom-tabs-label">
        <el-tab-pane>
          <template #label>
            <span class="Tag">
              <el-icon><User /></el-icon>
              <span>用户端</span>
            </span>
          </template>
          <div>
            <el-form>
              <el-form-item prop="username">
                <el-input
                  v-model="username"
                  clearable
                  style="margin-top: 15px;"
                  placeholder="请输入账号"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="password"
                  clearable
                  style="margin-top: 15px;margin-bottom: 5px;"
                  placeholder="请输入密码"
                  show-password
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="butt">
            <el-button @click="UserSet"> 登录 </el-button>
          </div> 
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><OfficeBuilding /></el-icon>
              <span>公司端</span>
            </span>
          </template>
          <div>
            <el-form>
              <el-form-item prop="username">
                <el-input
                  v-model="username"
                  clearable
                  style="margin-top: 15px;"
                  placeholder="请输入账号"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="password"
                  clearable
                  style="margin-top: 15px;margin-bottom: 5px;"
                  placeholder="请输入密码"
                  show-password
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="butt">
            <el-button @click="CompanySet"> 登录 </el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
  </div>
</div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
const $router = useRouter();
let username = "admin";
let password = "1234";

const UserSet = () => {
  localStorage.setItem("isLogin", 1);
  $router.push("/user");
};

const CompanySet = () => {
  localStorage.setItem("isLogin", 1);
  $router.push("/company");
};

</script>

<style>
.custom-tabs-label .el-icon {
  vertical-align: middle;
}
.custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
  font-size: 20px;
}
.tags{
  font-size: 3rem;
  margin-top: 50px; /* 可选：设置顶部边距 */
}
::-webkit-input-placeholder {
  color: rgb(51, 189, 239);
}

.loginbody {
  width: 100%;
  height: 100%;
  /* 主层必须为相对定位,否则伪元素的图片将不符合预期 */
  position: relative;
}

.loginbody:before {
  /* 下面4行代码确保背景图覆盖主层 */
  background: url(../assets/login/bg.png);
  background-size: cover;
  width: 100%;
  height: 100%;
  /* 插入空内容，必须要的样式 */
  content: '';
  /* 绝对定位，确保背景图起点在主层的0,0位置 */
  position: absolute;
  left: 0;
  top: 0;
  /*避免遮盖其他元素*/
  z-index: -1;
  /* 滤镜效果 */
  -webkit-filter: opacity(50%);
  filter: opacity(100%);
}
.logintext {
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  position: fixed;
  top: -14%;
  left: 14%;
}
.logindata {
  width: 400px;
  height: 400px;
  position: fixed;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.tool {
  display: flex;
  justify-content: space-between;
  color: #606266;
}
.butt {
  margin-top: 10px;
  text-align: center;
}
</style>
