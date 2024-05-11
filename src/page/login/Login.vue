<template>
  <div class="login">
   

    <div class="loginBox">
      <h3>用户登录</h3>
      <span class="deadline"></span>
      <div class="form">
        <div class="input">
          <img src="../../assets/login/username.png" alt="" />
          <input type="text" placeholder="请输入用户名" v-model="username" />
        </div>
        <div class="input">
          <img src="../../assets/login/password.png" alt="" />
          <input type="password" placeholder="请输入密码" v-model="password" />
        </div>
      
        <div class="btn" @click="setFlag">登录</div>
      </div>
    </div>
  </div>
</template>

<script setup>

import Header from "./Header.vue";
import { useRouter, useRoute } from "vue-router";
const $router = useRouter();
let username = "1111";
let password = "2222";

const setFlag = () => {
  localStorage.setItem("isLogin", 1);
  $router.replace("/user");
};
</script>

<style>
.login {
  background-image: url(../../assets/login/bg.png);
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
}
/* .loginbg1 {
  position: absolute;
  left: 50rem;
  top: 45rem;
  width: 30rem;
  height: 50rem;
  background-image: url(../../assets/login/decoration1.png);
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
} */

/* .loginbg2 {
  position: absolute;
  right: 35rem;
  top: 45rem;
  width: 40rem;
  height: 40rem;
  background-image: url(../../assets/login/decoration2.png);
  background-repeat: no-repeat;
  z-index: 1;
} */

.loginBox {
  width: 62rem;
  height: 50rem;
  background-image: url(../../assets/login/loginbox.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25rem;
  margin-left: -31rem;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.loginBox h3 {
  font-size: 3rem;
  font-weight: 600;
  color: rgb(62, 197, 231);
  margin-top: 7rem;
  text-align: center;
}
.deadline {
  display: block;
  width: 10rem;
  height: 0.5rem;
  background: #01cfff;
  border-radius: 0.5rem;
  margin-top: 1rem;
}
.form {
  width: 44.5rem;
  height: 44.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.input {
  width: 28rem;
  height: 5rem;
  line-height: 5rem;
  background-image: url(../../assets/login/input.png);
  display: flex;
  flex-direction: row;
  align-items: center;
}
.input img {
  margin-left: 3rem;
}
.form input {
  border: none;
  outline: none;
  background-color: transparent;
  border: none;
  color: aliceblue;
}
::-webkit-input-placeholder {
  color: rgb(51, 189, 239);
}
.input input {
  width: 18rem;
  height: 2.2rem;
  margin-left: 2rem;
  font-size: 2.4rem;
}
.input .code {
  width: 23rem;
  height: 4.3rem;
  line-height: 1.1rem;
}
.btn {
  width: 16rem;
  height: 5.6rem;
  line-height: 5.6rem;
  text-align: center;
  font-size: 2.5rem;
  color: rgb(250, 250, 250);
  background-image: url(/src/assets/login/login.png);
  cursor: pointer;
  margin-bottom: 5rem;
}
</style>
