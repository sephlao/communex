import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const StyledSendForm = styled.div`
  background-color: #e9f8ff;
  display: grid;
  grid-template-columns: 1fr 2em;
  margin: 1em 1.5em;
  padding: 0.75em;
  box-shadow: 4px 4px 4px rgba(216, 221, 234, 0.25),
    -4px -4px 4px rgba(216, 221, 234, 0.25);
  border-radius: 4px;
`;

const StyledChatInput = styled.input`
  font-size: 1em;
  box-sizing: border-box;
  width: 100%;
  background-color: transparent;
  border: none;
  color: #3f3d56;
  outline: none;
  ::placeholder {
    color: #00b0ff;
    font-weight: 600;
  }
  :focus {
    border-bottom: 1px solid rgba(0, 176, 255, 0.5);
    transition: border-bottom 350ms ease;
  }
`;

export const SendForm = ({ message, setMessage, sendMessage }) => {
  return (
    <StyledSendForm onSubmit={sendMessage}>
      <StyledChatInput
        value={message}
        placeholder="Aa"
        onChange={({ target }) => setMessage(target.value)}
        onKeyPress={e => e.key === "Enter" && sendMessage(e)}
      />
      <Icon type="send" btnContainerType="submit" />
    </StyledSendForm>
  );
};
