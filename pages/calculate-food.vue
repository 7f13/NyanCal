<template>
  <div class="container">
    <div>
      <div class="result" style="margin-bottom: 2.5rem;">
        <div>
          <span>一回に必要な餌の量は:</span>
        </div>
        <h1 style="display: inline-block; margin: 0; font-size: 50px;">
          {{ food }}
        </h1>
        <span>g</span>
        <div>
          <nuxt-link
            to="/about-calculation"
            style="font-size: 12px; color: rgb(143, 143, 143);"
          >
            計算式について
          </nuxt-link>
        </div>
      </div>
      <div class="input-item">
        <div style="margin-bottom: 0.3rem; text-align: left;">
          食事の回数
        </div>
        <div style="display: flex; flex-direction: start; align-items: center;">
          <a-input
            :value="eatTimes"
            @change="handleEatTimesChange"
            type="number"
            :min="0"
            :max="10"
            :step="1"
            size="large"
            style="width: 100px;"
          />
          <span style="padding-left: 8px;">回</span>
        </div>
      </div>
      <div class="input-item">
        <div style="margin-bottom: 0.3rem; text-align: left;">
          餌に含まれる100gあたりのカロリー
        </div>
        <div style="display: flex; flex-direction: start; align-items: center;">
          <a-input
            :value="foodCalorie"
            @change="handleFoodCalorieChange"
            type="number"
            :min="0"
            ```
            :max="500"
            :step="1"
            size="large"
            style="width: 100px;"
          />
          <span style="padding-left: 8px;">Kcal</span>
        </div>
      </div>
      <div style="margin-bottom: 1rem;">
        <nuxt-link to="/calculate-calorie">
          ←戻る
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="/">
          TOPへ
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState('values', ['calorie', 'food', 'eatTimes', 'foodCalorie']),
  },
  watch: {
    eatTimes() {
      this.calculateAmountFood()
    },
    foodCalorie() {
      this.calculateAmountFood()
    },
  },
  methods: {
    ...mapMutations('values', [
      'handleEatTimesChange',
      'handleFoodCalorieChange',
      'calculateAmountFood',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  color: black;
  padding: 0 2rem;

  .input-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
  a {
    color: rgb(92, 92, 92);
    text-decoration: underline;
  }
}
</style>
