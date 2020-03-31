import React from "react";
import Message from "./Message";
import styled from "styled-components";

const StyledDiv = styled.div``;

const MessageList = ({ messages }) => (
  <StyledDiv>
    {messages.map((m, i) => (
      <Message key={i} {...m} />
    ))}
  </StyledDiv>
);
export default MessageList;
