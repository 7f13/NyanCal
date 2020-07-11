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
          ねこの重さ
        </div>
        <div style="display: flex; flex-direction: start; align-items: center;">
          <a-input
            type="number"
            step="0.1"
            min="0"
            max="10"
            :value="weight"
            @change="handleWeightChange"
            size="large"
            style="width: 100px;"
          />
          <span style="padding-left: 8px;">Kg</span>
        </div>
      </div>
      <div class="input-item">
        <div style="margin-bottom: 0.3rem; text-align: left;">
          ねこのライフステージ
        </div>
        <a-select
          :value="lifeStage"
          @change="handleLifeStageChange"
          default-value="default"
          size="large"
          style="width: 260px;"
        >
          <a-select-option value="before4month">
            生後4ヶ月未満
          </a-select-option>
          <a-select-option value="4to6month">
            生後4~6ヶ月
          </a-select-option>
          <a-select-option value="7to12month">
            生後7~12ヶ月
          </a-select-option>
          <a-select-option value="notSpayedOrFixed">
            去勢・避妊してない成猫
          </a-select-option>
          <a-select-option value="spayedOrFixed">
            去勢・避妊済みの成猫
          </a-select-option>
          <a-select-option value="older">
            高齢(7歳~)
          </a-select-option>
          <a-select-option value="pregnant">
            妊娠中
          </a-select-option>
          <a-select-option value="lactating">
            授乳中
          </a-select-option>
        </a-select>
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
          style="width: 260px;"
        >
          <a-select-option value="bcs3" style="width: 100%;">
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
      <div style="margin-bottom: 2rem;">
        <nuxt-link to="/calculate-food">
          一回に必要な餌の量も計算してみる→
        </nuxt-link>
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
    ...mapState('values', ['calorie', 'weight', 'bcs', 'lifeStage']),
  },
  watch: {
    weight() {
      this.calculateCalorieMore()
    },
    lifeStage() {
      this.calculateCalorieMore()
    },
    bcs() {
      this.calculateCalorieMore()
    },
  },
  methods: {
    ...mapMutations('values', [
      'handleWeightChange',
      'handleBcsChange',
      'handleLifeStageChange',
      'calculateCalorieMore',
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
    margin: 0 2rem 2rem 2rem;
  }
  a {
    color: rgb(92, 92, 92);
    text-decoration: underline;
  }
}
</style>
