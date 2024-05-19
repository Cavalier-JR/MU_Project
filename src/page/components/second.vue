<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <div class="features17-layout349 thq-section-padding">
    <div class="features17-max-width thq-section-max-width">
      <div class="features17-content">
        <div class="features17-section-title">
      
          <div class="features17-content1">
            <div class="feature-info">
              <h2 class="thq-heading-2">
                <i class="fas fa-home" style="color: rgb(220, 116, 97);"></i> {{ feature1Title }}
              </h2>
              <p class="thq-body-large">{{ feature1Description }}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import classPic from '../../assets/classPic.png'; // Import the local image

export default {
  name: 'Features17',
  props: {
    feature1Title: {
      type: String,
      default: '图片类别遗忘',
    },
    feature1Slogan: {
      type: String,
      default: '符合数据保护法规要求',
    },
    feature1ImageSrc: {
      type: String,
      default:
      classPic,
    },
    feature1Description: {
      type: String,
      default:
        '我们的解决方案旨在满足不同用户和信息服务提供商的独特要求，在保持模型实用性的同时确保高效的数据遗忘。',
    },
  },
}
</script>

<style scoped>
.features17-layout349 {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
  padding-bottom: 0px;
  padding-top: 0px;
}
.features17-max-width {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  align-items: center;
}
.features17-image-container {
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;
}
.features17-content {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.features17-section-title {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features17-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
@media(max-width: 991px) {
  .features17-max-width {
    gap: var(--dl-space-space-twounits);
    flex-direction: column;
  }
}
</style>
