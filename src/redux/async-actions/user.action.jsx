import { LOGIN, LOGOUT } from "./actionType"
import UserService from "../../services/user.services"
import jwt from "jsonwebtoken"
import { toast } from "react-toastify"

export const login = (credentials, history) => {
  return (dispatch) => {
    UserService.login(credentials)
      .then((res) => {
        let decodedJwt = jwt.decode(res.data.jwt)
        dispatch(actLogin(decodedJwt))
        localStorage.setItem("login", JSON.stringify(decodedJwt))
        history.push("/admin")
        toast.info("Đăng nhập thành công")
      })
      .catch((err) => toast.error("Thất bại"))
  }
}
export const actLogin = (data) => {
  return {
    type: LOGIN,
    payload: data,
  }
}
export const actLogout = () => {
  return {
    type: LOGOUT,
  }
}
