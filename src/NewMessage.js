import React from "react";

function NewMessage({ currentUser }) {
  return (
    <form className="new-message">
      <input type="text" name="body" autoComplete="off" />
      <button type="submit">Send</button>
    </form>
  );
}

export default NewMessage;