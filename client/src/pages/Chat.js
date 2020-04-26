import React, { useState, useEffect, useRef, createContext } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { SERVERURL } from "../config";
import TopBar from "../components/TopBar";
import ChatBox from "../components/ChatBox";
import Sidebar from "../components/Sidebar";

export const MessagesStore = createContext("");

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [channel, setChannel] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [sidebarShow, setSidebarShow] = useState(false);
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

  const handleSidebarToggle = () => {
    setSidebarShow(!sidebarShow);
  };

  return (
    <>
      <TopBar channel={channel} toggleSidebar={handleSidebarToggle} />
      <Sidebar show={sidebarShow} />
      <MessagesStore.Provider value={messages}>
        <ChatBox
          currentUser={name}
          formProps={{ message, setMessage, sendMessage }}
        />
      </MessagesStore.Provider>
    </>
  );
};

export default Chat;
