import React, { Fragment, useState } from "react"
import CategoryTable from "./table.categories"
import { addCategory } from "../../redux/async-actions/category.action"
import { connect } from "react-redux"
const Categories = ({ dispatch }) => {
  const [nameCategory, setNameCategory] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addCategory(nameCategory))
    document.getElementsById("formAddCategory").reset()
  }
  return (
    <Fragment>
      <div className="container">
        <form
          onSubmit={handleSubmit}
          id="formAddCategory"
          className="form-group"
        >
          <input
            className="form-control mt-3 mb-2"
            placeholder="Nhập loại sản phẩm"
            name="nameCategory"
            onChange={(e) => {
              setNameCategory({
                [e.target.name]: e.target.value,
              })
            }}
          />
          <button type="submit" className="btn btn-primary form-control mb-4">
            Thêm
          </button>
        </form>
        <CategoryTable />
      </div>
    </Fragment>
  )
}
export default connect()(Categories)
