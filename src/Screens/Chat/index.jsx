import React, { useState, useEffect } from "react"
import SearchBox from "./searchbox.chat"
import TitleChat from "./title.chat"
import ListChat from "./listchat.chat"
import Conversations from "./conversations.chat"
import InputMessage from "./inputmessage.chat"
import io from "socket.io-client"
import { domain } from "../../services/baseURL.services"
const socket = io(`${domain}/admin`)
const Chat = () => {
  const [conversations, setConversations] = useState([])
  const [messages, setMessages] = useState([])
  const [phoneNumber, setPhoneNumber] = useState()
  const [socketId, setSocketId] = useState()
  const [search, setSearch] = useState()
  const [deleteConversation, setDeleteConversation] = useState()
  useEffect(() => {
    socket.on("client-joint", (data) => {
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
  }, [conversations, messages, deleteConversation])
  const getConversationByAction = () => {
    if (search) {
      return conversations.filter((con) => con.phoneNumber.includes(search))
    } else if (deleteConversation) {
      socket.emit("delete-conversation", deleteConversation)
      return conversations.filter((con) => con.socketId !== deleteConversation)
    } else return conversations
  }
  return (
    <div className="Chat">
      <SearchBox search={search} setSearch={setSearch} />
      <ListChat
        conversations={getConversationByAction()}
        setPhoneNumber={setPhoneNumber}
        setSocketId={setSocketId}
        socket={socket}
      />
      <TitleChat
        phoneNumber={phoneNumber}
        socketId={socketId}
        setDeleteConversation={setDeleteConversation}
      />
      <Conversations messages={messages} />
      <InputMessage socket={socket} socketId={socketId} />
    </div>
  )
}

export default Chat
