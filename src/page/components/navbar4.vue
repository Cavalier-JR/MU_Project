<template>
  <div class="navbar4-container">
    <header data-thq="thq-navbar" class="navbar4-navbar-interactive">
      <img :alt="logoAlt" :src="logoSrc" class="navbar4-image1" />
      <div data-thq="thq-navbar-nav" class="navbar4-desktop-menu">
        <nav class="navbar4-links">
          <span class="thq-link thq-body-small">{{ link1 }}</span>
          <span class="thq-link thq-body-small">{{ link2 }}</span>
          <span class="thq-link thq-body-small">{{ link3 }}</span>
          <span class="thq-link thq-body-small">{{ link4 }}</span>
          <span class="thq-link thq-body-small">{{ link5 }}</span>
        </nav>
        <div class="navbar4-buttons">
          <button class="thq-button-filled">{{ action1 }}</button>
          <button class="thq-button-outline">{{ action2 }}</button>
        </div>
      </div>
      <div data-thq="thq-burger-menu" class="navbar4-burger-menu">
        <svg viewBox="0 0 1024 1024" class="navbar4-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
      </div>
      <div data-thq="thq-mobile-menu" class="navbar4-mobile-menu">
        <div class="navbar4-nav">
          <div class="navbar4-top">
            <img :alt="logoAlt" :src="logoSrc" class="navbar4-logo" />
            <div data-thq="thq-close-menu" class="navbar4-close-menu">
              <svg viewBox="0 0 1024 1024" class="navbar4-icon2">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                ></path>
              </svg>
            </div>
          </div>
          <nav class="navbar4-links1">
            <span class="thq-link thq-body-small">{{ link1 }}</span>
            <span class="thq-link thq-body-small">{{ link2 }}</span>
            <span class="thq-link thq-body-small">{{ link3 }}</span>
            <span class="thq-link thq-body-small">{{ link4 }}</span>
            <span class="thq-link thq-body-small">{{ link5 }}</span>
          </nav>
        </div>
        <div class="navbar4-buttons1">
          <button class="thq-button-filled">Login</button>
          <button class="thq-button-outline">Register</button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Navbar4',
  props: {
    link1: {
      type: String,
      default: 'Home',
    },
    link5: {
      type: String,
      default: 'Link5',
    },
    link2: {
      type: String,
      default: 'Services',
    },
    logoSrc: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
    },
    action2: {
      type: String,
      default: 'Sign Up',
    },
    logoAlt: {
      type: String,
      default: 'Data Forgetting Solutions',
    },
    link3: {
      type: String,
      default: 'About Us',
    },
    action1: {
      type: String,
      default: 'Login',
    },
    link4: {
      type: String,
      default: 'Contact',
    },
  },
}
</script>

<style scoped>
.navbar4-container {
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  background-color: var(--dl-color-theme-neutral-light);
}
.navbar4-navbar-interactive {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.navbar4-image1 {
  height: 3rem;
}
.navbar4-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.navbar4-links {
  gap: var(--dl-space-space-twounits);
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: var(--dl-space-space-twounits);
  flex-direction: row;
  justify-content: flex-start;
}
.navbar4-buttons {
  gap: var(--dl-space-space-twounits);
  display: flex;
  align-items: center;
  margin-left: var(--dl-space-space-twounits);
}
.navbar4-burger-menu {
  display: none;
}
.navbar4-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.navbar4-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: var(--dl-space-space-twounits);
  z-index: 100;
  position: absolute;
  flex-direction: column;
  background-color: var(--dl-color-theme-neutral-light);
}
.navbar4-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.navbar4-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.navbar4-logo {
  height: 3rem;
}
.navbar4-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar4-icon2 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.navbar4-links1 {
  gap: var(--dl-space-space-unit);
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.navbar4-buttons1 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
}
@media(max-width: 767px) {
  .navbar4-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .navbar4-desktop-menu {
    display: none;
  }
  .navbar4-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media(max-width: 479px) {
  .navbar4-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .navbar4-mobile-menu {
    padding: var(--dl-space-space-unit);
  }
}
</style>
