<template>
  <div class="features171-layout349 thq-section-padding">
    <div class="features171-max-width thq-section-max-width">
      <div class="features171-content">
        <div class="features171-section-title">
          <div class="features171-content1">
            <h2 class="thq-heading-2">
              <i class="fas fa-star" style="color: rgb(122, 97, 220);"></i> {{ feature1Title }}
            </h2>
            <p class="thq-body-large">{{ feature1Description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features171',
  props: {
    feature1Title: {
      type: String,
      default: '文本遗忘',
    },
    feature1Description: {
      type: String,
      default:
        '发现您的隐私信息以文本的形式被泄露了？不用担心，文本遗忘为您擦除模型中的信息',
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
  /* gap: var(--dl-space-space-oneandhalfunits); */
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.features171-section-title {
  /* gap: var(--dl-space-space-oneandhalfunits); */
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.features171-content1 {
  /* gap: var(--dl-space-space-oneandhalfunits); */
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
