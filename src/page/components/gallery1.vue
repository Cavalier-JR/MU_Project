<template>
  <div class="gallery1-gallery3 thq-section-padding">
    <div class="gallery1-max-width thq-section-max-width">
      <div class="gallery1-section-title">
        <h2 class="gallery1-text thq-heading-2">{{ heading1 }}</h2>
        <span class="gallery1-text1 thq-body-large">{{ content1 }}</span>
      </div>
      <div class="gallery1-content">
        <div class="gallery1-container">
          <img :alt="image1Alt" :src="image1Src" class="thq-img-ratio-4-3" />
        </div>
        <div class="gallery1-container1">
          <img :alt="image2Alt" :src="image2Src" class="thq-img-ratio-4-3" />
        </div>
        <div class="gallery1-container2">
          <img :alt="image3Alt" :src="image3Src" class="thq-img-ratio-4-3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery1',
  props: {
    image3Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1462804993656-fac4ff489837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjAxNzQxOXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    content1: {
      type: String,
      default:
        'Explore our gallery showcasing our efficient data forgetting solutions for image and text data.',
    },
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjAxNzQyMHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image3Alt: {
      type: String,
      default: 'Data Forgetting Solutions Image 3',
    },
    image2Alt: {
      type: String,
      default: 'Data Forgetting Solutions Image 2',
    },
    image2Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjAxNzQyMXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    heading1: {
      type: String,
      default: 'Image Gallery',
    },
    image1Alt: {
      type: String,
      default: 'Data Forgetting Solutions Image 1',
    },
  },
}
</script>

<style scoped>
.gallery1-gallery3 {
  gap: var(--dl-space-space-fiveunits);
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.gallery1-max-width {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.gallery1-section-title {
  gap: var(--dl-space-space-oneandhalfunits);
  width: auto;
  display: flex;
  max-width: 800px;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.gallery1-text {
  text-align: center;
}
.gallery1-text1 {
  text-align: center;
}
.gallery1-content {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
}
.gallery1-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gallery1-container1 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gallery1-container2 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media(max-width: 991px) {
  .gallery1-content {
    align-items: center;
    flex-direction: column;
  }
}
</style>
