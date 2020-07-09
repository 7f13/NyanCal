export const state = () => ({
  weight: 0,
  calorie: 0,
  bcs: 'bcs3',
  food: 0,
  eatTimes: 0,
  foodCalorie: 0,
})

export const mutations = {
  handleWeightChange(state, value) {
    state.weight = value
  },
  handleBcsChange(state, value) {
    state.bcs = value
  },
  handleEatTimesChange(state, value) {
    state.eatTimes = value
  },
  handleFoodCalorieChange(state, value) {
    state.foodCalorie = value
  },
  calculateCalorie(state) {
    // 理想体重をBCSから求める
    let idealWeight = 0
    const weight = state.weight
    const bodyConditionScore = state.bcs

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

    // RER=70×体重kg^0.75を求める
    // ※0.75 = 3/4

    const rer =
      70 * Math.sqrt(Math.sqrt(idealWeight * idealWeight * idealWeight))
    state.calorie = Math.floor(rer)
  },
  calculateAmountFood(state) {
    // 必要なカロリーを餌に含まれる100g当たりのカロリーで割る
    const calorie = state.calorie
    const foodCalorie = state.foodCalorie
    const eatTimes = state.eatTimes
    if (foodCalorie !== 0) {
      state.food = Math.floor(((calorie / foodCalorie) * 100) / eatTimes)
    }
  },
}
