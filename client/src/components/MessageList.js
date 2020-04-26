import React, { useContext } from "react";
import Message from "./Message";
import styled from "styled-components";
import { MessagesStore } from "../pages/Chat";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const MessageList = ({ currentUser }) => {
  const messages = useContext(MessagesStore);
  return (
    <StyledDiv>
      {messages.map((m, i) => (
        <Message key={i} {...m} isYours={m.user === currentUser} />
      ))}
    </StyledDiv>
  );
};
export default MessageList;
