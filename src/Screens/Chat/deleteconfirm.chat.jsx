import React from "react"
import Dialog from "@material-ui/core/Dialog"
import Button from "@material-ui/core/Button"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { DeleteOutline } from "@material-ui/icons"

const DeleteConfirm = () => {
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <DeleteOutline color="primary" fontSize="14px" />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        a
        ria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có muốn xóa đoạn hội thoại này không ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="text"
            color="primary"
            autoFocus
          >
            Đồng ý
          </Button>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DeleteConfirm
