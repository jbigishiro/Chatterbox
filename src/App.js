import React, {useEffect, useState} from "react";
import Header from "./Header";
import Search from "./Search";
import MessageList from "./MessageList";
import NewMessage from "./NewMessage";

/*
We'll be building out these features:
- [x] Dark mode toggle
- [x] Showing all messages 
- [x] Creating a new message
- [ ] Searching by message text
- [ ] *Bonus* Deleting a message
- [ ] *Bonus* Editing a message

For each feature, think about:
- Do we need state?
- Where should that state live?
- What props do I need?
- How can I pass data to the components that need it?
*/

const testUser = { username: "Duane" };

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [messages, setMessages] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:4000/messages")
        .then(r => r.json())
        .then((messages) => setMessages(messages))
  }, [])
  
  function handleAddMessage(newMessage) {
    setMessages([...messages, newMessage])
  }

  const displayedMessages = messages.filter(message => message.body.toLowerCase().includes(search.toLowerCase()))
 console.log(messages)

  return (
    <main className={isDarkMode ? "dark-mode" : ""}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
      <Search search={search} onSearchChange={setSearch}/>
      <MessageList messages={messages}/>
      <NewMessage currentUser={testUser} onAddMessage={handleAddMessage}/>
    </main>
  );
}

export default App;
