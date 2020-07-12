<template>
  <a-layout>
    <a-layout-header>
      <nuxt-link to="/">
        <div style="display: flex; align-items: center;">
          <logo-icon class="logo-icon" />
          <h1 class="logo">にゃんかる</h1>
        </div>
      </nuxt-link>
      <div class="header-howto" @click="visible = true">
        <font-awesome-icon icon="question-circle" class="info-icon" />
        <span>使い方</span>
      </div>
    </a-layout-header>
    <a-layout-content>
      <Nuxt />
    </a-layout-content>
    <a-layout-footer>
      <div class="footer-inner-container">
        <nuxt-link to="/term-of-service">利用規約について</nuxt-link>
        <nuxt-link to="/credit">クレジット</nuxt-link>
        <a href="https://twitter.com/NeoSavage_" target="_blank"
          >お問い合わせ</a
        >
      </div>
    </a-layout-footer>
    <a-modal v-model="visible" title="アプリの使い方" class="howto-modal">
      <div class="modal-text" @click="closeModal">
        <p style="margin-bottom: 1rem;">
          アプリの使い方をご説明します。
          <br />使い方はとてもシンプルです!
        </p>
        <p>① 画面の入力欄に、猫の体重や体型などを入力します</p>
        <font-awesome-icon icon="arrow-down" />
        <p>② リアルタイムに計算結果が表示されます</p>
        <font-awesome-icon icon="arrow-down" />
        <div
          style="
            text-align: center;
            font-size: 20px;
            font-weight: 800;
            margin-bottom: 1rem;
          "
        >
          以上✨
        </div>
        <p>以下のどちらかからスタートしてください😼</p>
        <div style="margin: 1rem 0;">
          <nuxt-link to="/calculate-calorie" style="color: rbg(28, 28, 28);"
            >簡易バージョン(1歳以上の猫・去勢済み前提)→</nuxt-link
          >
        </div>
        <div>
          <nuxt-link to="/calculate-calorie-more"
            >詳細バージョン(選択肢多)→</nuxt-link
          >
        </div>
      </div>
      <template slot="footer">
        <a-button key="ok" type="primary" @click="visible = false"
          >閉じる</a-button
        >
      </template>
    </a-modal>
  </a-layout>
</template>
<script>
import LogoIcon from '~/assets/cat.svg'
export default {
  components: {
    'logo-icon': LogoIcon,
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    closeModal() {
      this.visible = false
    },
  },
}
</script>
<style lang="scss" scoped>
.howto-modal {
  color: rgb(48, 48, 48);
  font-weight: 500;
  top: 20px;
  a {
    color: #4f4f4f;
    font-weight: 700;
  }
  .modal-text {
    color: rbg(28, 28, 28);
    p {
      margin: 0;
    }
    svg {
      font-size: 14px;
      display: block;
      color: rgb(254, 194, 18);
      margin: 0.5rem auto;
    }
  }
}
</style>
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
  .ant-layout-footer {
    width: 100%;
    padding: 0 2rem;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
