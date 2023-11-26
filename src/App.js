import React, {useState} from "react";
import Header from "./Header";
import Search from "./Search";
import MessageList from "./MessageList";
import NewMessage from "./NewMessage";

/*
We'll be building out these features:
- [x] Dark mode toggle
- [x] Showing all messages 
- [ ] Creating a new message
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

 

  return (
    <main className={isDarkMode ? "dark-mode" : ""}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
      <Search />
      <MessageList />
      <NewMessage currentUser={testUser} />
    </main>
  );
}

export default App;
