<template>
  <div class="features18-layout349 thq-section-padding">
    <div class="features18-max-width thq-section-max-width">
      <div class="features18-content">
        <div class="features18-section-title">

          <div class="features18-content1">
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
export default {
  name: 'Features18',
  props: {
    feature1Title: {
      type: String,
      default: '图片部分遗忘',
    },
    feature1Description: {
      type: String,
      default:
        '图片里的某个部分泄露了您的隐私？来这里解决这个问题吧！',
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
  padding-bottom: 0px;
  padding-top: 0px;
}
.features18-max-width {
  /* gap: var(--dl-space-space-fiveunits); */
  display: flex;
  align-items: center;
  padding-bottom: 0px;
  padding-top: 0px;
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
  /* gap: var(--dl-space-space-oneandhalfunits); */
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
