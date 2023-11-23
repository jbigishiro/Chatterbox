import React, { useState } from "react";

function EditMessage({ body }) {
  const [messageBody, setMessageBody] = useState(body);

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="edit-message" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="body"
        autoComplete="off"
        value={messageBody}
        onChange={(e) => setMessageBody(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditMessage;