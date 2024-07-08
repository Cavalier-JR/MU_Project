<template>
  <div class="loginbody">
    <div style="width: 100%;height: 100%;">
    <p style="margin:auto auto;width: 24%;height: 50%;">
    <div style="margin:auto auto;width: 100%;height: 75%;"> </div>
    <div style="margin:auto auto;width: 90%;height: 16%;"> 
      <h2 class="logintext"> 欢迎来到遗忘学习系统 </h2>
    </div>
    <div style="margin:auto auto;width: 70%;height: 9%;">
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
                  style="margin-top: 10px; font-size: 18px;"
                  size="large"
                  placeholder="请输入账号"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="password"
                  clearable
                  style="margin-top: 10px;margin-bottom: 5px; font-size: 18px;"
                  size="large"
                  placeholder="请输入密码"
                  show-password
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="butt">
            <el-button @click="UserSet" type="primary"> 登录 </el-button>
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
            <el-form @submit.prevent="submitForm">
              <el-form-item prop="companyname">
                <el-input
                  v-model="companyname"
                  clearable
                  style="margin-top: 10px;font-size: 18px;"
                  size="large"
                  placeholder="请输入账号"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="password"
                  clearable
                  style="margin-top: 10px;margin-bottom: 5px;font-size: 18px"
                  size="large"
                  placeholder="请输入密码"
                  show-password
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="butt">

            <el-button @click="CompanySet " type="primary"> 登录 </el-button>

          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    </p>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { useRouter, useRoute } from "vue-router";
const $router = useRouter();
let username = "admin";
let companyname = "company";
let password = "123456789";

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
  background: url(../assets/login/bg.png);
  background-size: cover;
}

.logintext {
  line-height: 40px;
  text-align: center;
  font-size: 32px;
  font-weight: bolder;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
.login_title {
  transform: translate(-50%, -50%);
}
.logindata {
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
