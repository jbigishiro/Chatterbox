import React from "react";
import Message from "./Message"

function MessageList({messages}) {
 
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
