import React from "react";
import MessageList from "./MessageList";

import styled from "styled-components";
import { SendForm } from "./SendForm";

const StledChatBoxSection = styled.section`
  background-color: white;
  display: grid;
  grid-template-rows: auto 6em;
  min-height: calc(100vh - 3.5em);
`;

const ChatBox = ({ currentUser, messages, formProps }) => {
  return (
    <StledChatBoxSection>
      <MessageList messages={messages} currentUser={currentUser} />
      <SendForm {...formProps} />
    </StledChatBoxSection>
  );
};

export default ChatBox;
