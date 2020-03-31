import React from "react";

const Message = ({ user, text }) => {
  return (
    <div className="message">
      <p className="text">{text}</p>
      <small className="name">{user}</small>
    </div>
  );
};

export default Message;
