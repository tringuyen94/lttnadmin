import React, { Fragment, useState } from "react"
import BrandTable from "./table.brands"
import { connect } from "react-redux"
import { addBrand } from "../../redux/async-actions/brand.action"

const Brands = ({ dispatch }) => {
  const [nameBrand, setNameBrand] = useState("")
  const handleChange = (e) => {
    e.preventDefault()
    dispatch(addBrand(nameBrand))
  }
  return (
    <Fragment>
      <div className="container">
        <form className="form-group" onSubmit={handleChange}>
          <input
            className="inputBrand form-control mt-3 mb-3"
            name="nameBrand"
            placeholder="Nhập nhãn hàng"
            onChange={(e) =>
              setNameBrand({
                ...nameBrand,
                [e.target.name]: e.target.value,
              })
            }
          />
          <button
            className="btnSubmitBrand btn btn-primary form-control"
            type="submit"
          >
            Thêm
          </button>
        </form>
        <BrandTable />
      </div>
    </Fragment>
  )
}

export default connect()(Brands)
