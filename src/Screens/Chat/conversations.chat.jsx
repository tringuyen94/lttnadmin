import React from "react"
import { makeStyles } from "@material-ui/core"
import Moment from "react-moment"
import ScrollToBottom from "react-scroll-to-bottom"
const useStyles = makeStyles((theme) => ({
  scroll: {
    width: 550,
    height: 430,
  },
}))
const Conversations = ({ messages }) => {
  const classes = useStyles()
  const renderMessages = () => {
    return (
      messages &&
      messages.reverse().map((m, i) => {
        if (m.isSentByAdmin === false) {
          return (
            <div className="message-row other-message" key={i}>
              <div className="text">{m.textChat}</div>
              <Moment format="hh:mm A">{m.sentAt}</Moment>
            </div>
          )
        } else
          return (
            <div className="message-row you-message" key={i}>
              <div className="text">{m.textChat}</div>
              <Moment format="hh:mm A">{m.sentAt}</Moment>
            </div>
          )
      })
    )
  }
  return (
    <div className="conversations">
      <ScrollToBottom className={classes.scroll}>
        {renderMessages()}
      </ScrollToBottom>
    </div>
  )
}

export default Conversations
