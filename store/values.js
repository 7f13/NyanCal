export const state = () => ({
  weight: 0,
  calorie: 0,
  bcs: 'bcs3',
  lifeStage: 'before4month',
  food: 0,
  eatTimes: 0,
  foodCalorie: 0,
})

export const mutations = {
  handleWeightChange(state, event) {
    state.weight = event.target.value
  },
  handleBcsChange(state, value) {
    state.bcs = value
  },
  handleEatTimesChange(state, event) {
    state.eatTimes = event.target.value
  },
  handleFoodCalorieChange(state, event) {
    state.foodCalorie = event.target.value
  },
  handleLifeStageChange(state, value) {
    state.lifeStage = value
  },
  calculateCalorie(state) {
    // 理想体重をBCSから求める
    let idealWeight = 0
    const weight = state.weight
    const bodyConditionScore = state.bcs

    let coefficient = 1.0

    switch (bodyConditionScore) {
      case 'bcs1':
        idealWeight = weight * 1.2
        coefficient = 1.2
        break
      case 'bcs2':
        idealWeight = weight * 1.1
        coefficient = 1.2
        break
      case 'bcs3':
        idealWeight = weight
        coefficient = 1.2
        break
      case 'bcs4':
        idealWeight = Math.floor((weight / 1.15) * 10) / 10
        break
      case 'bcs5':
        idealWeight = Math.floor((weight / 1.3) * 10) / 10
        break
      default:
        idealWeight = weight
        break
    }

    // RER=70×体重kg^0.75を求める
    // ※0.75 = 3/4

    const rer =
      70 * Math.sqrt(Math.sqrt(idealWeight * idealWeight * idealWeight))

    // DER = RER x ライフステージ係数を求める
    const der = rer * coefficient
    state.calorie = Math.floor(der)
  },
  calculateCalorieMore(state) {
    let idealWeight = 0
    const weight = state.weight
    const bodyConditionScore = state.bcs
    const lifeStage = state.lifeStage
    // 理想体重をBCSから求める
    switch (bodyConditionScore) {
      case 'bcs1':
        idealWeight = weight * 1.2
        break
      case 'bcs2':
        idealWeight = weight * 1.1
        break
      case 'bcs3':
        idealWeight = weight
        break
      case 'bcs4':
        idealWeight = Math.floor((weight / 1.15) * 10) / 10
        break
      case 'bcs5':
        idealWeight = Math.floor((weight / 1.3) * 10) / 10
        break
      default:
        idealWeight = weight
        break
    }

    // RER = 70 × 体重kg^0.75を求める
    // ※0.75 = 3/4
    const rer =
      70 * Math.sqrt(Math.sqrt(idealWeight * idealWeight * idealWeight))

    // DER = RER x ライフステージ係数を求める
    let der = 0
    switch (lifeStage) {
      case 'before4month':
        der = rer * 3.0
        break
      case '4to6month':
        der = rer * 2.5
        break
      case '7to12month':
        der = rer * 2.0
        break
      case 'notSpayedOrFixed':
        der = rer * 1.4
        break
      case 'spayedOrFixed':
        der = rer * 1.2
        break
      case 'older':
        der = rer * 1.1
        break
      case 'pregnant':
        der = rer * 2.0
        break
      case 'lactating':
        der = rer * 6.0
        break
      default:
        der = rer * 1.0
        break
    }

    state.calorie = Math.floor(der)
  },
  calculateAmountFood(state) {
    // 必要なカロリーを餌に含まれる100g当たりのカロリーで割る
    const calorie = state.calorie
    const foodCalorie = state.foodCalorie
    const eatTimes = state.eatTimes
    if (foodCalorie > 0 && eatTimes > 0) {
      state.food = Math.floor(((calorie / foodCalorie) * 100) / eatTimes)
    }
  },
}
