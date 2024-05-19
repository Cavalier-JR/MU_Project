<template>
  <el-card style="max-width: 1000px; margin: 0 auto;">
    <template #header>
      <div class="card1_title">
        <p>您好！欢迎来到遗忘系统</p>
      </div>
    </template>
    <div class="card-content">
      <p> 作为你的隐私保护伙伴，您可以上传不同的图片让我遗忘哦！ </p>
      <br>
      <p> 想知道我们能干什么？可以看下面!可以在浏览器收藏我们的地址，下次使用更高效哦~ </p>
    </div> 

    <div class="card-content">
      <el-card style="max-width: 1000px;display: inline-block;margin-top:15px;" shadow="always">
        <div class="home-features5"><app-features17></app-features17></div>
      </el-card>
      <el-card style="max-width: 1000px;display: inline-block;" shadow="always">
        <div class="home-features6"><app-features18></app-features18></div>
      </el-card>
      <el-card style="max-width: 1000px;display: inline-block;" shadow="always">
        <div class="home-features7"><app-features171></app-features171></div>
      </el-card>
    </div>
    
  </el-card>
  

</template>


<script>
import AppFeatures17 from '../components/second.vue'
import AppFeatures18 from '../components/third.vue'
import AppFeatures171 from '../components/fourth.vue'
import AppCta1 from '../components/fiveth.vue'



export default {
  name: 'Home',
  props: {},
  components: {
    AppFeatures17,
    AppFeatures18,
    AppFeatures171,
    AppCta1,
  },
  metaInfo: {
    title: 'Incomplete Dual Hamster',
    meta: [
      {
        property: 'og:title',
        content: 'Incomplete Dual Hamster',
      },
    ],
  },
}
</script>


<style scoped>
.card1_title {
  margin-top: 10px; /* 可选：设置顶部边距 */
  margin-bottom: 15px;
  text-align: left;
  font-size: 25px; /* 设置字体大小 */
}
.card-content {
  font-size: 14px;
}




.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-navbar1 {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-hero2 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-logos3 {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-gallery4 {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-features5 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-features6 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-features7 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-cta8 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-faq9 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-contact10 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-footer11 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<!-- <template>
  <div class="home-container">
    <div class="home-features5"><app-features17></app-features17></div>
    <div class="home-logos3"></div>
    <div class="home-features6"><app-features18></app-features18></div>
    <div class="home-logos3"></div>
    <div class="home-features7"><app-features171></app-features171></div>
  </div>
</template>

<script>
import AppHero3 from '../components/first.vue'
import AppFeatures17 from '../components/second.vue'
import AppFeatures18 from '../components/third.vue'
import AppFeatures171 from '../components/fourth.vue'
import AppCta1 from '../components/fiveth.vue'
import AppFaq1 from '../components/faq1.vue'
import AppContact4 from '../components/contactBelow.vue'


export default {
  name: 'Home',
  props: {},
  components: {
    AppHero3,
    AppFeatures17,
    AppFeatures18,
    AppFeatures171,
    AppCta1,
    AppFaq1,
    AppContact4,
  },
  metaInfo: {
    title: 'Incomplete Dual Hamster',
    meta: [
      {
        property: 'og:title',
        content: 'Incomplete Dual Hamster',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-navbar1 {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-hero2 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-logos3 {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-gallery4 {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-features5 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-features6 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-features7 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-cta8 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-faq9 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-contact10 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-footer11 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style> -->
