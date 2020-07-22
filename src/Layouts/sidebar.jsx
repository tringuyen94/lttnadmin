import React, { Fragment } from "react"
import { makeStyles, IconButton, Drawer } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import SideList from "../components/sidelist"
import clsx from "clsx"
const useStyles = makeStyles({
  list: {
    width: "300px",
    height: "100%",
    background: "linear-gradient(to bottom, #bbd2c5, #536976, #292e49)",
  },
})
const Sidebar = () => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }
  const sideList = (anchor) => (
    <div
      role="presentation"
      className={clsx(classes.list)}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <SideList />
    </div>
  )

  return (
    <Fragment>
      <IconButton
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </Fragment>
  )
}
export default Sidebar
