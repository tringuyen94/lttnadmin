import { restConnector } from "./baseURL.services"
class ProductServices {
  createProduct(value) {
    return restConnector({
      url: `api/products`,
      method: "POST",
      data: value,
    })
  }
  fetchProducts() {
    return restConnector({
      url: `api/products`,
      method: "GET",
    })
  }
  fetchProductById(productId) {
    return restConnector({
      url: `api/products/${productId}`,
      method: "GET",
    })
  }
  deleteProductById(productId) {
    return restConnector({
      url: `api/products/${productId}`,
      method: "DELETE",
    })
  }
  updateProductById(productData, productId) {
    return restConnector({
      url: `api/products/${productId}`,
      method: "PUT",
      data: productData,
    })
  }
}
export default new ProductServices()
