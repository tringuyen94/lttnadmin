import React, { Fragment, useEffect, useState } from "react"
import MUIDataTable from "mui-datatables"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import {
  deleteBrandById,
  fetchBrands,
  updateBrandById,
} from "../../redux/async-actions/brand.action"
import { Button, TextField } from "@material-ui/core"

const BrandTable = ({ history, dispatch, brands }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [nameBrand, setNameBrand] = useState()
  const handleChange = (e) => {
    setNameBrand({
      nameBrand: e.target.value,
    })
  }
  useEffect(() => {
    dispatch(fetchBrands())
  }, [])
  const columns = [
    {
      name: "_id",
      label: "Id",
      options: {
        display: false,
        filter: false,
      },
    },
    {
      name: "nameBrand",
      label: "Nhãn hàng",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "Update",
      options: {
        filter: false,
        sort: false,
        display: isEdit,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div>
              <TextField label="Nhập thay đổi" onChange={handleChange} />
            </div>
          )
        },
      },
    },
    {
      name: "Setting",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return isEdit ? (
            <>
              <Button
                variant="contained"
                color="default"
                onClick={() => {
                  updateBrandById(nameBrand, tableMeta.rowData[0], history)
                }}
              >
                Lưu
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                color={handleChange ? "primary" : "secondary"}
                onClick={() => setIsEdit(true)}
              >
                Cập nhật
              </Button>
            </>
          )
        },
      },
    },
  ]
  const options = {
    filterType: "dropdown",
  }
  return (
    <Fragment>
      <MUIDataTable
        title={"Các nhãn hàng"}
        data={brands ? brands : undefined}
        columns={columns}
        options={options}
      />
    </Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    brands: state.brand.brands,
  }
}

export default withRouter(connect(mapStateToProps)(BrandTable))
