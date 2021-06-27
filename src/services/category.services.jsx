import { restConnector } from "./baseURL.services"
class CategoryServices {
  fetchCategories() {
    return restConnector({
      url: `api/categories`,
      method: "get",
    })
  }
  addCategory(value) {
    return restConnector({
      url: `api/categories`,
      method: "post",
      data: value,
    })
  }
  deleteCategoryById(categoryId) {
    return restConnector({
      url: `api/categories/${categoryId}`,
      method: "DELETE",
    })
  }
  updateCategoryById(value, categoryId) {
    return restConnector({
      url: `api/categories/${categoryId}`,
      method: "PUT",
      data: value,
    })
  }
}
export default new CategoryServices()
