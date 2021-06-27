import { LOGIN, LOGOUT } from "../async-actions/actionType"

let initialState = {
  isAuthenticated: false,
  credential: null
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      state.isAuthenticated = true
      state.credential = action.payload
      return { ...state }
    case LOGOUT:
      state.isAuthenticated = false
      state.credential = null
      return { ...state }

    default:
      return state
  }
}
export default userReducer
