import React from "react"
import { Delete } from "@material-ui/icons"

const TitleChat = ({ phoneNumber, conversationId, setDeleteConversation }) => {
  return (
    <div className="title-chat">
      <div className="title-chat name">
        <h3>{phoneNumber}</h3>
      </div>
      <div className="title-chat icon">
        <Delete onClick={() => setDeleteConversation(conversationId)} />
      </div>
    </div>
  )
}

export default TitleChat
