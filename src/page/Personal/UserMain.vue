<template>
  <div class="home-container">
    <!-- <div class="home-navbar1"></div> -->
    <!-- <div class="home-hero2"><app-hero3></app-hero3></div> -->
    
    <!-- <div class="home-gallery4"></div> -->
    <div class="home-features5"><app-features17></app-features17></div>
    <div class="home-logos3"></div>
    <div class="home-features6"><app-features18></app-features18></div>
    <div class="home-logos3"></div>
    <div class="home-features7"><app-features171></app-features171></div>
    <!-- <div class="home-cta8"><app-cta1></app-cta1></div>
    <div class="home-faq9"><app-faq1></app-faq1></div>
    <div class="home-contact10"><app-contact4></app-contact4></div> -->
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
</style>
