import axios from "axios"
export const domain ="http://45.132.241.50:8080"
export const restConnector = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || domain
})
