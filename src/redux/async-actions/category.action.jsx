import {
  FETCH_CATEGORIES,
  ADD_CATEGORY,
  DELETE_CATEGORY_BY_ID,
} from "./actionType"
import CategoryServices from "../../services/category.services"
import { toast } from "react-toastify"

export const fetchCategories = () => {
  return (dispatch) => {
    CategoryServices.fetchCategories()
      .then((res) => {
        dispatch(actFetchCategories(res.data))
      })
      .catch((err) => console.log)
  }
}
export const addCategory = (value) => {
  return (dispatch) => {
    CategoryServices.addCategory(value)
      .then((res) => {
        dispatch(actAddCategory(res.data))
      })
      .catch((err) => console.log)
  }
}
export const deleteCategoryById = (categoryId) => {
  return (dispatch) => {
    CategoryServices.deleteCategoryById(categoryId)
      .then((res) => dispatch(actDeleteCategoryById(categoryId)))
      .catch((err) => console.log)
  }
}
export const updateCategoryById = (value, categoryId, history) => {
  CategoryServices.updateCategoryById(value, categoryId)
    .then((res) => {
      history.go(0)
      toast.success("Cập nhật thành công")
    })
    .catch((err) => console.log)
}
export const actDeleteCategoryById = (categoryId) => {
  return {
    type: DELETE_CATEGORY_BY_ID,
    payload: categoryId,
  }
}
export const actAddCategory = (data) => {
  return {
    type: ADD_CATEGORY,
    payload: data,
  }
}
export const actFetchCategories = (data) => {
  return {
    type: FETCH_CATEGORIES,
    payload: data,
  }
}
