import React from "react";
import styled from "styled-components";

const StyledMessageDiv = styled.div`
  margin: 0.5em 1.5em;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  p {
    background-color: #f2f4fa;
    padding: 1.25em;
    border-radius: 8px 8px 8px 0px;
    margin-bottom: 0.25em;
    display: inline-block;
  }

  small {
    font-size: 0.75em;
    grid-area: name;
    align-self: flex-start;
  }

  &.yours {
    grid-template-areas: "msg msg msg name";
    grid-template-columns: 1fr 2em;
    align-items: self-end;
    p {
      background-color: #e9f8ff;
      border-radius: 8px 8px 0px 8px;
      color: #3f3d56;
    }

    small {
      align-self: flex-end;
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
