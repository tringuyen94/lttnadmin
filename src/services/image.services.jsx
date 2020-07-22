import { restConnector } from "./baseURL.services"
class ImageServices {
  uploadImage(formData) {
    return restConnector({
      url: `api/images/uploads`,
      method: "POST",
      data: formData,
      config: {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    })
  }
}
export default new ImageServices()
