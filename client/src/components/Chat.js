import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;
const SOCKETSERVER = "http://localhost:3001";

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [channel, setChannel] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const { name, channel } = queryString.parse(location.search);
    socket = io(SOCKETSERVER);

    setName(name);
    setChannel(channel);

    socket.emit("join", { name, channel }, () => {
      // to do handle callback
    });

    return () => {
      // clean-up
      socket.emit("disconnect");
      socket.off();
    };
  }, [location.search]);

  useEffect(() => {
    socket.on("message", message => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = e => {
    e.preventDefault();

    if (message) socket.emit("sendMessage", message, () => setMessage(""));
  };

  console.log(message, messages);

  return (
    <div>
      <input
        value={message}
        onChange={({ target }) => setMessage(target.value)}
        onKeyPress={e => e.key === "Enter" && sendMessage(e)}
      />
    </div>
  );
};

export default Chat;
