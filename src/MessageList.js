import React, {useEffect, useState} from "react";
import Message from "./Message"

function MessageList() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/messages")
        .then(r => r.json())
        .then((messages) => setMessages(messages))
  }, [])

  return (
    <div className="list">
      <ul>{messages.map(message => 
        ( <Message key={message.id} username={message.username} 
        body={message.body} createdAt={message.created_at} />))}
        </ul>
    </div>
  );
}

export default MessageList;
