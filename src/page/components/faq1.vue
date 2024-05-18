<template>
  <div class="faq1-faq7 thq-section-padding">
    <div class="faq1-max-width thq-section-max-width">
      <div class="thq-flex-column">
        <h2 class="thq-heading-2">{{ heading1 }}</h2>
        <p class="faq1-text1 thq-body-large">{{ content1 }}</p>
      </div>
      <div class="thq-flex-column faq1-list">
        <div class="faq1-list-item1">
          <p class="faq1-faq1-question thq-body-large">{{ faq1Question }}</p>
          <span class="thq-body-small">{{ faq1Answer }}</span>
        </div>
        <div class="faq1-list-item2">
          <p class="faq1-faq2-question thq-body-large">{{ faq2Question }}</p>
          <span class="thq-body-small">{{ faq2Answer }}</span>
        </div>
        <div class="faq1-list-item3">
          <p class="faq1-faq3-question thq-body-large">{{ faq3Question }}</p>
          <span class="thq-body-small">{{ faq3Answer }}</span>
        </div>
        <div class="faq1-list-item4">
          <p class="faq1-faq4-question thq-body-large">{{ faq4Question }}</p>
          <span class="thq-body-small">{{ faq4Answer }}</span>
        </div>
        <div class="faq1-list-item5">
          <p class="faq1-faq5-question thq-body-large">{{ faq5Question }}</p>
          <span class="thq-body-small">{{ faq5Answer }}</span>
        </div>
      </div>
      <div class="thq-flex-column">
        <div class="faq1-content1">
          <h2 class="thq-heading-2">{{ heading2 }}</h2>
          <p class="faq1-text3 thq-body-large">{{ content2 }}</p>
        </div>
        <div class="faq1-container">
          <button class="thq-button-outline faq1-button">
            <span class="thq-body-small">{{ action1 }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ1',
  props: {
    faq4Answer: {
      type: String,
      default:
        '虽然数据遗忘最初可能会导致模型准确性降低，但我们的解决方案旨在通过仔细选择和删除数据点来最大限度地减少这种影响。',
    },
    faq5Question: {
      type: String,
      default: '您的服务可以帮助忘记哪些类型的数据？',
    },
    action1: {
      type: String,
      default: '联系我们',
    },
    faq1Question: {
      type: String,
      default: '什么是数据遗忘？',
    },
    faq4Question: {
      type: String,
      default: '数据遗忘会影响模型准确性吗？',
    },
    faq3Answer: {
      type: String,
      default:
        '我们的服务采用先进的算法和技术来选择性地删除数据，同时保留模型的整体效用，确保隐私和性能之间的平衡。',
    },
    faq3Question: {
      type: String,
      default: '如何确保数据遗忘的有效性？',
    },
    content1: {
      type: String,
      default:
        '常见问题解答',
    },
    content2: {
      type: String,
      default: 'aaaaaaaaaaaaaaaaaaa',
    },
    heading2: {
      type: String,
      default: '仍然有问题？',
    },
    heading1: {
      type: String,
      default: 'FAQs',
    },
    faq5Answer: {
      type: String,
      default:
        '我们的服务能够处理图像和文本数据，为不同类型的隐私敏感场景提供量身定制的解决方案。',
    },
    faq1Answer: {
      type: String,
      default:
        '数据遗忘使模型忘记用户的某个隐私信息',
    },
    faq2Answer: {
      type: String,
      default:
        '数据遗忘对于维护用户隐私和遵守GDPR等数据保护法规至关重要。它有助于防止对敏感信息的未授权访问。',
    },
    faq2Question: {
      type: String,
      default: '为什么数据遗忘很重要？',
    },
  },
}
</script>

<style scoped>
.faq1-faq7 {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.faq1-max-width {
  gap: var(--dl-space-space-fiveunits);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.faq1-text1 {
  text-align: center;
}
.faq1-list-item1 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.faq1-faq1-question {
  font-style: normal;
  text-align: center;
  font-weight: 600;
}
.faq1-list-item2 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.faq1-faq2-question {
  font-style: normal;
  text-align: center;
  font-weight: 600;
}
.faq1-list-item3 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.faq1-faq3-question {
  font-style: normal;
  text-align: center;
  font-weight: 600;
}
.faq1-list-item4 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.faq1-faq4-question {
  font-style: normal;
  text-align: center;
  font-weight: 600;
}
.faq1-list-item5 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.faq1-faq5-question {
  font-style: normal;
  text-align: center;
  font-weight: 600;
}
.faq1-content1 {
  gap: 16px;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.faq1-text3 {
  text-align: center;
}
.faq1-container {
  display: flex;
  position: relative;
}
@media(max-width: 991px) {
  .faq1-max-width {
    gap: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 767px) {
  .faq1-text1 {
    text-align: left;
  }
  .faq1-list {
    gap: var(--dl-space-space-twounits);
  }
  .faq1-button {
    width: 100%;
  }
}
</style>
