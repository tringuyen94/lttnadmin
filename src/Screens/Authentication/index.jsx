import React, { Fragment, useState } from "react"
import { login } from "../../redux/async-actions/user.action"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { TextField, Button } from "@material-ui/core"

const Authentication = ({ dispatch, history }) => {
  const [credentials, setCredentials] = useState()
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }
  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login(credentials, history))
  }
  return (
    <Fragment>
      <div className="authentication">
        <div className="container">
          <form onSubmit={handleLogin} className="loginform" autoComplete="off">
            <TextField
              className="input"
              variant="outlined"
              name="email"
              autoFocus={true}
              label="Email"
              onChange={handleChange}
              required
            />
            <br />
            <TextField
              type="password"
              className="input"
              variant="outlined"
              name="password"
              label="Password"
              onChange={handleChange}
              required
            />
            <br />
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default withRouter(connect()(Authentication))
