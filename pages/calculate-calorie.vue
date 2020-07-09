<template>
  <div class="container">
    <div>
      <div class="result" style="margin-bottom: 2.5rem;">
        <div>
          <span>1日に必要なエネルギー量は:</span>
        </div>
        <h1 style="display: inline-block; margin: 0; font-size: 50px;">
          {{ calorie }}
        </h1>
        <span>Kcal</span>
        <div>
          <nuxt-link to="/" style="font-size: 12px; color: rgb(143, 143, 143);">
            計算式について
          </nuxt-link>
        </div>
      </div>
      <div class="input-item">
        <div style="margin-bottom: 0.3rem; text-align: left;">
          ねこの重さ
        </div>
        <div style="display: flex; flex-direction: start; align-items: center;">
          <a-input-number
            :value="weight"
            @change="handleWeightChange"
            :min="0"
            :max="10"
            :step="0.1"
            size="large"
          />
          <span style="padding-left: 8px;">Kg</span>
        </div>
      </div>
      <div class="input-item">
        <div style="margin-bottom: 0.3rem; text-align: left;">
          ねこの体型
        </div>
        <a-select
          :value="bcs"
          @change="handleBcsChange"
          default-value="default"
          size="large"
          style="width: 200px;"
        >
          <a-select-option value="bcs3">
            ふつう体型
          </a-select-option>
          <a-select-option value="bcs4">
            太り気味
          </a-select-option>
          <a-select-option value="bcs2">
            痩せ気味
          </a-select-option>
          <a-select-option value="bcs5">
            肥満
          </a-select-option>
          <a-select-option value="bcs1">
            痩せ
          </a-select-option>
        </a-select>
      </div>
      <div style="margin-bottom: 1rem;">
        <nuxt-link to="/calculate-food">
          一回に必要な餌の量も計算してみる→
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="/">
          その他ライフステージの猫はこちら→
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState('values', ['calorie', 'weight', 'bcs']),
  },
  watch: {
    weight() {
      this.calculateCalorie()
    },
    bcs() {
      this.calculateCalorie()
    },
  },
  methods: {
    ...mapMutations('values', [
      'handleWeightChange',
      'handleBcsChange',
      'calculateCalorie',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  height: 100%;
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
