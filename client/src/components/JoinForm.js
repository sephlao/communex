import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import styled from "styled-components";

const StyledForm = styled.form`
  /* margin: 1em 0; */
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 0.5em;
  border: none;
  border-radius: 0.25em;
  font-size: 1.25em;
  font-weight: bold;
  text-transform: uppercase;
  background: #3f3d56;
  color: white;
  margin-top: 2.5em;
  :active {
    scale: 1.1;
    transition: scale 300ms ease;
  }
`;

export default () => {
  const [name, setName] = useState("");
  const [channel, setChannel] = useState("");

  const handleSubmit = e => (!name || !channel) && e.preventDefault();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Name"
        onChange={({ target }) => setName(target.value)}
      />
      <Input
        type="text"
        placeholder="Channel"
        onChange={({ target }) => setChannel(target.value)}
      />
      <Link
        onClick={e => (!name || !channel) && e.preventDefault()}
        to={`/chat?name=${name}&channel=${channel}`}
      >
        <StyledButton>Join</StyledButton>
      </Link>
    </StyledForm>
  );
};
