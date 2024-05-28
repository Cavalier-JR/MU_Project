<template>
  <div class="common-layout">
    <el-container class="box">
      <!-- 左侧菜单栏 -->
      <el-aside class="el-aside">
        <h1 class="logoBox">欢迎您！</h1>
        <el-menu
          active-text-color="#97FFFF"
          background-color="#27B2BD"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          :router="true"
        >
          <template v-for="item in asideMenu">
            <!-- 两级菜单 -->
            <template v-if="item.subs">
              <el-sub-menu :index="item.title" :key="item.title">
                <!-- 一级菜单标题 -->
                <template #title>
                  <el-icon><document /></el-icon>
                  <span>{{ item.title }}</span>
                </template>
                <!-- 二级菜单标题 -->
                <template v-for="subItem in item.subs" :key="subItem.index">
                  <el-menu-item
                    :index="subItem.index"
                    @click="() => handleMenuItem(subItem)"
                    >{{ subItem.title }}</el-menu-item
                  >
                </template>
              </el-sub-menu>
            </template>

            <!-- 一级菜单 -->
            <template v-else>
              <el-menu-item
                :index="item.index"
                :key="item.title"
                @click="() => handleMenuItem(item)"
              >
                <el-icon><document /></el-icon>
                <span>{{ item.title }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-aside>

      <el-container>
         <!-- header头部菜单 -->
         <el-header class="header">
          <!-- 标题和信安公司 -->
          <div class="header-left">
            <h2>ERASER：面向多模态数据的隐私遗忘系统</h2>
          </div>
          <div class="header-right">
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#27B2BD"
            text-color="#fff"
            active-text-color="#5C3317"
          >
            <el-menu-item index="1">信安公司</el-menu-item>
            <el-menu-item index="2" @click="exitLogin">退出登陆</el-menu-item>
          </el-menu>
          </div>
        </el-header>

        <!-- 主体模块：标签页 + 当前路由内容 -->
        <el-main class="el-main">
          <el-tabs
            type="border-card"
            v-model="activeTabName"
            class="demo-tabs"
            @tab-remove="handleRemove"
            @tab-click="handleSwitchRoute"
          >
            <el-tab-pane
              v-for="item in editableTabs"
              :key="item.index"
              :label="item.title"
              :name="item.index"
              :closable="handleisClose(item)"
            >
              <router-view />
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { ElMessageBox } from "element-plus";
export default {
  name: "MainLayout",
  mounted() {
  },
  data() {
    return {
      //当前选项卡
      activeTabName: "Companyhome",
      //需要显示的标签数组
      editableTabs: [
        {
          title: "首页",
          index: "Companyhome",
        },
      ],
      //左侧菜单选项配置
      asideMenu: [
        {
          title: "首页",
          index: "Companyhome",
        },
        {
          title: "遗忘记录",
          index: "Forgotten_record",
        },
        {
          title: "投毒遗忘",
          index: "Poisoning_protection",
        },
        {
          title: "优化建议",
          index: "Advice",
        },
      ],
    };
  },
  components: {
    Document,
    IconMenu,
    Location,
    Setting,
  },
  watch: {
    activeTabName: function () {
      console.log("高亮的index值", this.activeTabName);
    },
  },
  methods: {
    handleisClose(item) {
      if (item.index == "home") {
        return false;
      }
      return true;
    },
    //点击二级菜单标题 和 没有下一级菜单的标题
    //添加显示的标签
    handleMenuItem(obj) {
      //高亮设置
      this.activeTabName = obj.index;
      let result = this.editableTabs.findIndex((item) => {
        return item.index == obj.index;
      });
      if (result != -1) {
        return;
      }
      this.editableTabs.push(obj);
      this.$router.push("/company/" + obj.index);
    },

    //点击切换tab标签，切换组件
    handleSwitchRoute(tabsPaneContext) {
      let tabPaneName = tabsPaneContext.paneName;
      //处理一个特殊情况，首页的index 为 '' ，这里取得值为0
      if (tabPaneName == 0) {
        tabPaneName = "";
      }
      this.$router.push("/company/" + tabPaneName); // TODO 这行console 报错 有bug
    },

    //(1)移除标签，（2）返回前一个路由
    //删除: 需要当前索引 ，设置路由和高亮，上一个对象的index
    handleRemove(tabPaneName) {
      let tempArr = this.editableTabs;
      let eleIndex = this.editableTabs.findIndex((item) => {
        return item.index == tabPaneName;
      });
      //上一个路由的index
      let routeIndex;
      for (let p in tempArr) {
        if (tempArr[p].index == tabPaneName) {
          routeIndex = tempArr[p - 1].index;
        }
      }
      //高亮和退到前一个路由
      this.activeTabName = routeIndex;
      this.$router.push("/company/" + routeIndex);
      //删除当前关闭的路由标签
      this.editableTabs.splice(eleIndex, 1);
    },

    //退出登陆
    exitLogin() {
      ElMessageBox.confirm("真的要退出登陆吗?", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          localStorage.removeItem("isLogin");
          this.$router.push("/login");
        })
        .catch(() => {
          //取消：就不做任何提示了
        });
    },
  },
};
</script>

<style scoped>
.logoBox {
  position: absolute;
  top: 18px;
  left: 50px;
  font-size: 22px;
  color: #fff;
}
.box {
  width: 100vw;
  height: 100vh;
  background-color: #27B2BD;
}
.header {
  padding: 0;
  height: 58px;
  padding:0 10px;
}
/* 将消息中心和我的控制台摆放在最右侧 */
.el-menu--horizontal {
  margin-top: -2px;
  justify-content: flex-end;
  width:400px;
}

/* 去除默认的边框样式 */
.el-header .el-menu {
  border-bottom: none;
}
.el-aside .el-menu {
  border-right: none;
}

.el-main {
  background-color: #e9eef3;
}

.el-aside {
  width: 180px;
  background: #545c64;
  padding-top: 58px;
}

/* 标签页样式 */
/* .demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
} */
.el-tabs--border-card .el-tabs__content {
  padding: 0;
}
.el-tabs--border-card > .el-tabs__content {
  padding: 0px;
}
.el-main .el-tabs__content {
  padding: 0 !important;
}
.demo-tabs > .el-tabs__content {
  background-color: blue;
  padding: 0 !important;
}
.header-left {
  float: left;
  font-family: "抖音体";
  margin-left: 30%;
  line-height: 58px;
}
.header-left h2 {
  color: #fff;
  font-size: 20px;
}

.header-right {
  float: right;
  margin-right: 20px;
  line-height: 58px;
}

.header-right .el-menu-demo {
  float: right;
}
</style>
