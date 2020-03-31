import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0.5em;
  background: none;
  outline: none;
  border: 1px solid #aeaeae;
  margin: 0.5em 0;
  font-size: 1em;
`;

export default props => <StyledInput {...props} />;
