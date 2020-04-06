import React, { useState, useEffect, useRef } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { SERVERURL } from "../config";
import TopBar from "../components/TopBar";
import ChatBox from "../components/ChatBox";

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [channel, setChannel] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socket = useRef(null);
  useEffect(() => {
    const { name, channel } = queryString.parse(location.search);
    socket.current = io(SERVERURL);

    setName(name);
    setChannel(channel);

    socket.current.emit("join", { name, channel }, (error) => {
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
    socket.current.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message)
      socket.current.emit("sendMessage", message, () => setMessage(""));
  };

  return (
    <>
      <TopBar channel={channel} />
      <ChatBox
        currentUser={name}
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
