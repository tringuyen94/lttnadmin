import React, { Fragment, useState, useEffect } from "react"
import ImageServices from "../../services/image.services"
import { connect } from "react-redux"
import { createProduct } from "../../redux/async-actions/product.action"
import ProductTable from "./table.products"
import Switch from "@material-ui/core/Switch"
import { fetchBrands } from "../../redux/async-actions/brand.action"
import { fetchCategories } from "../../redux/async-actions/category.action"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { Button } from "@material-ui/core"

const Products = ({ brands, categories, capacities, dispatch }) => {
  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchBrands())
  }, [])
  const [isDisplayAddForm, setIsDisplayAddForm] = useState(false)
  const [productValue, setProductValue] = useState()
  const [uploadImage, setUploadImage] = useState()
  const [uploadImageUrl, setUploadImageUrl] = useState()
  const handleChange = (e) => {
    setProductValue({
      ...productValue,
      [e.target.name]: e.target.value,
    })
  }
  const handleChangeDetail = (value) => {
    setProductValue({
      ...productValue,
      detail: value,
    })
  }
  const handleFile = (e) => {
    setUploadImage(e.target.files[0])
    let reader = new FileReader()
    reader.addEventListener(
      "load",
      () => setUploadImageUrl(String(reader.result)),
      false
    )
    reader.readAsDataURL(e.target.files[0])
    const formData = new FormData()
    formData.append("products", e.target.files[0])
    ImageServices.uploadImage(formData)
      .then((res) => {
        setProductValue({
          ...productValue,
          image: res.data._id,
        })
      })
      .catch((err) => console.log)
  }
  const handleSubmit = (e) => {
    let textEditor = document.getElementsByClassName("ql-editor")
    e.preventDefault()
    dispatch(createProduct(productValue))
    document.getElementById("addproducts").reset()
    textEditor[0].innerHTML = ""
    setUploadImageUrl("")
  }
  return (
    <Fragment>
      <div className="container-fluid">
        <Button
          style={{
            margin: "10px 0",
            background: "linear-gradient(to left, #bbd2c5, #536976, #292e49",
            color: "white",
          }}
          variant="contained"
          onClick={() => setIsDisplayAddForm(!isDisplayAddForm)}
        >
          {isDisplayAddForm ? "Danh sách sản phẩm" : "Thêm sản phẩm"}
        </Button>
        {isDisplayAddForm && (
          <form
            className="p-4 border border-info"
            id="addproducts"
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <div className="form-group col-md-3">
                <select
                  className="form-control"
                  name="category"
                  onChange={handleChange}
                >
                  <option defaultValue>Loại sản phẩm</option>
                  {categories &&
                    categories.map((category, index) => {
                      return (
                        <option key={index} value={category._id}>
                          {category.nameCategory}
                        </option>
                      )
                    })}
                </select>
              </div>
              <div className="form-group col-md-3">
                <select
                  className="form-control"
                  name="brand"
                  onChange={handleChange}
                >
                  <option defaultValue>Chọn hãng</option>
                  {brands &&
                    brands.map((brand, index) => {
                      return (
                        <option key={index} value={brand._id}>
                          {brand.nameBrand}
                        </option>
                      )
                    })}
                </select>
              </div>
              <div className="form-group col-md-6">
                <input
                  className="form-control"
                  placeholder="Tên sản phẩm"
                  name="name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <ReactQuill
                placeholder="Chi tiết sản phẩm"
                onChange={handleChangeDetail}
              />
            </div>

            <div className="form-row">
              <div className="form-group col-md-3">
                <input
                  className="form-control"
                  placeholder="Nhập công suất"
                  name="capacity"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col-md-3">
                <select
                  id="inputState"
                  className="form-control"
                  name="isNewOne"
                  onChange={handleChange}
                >
                  <option defaultValue>Tình trạng</option>
                  <option value={false}>Cũ</option>
                  <option value={true}>Mới</option>
                </select>
              </div>
            </div>
            <div className="form-group col-md-4">
              <label>Chọn ảnh sản phẩm</label>
              <input
                type="file"
                className="form-control"
                name="image"
                onChange={handleFile}
              />
              <img
                src={uploadImageUrl}
                width="100px"
                id="preview__image border border-1 mt-2"
              />
            </div>
            <button type="submit" className="btn btn-primary" align="center">
              Thêm sản phẩm
            </button>
          </form>
        )}
        {!isDisplayAddForm && <ProductTable />}
      </div>
    </Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    brands: state.brand.brands,
    categories: state.category.categories,
  }
}

export default connect(mapStateToProps)(Products)
