import React from "react";
export const SendForm = ({ message, setMessage, sendMessage }) => {
  return (
    <form onSubmit={sendMessage}>
      <input
        value={message}
        onChange={({ target }) => setMessage(target.value)}
        onKeyPress={e => e.key === "Enter" && sendMessage(e)}
      />
      <button type="submit">send</button>
    </form>
  );
};
