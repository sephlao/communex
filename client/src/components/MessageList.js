import React from "react";
import Message from "./Message";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  margin: auto 0.5em 0.5em 1em;
  flex-direction: column;
`;

const MessageList = ({ messages, currentUser }) => {
  return (
    <StyledDiv>
      {messages.map((m, i) => (
        <Message key={i} {...m} isYours={m.user === currentUser} />
      ))}
    </StyledDiv>
  );
};
export default MessageList;
