<template>
  <a-layout>
    <a-layout-header>
      <nuxt-link to="/">
        <div style="display: flex; align-items: center;">
          <logo-icon class="logo-icon" />
          <h1 class="logo">にゃんかる</h1>
        </div>
      </nuxt-link>
      <div class="header-howto">
        <font-awesome-icon icon="question-circle" class="info-icon" />
        <span>使い方</span>
      </div>
    </a-layout-header>
    <a-layout-content>
      <Nuxt />
    </a-layout-content>
    <a-layout-footer>
      <div class="footer-inner-container">
        <nuxt-link to="/">
          利用規約
        </nuxt-link>
        <nuxt-link to="/">
          著作権について
        </nuxt-link>
        <a href="https://twitter.com/NeoSavage_" target="_blank">
          お問い合わせ
        </a>
      </div>
    </a-layout-footer>
  </a-layout>
</template>
<script>
import LogoIcon from '~/assets/cat.svg'
export default {
  components: {
    'logo-icon': LogoIcon,
  },
}
</script>
<style lang="scss">
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.ant-layout {
  font-family: 'M PLUS 1p', sans-serif;
  .ant-layout-header {
    background-color: rgb(255, 255, 255);
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    height: 7vh;
    .logo {
      font-weight: 500;
      margin: 0;
      color: black;
    }
    .logo-icon {
      width: 24px;
      height: 24px;
      margin-right: 0.3rem;
    }
    .header-howto {
      display: flex;
      align-items: center;
      margin-right: 10px;
      cursor: pointer;
      &:hover {
        span {
          text-decoration: underline;
        }
      }
      .info-icon {
        margin-right: 4px;
        font-size: 18px;
        font-weight: 600;
        color: rgb(254, 194, 18);
      }
    }
  }
  .ant-layout-content {
    background-color: #fff;
  }
  a {
    color: black;
  }
  .ant-layout-footer {
    height: 20vh;
    background-color: #fff;

    .footer-inner-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      a {
        color: rgb(92, 92, 92);
        white-space: nowrap;
      }
    }
  }
}
.ant-select-selection-selected-value {
  text-align: left;
  width: 100%;
}
</style>
