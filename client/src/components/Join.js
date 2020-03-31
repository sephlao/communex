import React from "react";
import styled from "styled-components";
import JoinForm from "./JoinForm";

const JoinContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const JoinBox = styled.div`
  background-color: white;
  padding: 1em;
  border-radius: 0.5em;
  min-width: 20em;
`;

const JoinHeading = styled.h1`
  text-align: center;
`;

const Join = () => (
  <JoinContainer>
    <JoinBox>
      <JoinHeading>Communex | Log-in</JoinHeading>
      <JoinForm />
    </JoinBox>
  </JoinContainer>
);

export default Join;
