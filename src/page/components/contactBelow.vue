<template>
  <div class="contact4-contact20 thq-section-padding">
    <div class="contact4-max-width thq-section-max-width">
      <div class="contact4-section-title">
        <span class="thq-body-small">{{ content2 }}</span>
        <div class="contact4-content">
          <h2 class="thq-heading-2">{{ heading1 }}</h2>
          <p class="contact4-text2 thq-body-large">{{ content1 }}</p>
        </div>
      </div>
      <div class="contact4-row">
        <div class="contact4-content1">
          <svg viewBox="0 0 1024 1024" class="thq-icon-medium">
            <path
              d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
            ></path>
          </svg>
          <div class="contact4-contact-info">
            <div class="contact4-content2">
              <h3 class="contact4-text3 thq-heading-3">Email</h3>
              <p class="contact4-text4 thq-body-large">{{ content3 }}</p>
            </div>
            <span class="contact4-email thq-body-small">{{ email1 }}</span>
          </div>
        </div>
        <div class="contact4-content3">
          <svg viewBox="0 0 1024 1024" class="contact4-icon2 thq-icon-medium">
            <path
              d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"
            ></path>
          </svg>
          <div class="contact4-contact-info1">
            <div class="contact4-content4">
              <h3 class="contact4-text5 thq-heading-3">Phone</h3>
              <p class="contact4-text6 thq-body-large">{{ content4 }}</p>
            </div>
            <span class="contact4-phone thq-body-small">{{ phone1 }}</span>
          </div>
        </div>
        <div class="contact4-content5">
          <svg viewBox="0 0 1024 1024" class="contact4-icon4 thq-icon-medium">
            <path
              d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"
            ></path>
          </svg>
          <div class="contact4-contact-info2">
            <div class="contact4-content6">
              <h3 class="contact4-text7 thq-heading-3">Office</h3>
              <p class="contact4-text8 thq-body-large">{{ content5 }}</p>
            </div>
            <span class="contact4-address thq-body-small">{{ address1 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact4',
  props: {
    email1: {
      type: String,
      default: 'xxx@google.com',
    },
    content2: {
      type: String,
      default: 'xxxxxxxxxxxxxxxxxxxxxx',
    },
    address1: {
      type: String,
      default: '456 Test Ave, Bucharest',
    },
    heading1: {
      type: String,
      default: '联系我们',
    },
    content1: {
      type: String,
      default: 'aaaaaaaaa',
    },
    phone1: {
      type: String,
      default: '+86 111-1111-1111',
    },
    content3: {
      type: String,
      default:
        'xxxxxxxxxxxxxxxxxxxxxx',
    },
    content4: {
      type: String,
      default:
        'xxxxxxxxxxxxxxxxxxxxxx',
    },
    content5: {
      type: String,
      default:
        'xxxxxxxxxxxxxxxxxxxxxx',
    },
  },
}
</script>

<style scoped>
.contact4-contact20 {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.contact4-max-width {
  gap: var(--dl-space-space-twounits);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.contact4-section-title {
  gap: var(--dl-space-space-unit);
  width: auto;
  display: flex;
  max-width: 800px;
  align-self: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.contact4-content {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.contact4-text2 {
  text-align: center;
}
.contact4-row {
  gap: 48px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.contact4-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  width: auto;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
.contact4-contact-info {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.contact4-content2 {
  gap: 16px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.contact4-text3 {
  align-self: flex-start;
  text-align: center;
}
.contact4-text4 {
  align-self: flex-start;
  text-align: left;
}
.contact4-email {
  align-self: flex-start;
  text-align: center;
}
.contact4-content3 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  width: auto;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.contact4-icon2 {
  align-self: flex-start;
}
.contact4-contact-info1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.contact4-content4 {
  gap: 16px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.contact4-text5 {
  align-self: stretch;
  text-align: left;
}
.contact4-text6 {
  text-align: left;
}
.contact4-phone {
  align-self: flex-start;
  text-align: center;
}
.contact4-content5 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  width: auto;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.contact4-icon4 {
  align-self: flex-start;
}
.contact4-contact-info2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.contact4-content6 {
  gap: 16px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
.contact4-text7 {
  align-self: flex-start;
  text-align: left;
}
.contact4-text8 {
  text-align: left;
}
.contact4-address {
  align-self: flex-start;
  text-align: left;
}
@media(max-width: 767px) {
  .contact4-row {
    flex-direction: column;
  }
}
</style>
