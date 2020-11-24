import React, { Fragment } from "react"
import Navbar from "../../Layouts/navbar"
import ListAltIcon from "@material-ui/icons/ListAlt"

const Main = () => {
  return (
    <Fragment>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a href="/products">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={require("../../img/product.jpg")}
                    alt="#product"
                    height="250px"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Sản phẩm</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a href="/categories">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={require("../../img/category.png")}
                    alt="#product"
                    height="250px"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Loại sản phẩm</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a href="/brands">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={require("../../img/brand.jpg")}
                    alt="#product"
                    height="250px"
                  />

                  <div className="card-body">
                    <h4 className="card-title">Nhãn hàng</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a href="/chat">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={require("../../img/chat.jpg")}
                    alt="#product"
                    height="250px"
                  />

                  <div className="card-body">
                    <h4 className="card-title">Chat</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Main
