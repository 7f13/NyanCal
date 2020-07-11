<template>
  <div class="container">
    <div class="page-content-container">
      <h1>サービス利用規約</h1>
      <hr style="margin-bottom: 5vh;" />
      <section>
        <h2>利用規約について</h2>
        <p>
          本アプリでは、特に規約や利用制限を設けておりません。
          基本的には自己責任の上で、ご自由に使用して頂いてもらって構いません。
          本アプリを使用し、算出した結果についても同様です。
          但し、本アプリにて使用している画像やアイコンなどは、
          運営者の制作物ではないため、使用される場合は制作元の指示に沿ってご使用ください。
        </p>
        <p>制作元へのリンクは以下をご覧ください。</p>
        <div style="margin: 1rem 0;">
          <nuxt-link
            to="/credit"
            style="color: #212121; text-decoration: underline;"
          >
            クレジット
          </nuxt-link>
        </div>
      </section>
      <section>
        <h2>免責事項</h2>
        <ol>
          <li>
            運営者は、本アプリの利用により発生したユーザの損害については、一切の賠償責任を負いません。
          </li>
          <li>
            本アプリは、当社がその時点で提供可能なものとします。運営者は提供する情報、コンテンツおよびソフトウェア等の情報についてその完全性、正確性、適用性、有用性、利用可能性、
            安全性、確実性等につきいかなる保証も一切しません。
          </li>
          <li>
            運営者は、本アプリのバグその他を補修する義務および本アプリを改良または改善する義務は負いません。
          </li>
        </ol>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  margin: 2.8rem auto;
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  color: black;
  padding: 0 2rem;
  h1,
  p {
    margin: 0;
  }
  section {
    margin-bottom: 1.5rem;
  }
  .page-content-container {
    text-align: left;
  }
}
</style>
