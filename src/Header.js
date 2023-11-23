import React from "react";

function Header() {
  return (
    <header>
      <h1>Chatterbox</h1>
      <div className="toggle-switch">
        <input type="checkbox" id="toggle-dark-mode" />
        <label htmlFor="toggle-dark-mode"></label>
      </div>
    </header>
  );
}

export default Header;