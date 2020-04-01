import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import Input from "./Input";
import styled from "styled-components";
import io from "socket.io-client";

import { SERVERURL } from "../config";

const StyledForm = styled.form`
  /* margin: 1em 0; */
  p.error {
    background-color: #ffe9e9;
    padding: 1em;
  }

  input.error {
    border-bottom: 2px solid #ffe9e9;
  }
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
  const [error, setError] = useState("");
  const socket = useRef(null);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    if (name && channel) {
      socket.current = io(SERVERURL);
      socket.current.emit("checkUser", { name, channel }, error => {
        if (error) setError(error);
        else history.push(`/chat?name=${name}&channel=${channel}`);
      });
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <Input
        type="text"
        placeholder="Username"
        className={error ? "error" : ""}
        onChange={({ target }) => setName(target.value)}
      />
      <Input
        type="text"
        placeholder="Channel"
        onChange={({ target }) => setChannel(target.value)}
      />
      <StyledButton type="submit" onClick={handleSubmit}>
        Join
      </StyledButton>
    </StyledForm>
  );
};
