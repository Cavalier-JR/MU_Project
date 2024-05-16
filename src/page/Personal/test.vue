<div class="login">
  <div class="loginBox">
    <el-tabs stretch="true">
      <el-tab-pane label="用户端" class="UserTag">
        <h3>用户端登录</h3>
        <div class="form">
          <div class="input">
            <img src="../assets/login/username.png" alt="" />
            <el-input clearable placeholder="请输入用户名" v-model="username"> </el-input>
          </div>
          <div class="input">
            <img src="../assets/login/password.png" alt="" />
            <input type="password" placeholder="请输入密码" v-model="password" />
          </div>
          <div class="btn" @click="UserSet"> 登录 </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="公司端" class="CompanyTag">
        <h3>公司端登录</h3>
        <div class="form">
          <div class="input">
            <img src="../assets/login/username.png" alt="" />
            <input type="text" placeholder="请输入公司账号" v-model="username" />
          </div>
          <div class="input">
            <img src="../assets/login/password.png" alt="" />
            <input type="password" placeholder="请输入密码" v-model="password" />
          </div>
          <div class="btn" @click="CompanySet"> 登录 </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    
  </div>
</div>
</template>