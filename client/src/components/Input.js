import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;
  background: none;
  outline: none;
  font-size: 1em;
  border: none;
  border-bottom: 2px solid #e9f8ff;
  color: #3f3d56;
  margin: 0.5em 0;
  ::placeholder {
    color: rgba(63, 61, 86, 0.8);
  }
  :focus {
    border-bottom: 2px solid #00b0ff;
    transition: border-bottom 300ms ease;
  }
`;

export default props => <StyledInput {...props} />;
