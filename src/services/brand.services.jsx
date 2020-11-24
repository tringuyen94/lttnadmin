import { restConnector } from "./baseURL.services"
class BrandServices {
  fetchBrands() {
    return restConnector({
      url: `api/brands`,
      method: "get",
    })
  }
  addBrand(value) {
    return restConnector({
      url: `api/brands`,
      method: "post",
      data: value,
    })
  }
  updateBrandById(value, brandId) {
    return restConnector({
      url: `api/brands/${brandId}`,
      method: "PUT",
      data: value,
    })
  }
  deleteBrandById(brandId) {
    return restConnector({
      url: `api/brands/${brandId}`,
      method: "DELETE",
    })
  }
}
export default new BrandServices()
