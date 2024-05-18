<template>
  <div class="hero3-header9">
    <div class="hero3-content thq-section-padding">
      <div class="hero3-max-width thq-section-max-width thq-flex-row">
        <div class="hero3-column">
          <h1 class="thq-heading-1 hero3-text">{{ heading1 }}</h1>
        </div>
        <div class="hero3-column1">
          <p class="thq-body-large hero3-text1">{{ content1 }}</p>
          <div class="hero3-actions">
            <button class="thq-button-filled hero3-button">
              <span class="thq-body-small">{{ action1 }}</span>
            </button>
            <button class="thq-button-outline hero3-button1">
              <span class="thq-body-small">{{ action2 }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero3',
  props: {
    image1Alt: {
      type: String,
      default: 'Data Forgetting Solutions Image',
    },
    content1: {
      type: String,
      default:
        '面向图像和文本两种模态数据在深度学习模型中的隐私遗忘系统',
    },
    action2: {
      type: String,
      default: '联系我们',
    },
    heading1: {
      type: String,
      default: ' ERASER：面向多模态数据的隐私遗忘系统',
    },
    action1: {
      type: String,
      default: '尝试一下',
    },
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1517883370411-c1acbb943f02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjAxNzQxOHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
  },
}
</script>

<style scoped>
.hero3-header9 {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.hero3-content {
  display: flex;
  justify-content: center;
}
.hero3-max-width {
  align-self: center;
  align-items: center;
}
.hero3-column {
  flex: 1;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.hero3-column1 {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.hero3-actions {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
}
@media(max-width: 991px) {
  .hero3-column {
    width: 100%;
  }
  .hero3-column1 {
    width: auto;
  }
}
@media(max-width: 767px) {
  .hero3-text {
    text-align: center;
  }
  .hero3-text1 {
    text-align: center;
  }
  .hero3-actions {
    width: 100%;
    justify-content: center;
  }
}
@media(max-width: 479px) {
  .hero3-actions {
    flex-direction: column;
  }
  .hero3-button {
    width: 100%;
  }
  .hero3-button1 {
    width: 100%;
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
