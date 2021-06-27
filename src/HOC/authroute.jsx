import React from "react"
import { Route, Redirect } from "react-router-dom"

const AuthRoute = ({ path, component: Component, isAuthenticated }) => {
  return (
    <Route
      path={path}
      render={routeProps => {
        if (isAuthenticated) return <Component {...routeProps} />
        return <Redirect to="/login" />
      }}
    />
  )
}

export default AuthRoute
