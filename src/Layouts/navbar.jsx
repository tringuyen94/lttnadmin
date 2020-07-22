import React, { Fragment } from "react"
import Sidebar from "./sidebar"
import { Button } from "@material-ui/core"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import { actLogout } from "../redux/async-actions/user.action"
const Navbar = ({ user, history, dispatch }) => {
  const { fullName } = user.credential
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg " color-on-scroll={500}>
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navigation"
          >
            <Sidebar />
            <ul className="navbar-nav ml-auto">
              <li>
                <b>
                  {fullName} <SupervisorAccountIcon />
                </b>
              </li>
              <li>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    localStorage.clear()
                    history.push("/login")
                    dispatch(actLogout())
                  }}
                >
                  Đăng xuất <ExitToAppIcon />
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}
export default withRouter(connect(mapStateToProps)(Navbar))
