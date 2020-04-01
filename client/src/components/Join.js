import React from "react";
import styled from "styled-components";
import JoinForm from "./JoinForm";
import JoinFormImg from "../img/joinform.svg";

const JoinContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f4fa;
`;

const JoinBox = styled.div`
  background-color: #fcfeff;
  padding: 2em 1em;
  border-radius: 0.5em;
  max-width: 20em;
  margin: 0 1.5em;
  box-shadow: -10px -10px 4px #ecebf5, 10px 10px 4px #ecebf5;
`;

const JoinHeading = styled.h1`
  text-align: center;
  font-size: 1.875em;
  font-weight: bold;
  margin: 1em 0;
`;

const StyledImg = styled.img`
  max-width: 80%;
  display: flex;
  margin: auto;
`;

const Join = () => {
  return (
    <JoinContainer>
      <JoinBox>
        <StyledImg src={JoinFormImg} alt="join communex" />
        <JoinHeading>Communex</JoinHeading>
        <JoinForm />
      </JoinBox>
    </JoinContainer>
  );
};

export default Join;
