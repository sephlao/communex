import React from "react";
import MessageList from "./MessageList";

import styled from "styled-components";
import { SendForm } from "./SendForm";

const StledChatBoxSection = styled.section`
  background-color: white;
`;

const ChatBox = ({ messages, formProps }) => {
  return (
    <StledChatBoxSection>
      <MessageList messages={messages} />
      <SendForm {...formProps} />
    </StledChatBoxSection>
  );
};

export default ChatBox;
