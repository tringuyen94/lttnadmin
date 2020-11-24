import React, { Fragment, useEffect } from "react"
import "react-toastify/dist/ReactToastify.css"
import "./App.css"
import Main from "./Screens/Main"
import Navbar from "./Layouts/navbar"
import { Route, withRouter, Switch, NavLink } from "react-router-dom"
import Authentication from "./Screens/Authentication"
import Products from "./Screens/Products"
import { connect } from "react-redux"
import Categories from "./Screens/Categories"
import Footer from "./Layouts/footer"
import Brands from "./Screens/Brands"
import { actLogin } from "./redux/async-actions/user.action"
import { ToastContainer, toast } from "react-toastify"
import DetailProduct from "./Screens/Products/detail.products"
import Chat from "./Screens/Chat"

function App({ history, dispatch, user }) {
  const { isAuthenticated } = user
  useEffect(() => {
    let token = localStorage.getItem("login")
    if (token) {
      dispatch(actLogin(token))
    } else {
      history.push("/login")
    }
  }, [])
  return (
    <Fragment>
      {isAuthenticated && <Navbar />}
      <ToastContainer
        position={toast.POSITION.TOP_RIGHT}
        autoClose={3000}
        hideProgressBar
      />
      <Switch>
        <Route path="/products/:id" exact component={DetailProduct} />
        <Route path="/products" exact component={Products} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/brands" exact component={Brands} />
        <Route path="/login" exact component={Authentication} />
        <Route path="/admin" exact component={Main} />
        <Route path="/" exact component={Main} />
      </Switch>
      <Footer />
    </Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}
export default withRouter(connect(mapStateToProps)(App))
