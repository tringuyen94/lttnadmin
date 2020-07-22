import React, { Fragment, useEffect, useState } from "react"
import MUIDataTable from "mui-datatables"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { fetchCategories } from "../../redux/async-actions/category.action"
import { Button, TextField } from "@material-ui/core"
import { updateCategoryById } from "../../redux/async-actions/category.action"

const CategoryTable = ({ categories, history, dispatch }) => {
  useEffect(() => {
    dispatch(fetchCategories())
  }, [])
  const [isUpdate, setIsUpdate] = useState(false)
  const [nameCategory, setNameCategory] = useState()
  const handleChange = (e) => {
    setNameCategory({
      nameCategory: e.target.value,
    })
  }
  const columns = [
    {
      name: "_id",
      label: "Id",
      options: {
        filter: false,
        display: false,
      },
    },
    {
      name: "nameCategory",
      label: "Loại sản phẩm",
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
        display: isUpdate,
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
          return isUpdate ? (
            <>
              <Button
                variant="contained"
                color="default"
                onClick={() => {
                  updateCategoryById(
                    nameCategory,
                    tableMeta.rowData[0],
                    history
                  )
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
                onClick={() => setIsUpdate(true)}
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
        title={"Các loại sản phẩm "}
        data={categories ? categories : undefined}
        columns={columns}
        options={options}
      />
    </Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    categories: state.category.categories,
  }
}

export default withRouter(connect(mapStateToProps)(CategoryTable))
