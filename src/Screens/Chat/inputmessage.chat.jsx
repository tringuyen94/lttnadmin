import React, { useState } from "react"
const InputMessage = ({ socket, socketId }) => {
  const [adminMessage, setAdminMessage] = useState()
  return (
    <div className="input-message">
      <input
        placeholder="Type message here..."
        value={adminMessage}
        onChange={(e) => setAdminMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            socket.emit("admin-message", {
              socketId: socketId,
              textChat: adminMessage,
              sentAt: new Date(),
            })
            setAdminMessage("")
          }
        }}
      />
    </div>
  )
}

export default InputMessage
