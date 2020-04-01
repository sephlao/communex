import React from "react";
import Message from "./Message";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
