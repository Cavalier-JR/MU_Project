<template>
  <div class="features18-layout349 thq-section-padding">
    <div class="features18-max-width thq-section-max-width">
      <div class="features18-content">
        <div class="features18-section-title">
          <span class="thq-body-small">{{ feature1Slogan }}</span>
          <div class="features18-content1">
            <h2 class="thq-heading-2">{{ feature1Title }}</h2>
            <p class="thq-body-large">{{ feature1Description }}</p>
          </div>
        </div>
      </div>
      <div class="features18-image-container">
        <img
          :alt="feature1ImageAlt"
          :src="feature1ImageSrc"
          class="thq-img-ratio-16-9"
        />
      </div>
    </div>
  </div>
</template>

<script>
import partPic from '../../assets/partPic.png'; // Import the local image

export default {
  name: 'Features18',
  props: {
    feature1ImageSrc: {
      type: String,
      default:
      partPic,
    },
    feature1ImageAlt: {
      type: String,
      default: 'Data Forgetting Solutions',
    },
    feature1Slogan: {
      type: String,
      default: '平衡隐私和准确率',
    },
    feature1Title: {
      type: String,
      default: '图片部分遗忘',
    },
    feature1Description: {
      type: String,
      default:
        '我们的解决方案侧重于有效地忘记图像和文本数据，同时保持模型的效用，确保各种情况下的隐私。',
    },
  },
}
</script>

<style scoped>
.features18-layout349 {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.features18-max-width {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  align-items: center;
}
.features18-content {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.features18-section-title {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features18-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features18-image-container {
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;
}
@media(max-width: 991px) {
  .features18-max-width {
    gap: var(--dl-space-space-twounits);
    flex-direction: column-reverse;
  }
}
</style>
