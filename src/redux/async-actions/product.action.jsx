import {
  CREATE_PRODUCT,
  FETCH_PRODUCTS,
  DELETE_PRODUCT_BY_ID,
  FETCH_PRODUCT_BY_ID,
} from "./actionType"
import ProductServices from "../../services/product.services"
import { toast } from "react-toastify"

export const createProduct = (value) => {
  return (dispatch) => {
    ProductServices.createProduct(value)
      .then((res) => {
        dispatch(actCreateProduct(res.data))
        toast.success("Thêm thành công")
      })
      .catch((err) => {
        toast.error("Thêm thất bại")
      })
  }
}
export const fetchProducts = (value) => {
  return (dispatch) => {
    ProductServices.fetchProducts()
      .then((res) => {
        dispatch(actFetchProducts(res.data))
      })
      .catch((err) => console.log)
  }
}
export const fetchProductById = (productId) => {
  return (dispatch) => {
    ProductServices.fetchProductById(productId)
      .then((res) => {
        dispatch(actFetchProductById(res.data))
      })
      .catch((err) => console.log)
  }
}
export const deleteProductById = (productId) => {
  return (dispatch) => {
    ProductServices.deleteProductById(productId)
      .then((res) => {
        dispatch(actDeteteProductById(productId))
        toast.info("Xóa thành công")
      })
      .catch((err) => console.log)
  }
}
export const updateProductById = (productData, productId, history) => {
  ProductServices.updateProductById(productData, productId)
    .then((res) => {
      history.push("/products")
      toast.info("Cập nhật thành công")
    })
    .catch((err) => {
      toast.error("Cập nhật thất bại")
    })
}

export const actFetchProductById = (data) => {
  return {
    type: FETCH_PRODUCT_BY_ID,
    payload: data,
  }
}

export const actFetchProducts = (data) => {
  return {
    type: FETCH_PRODUCTS,
    payload: data,
  }
}
export const actCreateProduct = (data) => {
  return {
    type: CREATE_PRODUCT,
    payload: data,
  }
}
export const actDeteteProductById = (productId) => {
  return {
    type: DELETE_PRODUCT_BY_ID,
    payload: productId,
  }
}
