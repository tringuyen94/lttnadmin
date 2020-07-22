import { combineReducers } from "redux"
import userReducer from "./user.reducer"
import brandReducer from "./brand.reducer"
import categoryReducer from "./category.reducer"
import productReducer from "./products.reducer"
const rootReducer = combineReducers({
  user: userReducer,
  brand: brandReducer,
  category: categoryReducer,
  product: productReducer,
})
export default rootReducer
