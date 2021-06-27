import React, { useState, useEffect } from "react"
import SearchBox from "./searchbox.chat"
import TitleChat from "./title.chat"
import ListChat from "./listchat.chat"
import Conversations from "./conversations.chat"
import InputMessage from "./inputmessage.chat"
// import io from "socket.io-client"
// import { domain } from "../../services/baseURL.services"
import Sound from "../../img/notification.mp3"

// const socket = io(`${domain}/admin`)
const notiSound = new Audio(Sound)
const Chat = () => {
  const [conversations, setConversations] = useState([])
  const [messages, setMessages] = useState([])
  const [phoneNumber, setPhoneNumber] = useState()
  const [conversationId, setConversationId] = useState()
  const [socketId, setSocketId] = useState()
  const [search, setSearch] = useState()
  const [deleteConversation, setDeleteConversation] = useState()
  const [displayMessage, setDisplayMessage] = useState(false)
  useEffect(() => {
    socket.on("client-joint", (data) => {
      notiSound.play()
      setConversations([...conversations, data])
    })
    socket.on("conversation-by-id", (data) => {
      setMessages(data)
    })
    socket.on("admin-message", (content) => {
      setMessages([...messages, content])
    })
    socket.on("client-message", (content) => {
      setMessages([...messages, content])
    })
    socket.on("get-conversations", (content) => {
      setConversations(content)
    })
  }, [conversations, messages])
  const getConversationByAction = () => {
    if (search) {
      return conversations.filter((con) => con.phoneNumber.includes(search))
    }
    else if (deleteConversation) {
      let index = conversations.findIndex(con => con._id == deleteConversation)
      if (index > -1) {
        conversations.splice(index, 1)
        socket.emit('delete-conversation', deleteConversation)
      }
      return conversations
    }
    return conversations
  }

  return (
    <div className="Chat">
      <SearchBox search={search} setSearch={setSearch} />
      <ListChat
        conversations={getConversationByAction()}
        setPhoneNumber={setPhoneNumber}
        setConversationId={setConversationId}
        socket={socket}
        setSocketId={setSocketId}
      />
      <TitleChat
        phoneNumber={phoneNumber}
        conversationId={conversationId}
        setDeleteConversation={setDeleteConversation}
      />
      <Conversations messages={messages} />
      <InputMessage socket={socket} socketId={socketId} />
    </div>
  )
}

export default Chat
