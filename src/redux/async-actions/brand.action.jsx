import {
  FETCH_BRANDS,
  ADD_BRAND,
  DELETE_BRAND_BY_ID,
  UPDATE_BRAND_BY_ID,
} from "./actionType"
import BrandServices from "../../services/brand.services"
import { toast } from "react-toastify"

export const fetchBrands = () => {
  return (dispatch) => {
    BrandServices.fetchBrands()
      .then((res) => {
        dispatch(actFetchBrands(res.data))
      })
      .catch((err) => console.log)
  }
}
export const addBrand = (value) => {
  return (dispatch) => {
    BrandServices.addBrand(value)
      .then((res) => {
        dispatch(actAddBrand(res.data))
      })
      .catch((err) => console.log)
  }
}
export const deleteBrandById = (brandId) => {
  return (dispatch) => {
    BrandServices.deleteBrandById(brandId)
      .then((res) => {
        dispatch(actDeleteBrandById(brandId))
      })
      .catch((err) => console.log)
  }
}
export const updateBrandById = (value, brandId, history) => {
  BrandServices.updateBrandById(value, brandId)
    .then((res) => {
      history.go(0)
      toast.info("Cập nhật thành công")
    })
    .catch((err) => console.log)
}

export const actDeleteBrandById = (brandId) => {
  return {
    type: DELETE_BRAND_BY_ID,
    payload: brandId,
  }
}
export const actFetchBrands = (data) => {
  return {
    type: FETCH_BRANDS,
    payload: data,
  }
}
export const actAddBrand = (data) => {
  return {
    type: ADD_BRAND,
    payload: data,
  }
}
