<template>
  <div class="container">
    <div class="page-content-container">
      <h1>クレジット</h1>
      <hr style="margin-bottom: 5vh;" />
      <section>
        <h2>使用させて頂いたもの</h2>
        <p>本アプリでは以下を素材として使用させて頂きました。</p>
        <div style="margin: 2rem 0;">
          <div>
            ・アイコン
          </div>
          <div style="text-align: center;">
            <img
              src="~/static/apple-touch-icon.png"
              alt="使用したアイコン"
              style="padding: 20px;"
            />
            <div>
              Icons made by
              <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from
              <a href="https://www.flaticon.com/" title="Flaticon"
                >www.flaticon.com</a
              >
            </div>
          </div>
        </div>
        <div style="margin: 2rem 0;">
          <div>
            ・メインビジュアル
          </div>
          <div style="text-align: center;">
            <img
              src="~/assets/60135.jpg"
              alt="使用したメインビジュアル"
              style="width: 300px; padding: 20px;"
            />
            <div>
              Food vector created by
              <a href="https://www.freepik.com/free-photos-vectors/Food"
                >studiogstock - www.freepik.com</a
              >
            </div>
          </div>
        </div>
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
  max-width: 600px;
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
