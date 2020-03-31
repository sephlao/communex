import React from "react";
import Input from "./Input";
import styled from "styled-components";

const StyledForm = styled.form`
  margin: 1em 0;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 0.5em;
  border: none;
  border-radius: 0.5em;
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  background: #6f3d8b;
  color: white;
`;

export default () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input type="text" placeholder="Name" />
      <StyledButton>Join</StyledButton>
    </StyledForm>
  );
};
