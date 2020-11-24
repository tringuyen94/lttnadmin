import React from "react"
import DeleteConfirm from "./deleteconfirm.chat"

const TitleChat = ({ phoneNumber, socketId, setDeleteConversation }) => {
  return (
    <div className="title-chat">
      <div className="title-chat name">
        <h3>{phoneNumber}</h3>
      </div>
      <div className="title-chat icon">
        <DeleteConfirm
          socketId={socketId}
          setDeleteConversation={setDeleteConversation}
        />
      </div>
    </div>
  )
}

export default TitleChat
