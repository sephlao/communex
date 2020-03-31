import React from "react";
import styled from "styled-components";

const StyledMessageDiv = styled.div`
  margin: 0.5em 1em;
  display: grid;
  grid-template-areas: "name msg msg msg";
  grid-template-columns: 2em 1fr;
  p {
    background-color: #f8f8f8;
    padding: 0.75em;
    border-radius: 6px 6px 6px 0px;
    grid-area: msg;
    margin-bottom: 0.75em;
    width: 100%;
  }

  small {
    font-size: 0.75em;
    grid-area: name;
    align-self: end;
  }

  &.yours {
    grid-template-areas: "msg msg msg name";
    grid-template-columns: 1fr 2em;

    p {
      background-color: darkslateblue;
      border-radius: 6px 6px 0px 6px;
      color: white;
    }
  }
`;

const Message = ({ user, text, isYours }) => {
  return (
    <StyledMessageDiv className={isYours && "yours"}>
      <p>{text}</p>
      <small>{user}</small>
    </StyledMessageDiv>
  );
};

export default Message;
