import {
  FETCH_CATEGORIES,
  ADD_CATEGORY,
  DELETE_CATEGORY_BY_ID,
} from "../async-actions/actionType"

let initialState = {
  categories: null,
}
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      state.categories = action.payload
      return { ...state }
    case ADD_CATEGORY:
      let tempArr = []
      tempArr.push(action.payload)
      let resultArr = state.categories.concat(tempArr)
      return { ...state, categories: resultArr }
    case DELETE_CATEGORY_BY_ID:
      let filterArr = state.categories.filter(
        (category) => category._id !== action.payload
      )
      return { ...state, categories: filterArr }
    default:
      return state
  }
}
export default categoryReducer
