import React from "react"
import Moment from "react-moment"

const ListChat = ({ conversations, setPhoneNumber, setSocketId, socket }) => {
  const renderListChat = () => {
    return conversations
      ? conversations.map((con, i) => {
          return (
            <div    
              className="list-item"
              key={i}
              onClick={() => {
                setPhoneNumber(con.phoneNumber)
                setSocketId(con.socketId)
                socket.emit("get-conversation-by-socketid", con.socketId)
              }}
            >
              <div className="name">{con.phoneNumber}</div>
              <div className="sent-date">
                <Moment format="DD-MM-YYYY">{con.jointAt}</Moment>
              </div>
              {con.isConnected ? (
                <div className="content"> Connecting</div>
              ) : (
                <div className="content"> Disconnected</div>
              )}
            </div>
          )
        })
      : null
  }

  return <div className="list-chat">{renderListChat()}</div>
}

export default ListChat
