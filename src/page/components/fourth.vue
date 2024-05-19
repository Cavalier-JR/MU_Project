<template>
  <div class="features171-layout349 thq-section-padding">
    <div class="features171-max-width thq-section-max-width">
      <div class="features171-content">
        <div class="features171-section-title">
          <!-- <span class="thq-body-small">{{ feature1Slogan }}</span> -->
          <div class="features171-content1">
            <h2 class="thq-heading-2">
              <i class="fas fa-user" style="color: rgb(97, 220, 177);"></i> {{ feature1Title }}
            </h2>
            <p class="thq-body-large">{{ feature1Description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import textPic from '../../assets/textPic.png';

export default {
  name: 'Features171',
  props: {
    feature1Title: {
      type: String,
      default: '文本遗忘',
    },
    feature1Slogan: {
      type: String,
      default: '根据您特定的数据隐私需求量身定制',
    },
    feature1ImageSrc: {
      type: String,
      default:
      textPic,
    },
    feature1ImageAlt: {
      type: String,
      default: 'Customized Forgetting Solutions Image',
    },
    feature1Description: {
      type: String,
      default:
        '这一技术可以广泛应用于各个领域，如医疗保健、金融服务、社交媒体等，为企业和用户之间的数据交换提供了更加安全可靠的保障',
    },
  },
}
</script>

<style scoped>
.features171-layout349 {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
  padding-bottom: 0px;
  padding-top: 0px;
}
.features171-max-width {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  align-items: center;
}
.features171-image-container {
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;
}
.features171-content {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.features171-section-title {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features171-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
@media(max-width: 991px) {
  .features171-max-width {
    gap: var(--dl-space-space-twounits);
    flex-direction: column;
  }
}
</style>
