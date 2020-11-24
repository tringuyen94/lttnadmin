import {
  FETCH_BRANDS,
  ADD_BRAND,
  UPDATE_BRAND_BY_ID,
} from "../async-actions/actionType"

let initialState = {
  brands: null,
}
const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BRANDS:
      state.brands = action.payload
      return { ...state }
    case ADD_BRAND:
      let tempArr = []
      tempArr.push(action.payload)
      let resultArr = state.brands.concat(tempArr)
      return { ...state, brands: resultArr }
    case UPDATE_BRAND_BY_ID:
      console.log(action.payload)

    default:
      return state
  }
}
export default brandReducer
