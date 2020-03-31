import React, { useState, useEffect, useRef } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import TopBar from "./TopBar";
import ChatBox from "./ChatBox";

const Chat = ({ location }) => {
  const [, setName] = useState("");
  const [channel, setChannel] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socket = useRef(null);
  const SOCKETSERVER = useRef("http://localhost:3001");
  useEffect(() => {
    const { name, channel } = queryString.parse(location.search);
    socket.current = io(SOCKETSERVER.current);

    setName(name);
    setChannel(channel);

    socket.current.emit("join", { name, channel }, error => {
      // to do handle callback
      if (error) console.error(error);
    });

    return () => {
      // clean-up
      socket.current.emit("disconnect");
      socket.current.off();
      socket.current = null;
    };
  }, [location.search]);

  useEffect(() => {
    socket.current.on("message", message => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = e => {
    e.preventDefault();
    if (message)
      socket.current.emit("sendMessage", message, () => setMessage(""));
  };

  console.log(message, messages);
  return (
    <>
      <TopBar channel={channel} />
      <ChatBox
        messages={messages}
        formProps={{ message, setMessage, sendMessage }}
      />
      {/* <main>
        <div></div>
        <div>
          <input
            value={message}
            onChange={({ target }) => setMessage(target.value)}
            onKeyPress={e => e.key === "Enter" && sendMessage(e)}
          />
        </div>
      </main> */}
    </>
  );
};

export default Chat;
