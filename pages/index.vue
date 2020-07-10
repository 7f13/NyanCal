<template>
  <div class="container">
    <h1 class="app-title">猫のカロリー計算アプリ✨</h1>
    <div>
      <img
        src="~/assets/60135.jpg"
        alt="キャットフードの画像"
        class="top-visual-image"
      />
    </div>
    <div class="app-description">
      おうちの猫に、適切なカロリーを計算してみましょう
    </div>
    <nuxt-link to="/calculate-calorie">
      <div class="button">
        <span>
          はじめる
        </span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 100%;
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  color: black;
  padding: 0 2rem;

  .app-title {
    font-size: 1.7rem;
    font-weight: 800;
  }
  img {
    width: 60%;
    height: auto;
    max-width: 600px;
  }
  .app-description {
    font-size: 1rem;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  .button {
    min-width: 200px;
    min-height: 30px;
    padding: 14px;
    background-color: rgb(254, 194, 18);
    border-radius: 26px;
    font-weight: 600;
    color: black;
  }
}
</style>
