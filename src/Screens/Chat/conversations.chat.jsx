import React from "react"
import Moment from "react-moment"
const Conversations = ({ messages }) => {
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
      {renderMessages()}
    </div>
  )
}

export default Conversations
