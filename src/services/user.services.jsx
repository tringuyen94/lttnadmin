import { restConnector } from "./baseURL.services"

class UserService {
  login(credentials) {
    return restConnector({
      url: `/api/users/login`,
      method: `POST`,
      data: credentials
    })
  }
}
export default new UserService()
