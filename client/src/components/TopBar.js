import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const StyledSection = styled.section`
  background-color: white;
  padding: 0.5em 1em;
  border-bottom: 1px solid gainsboro;
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5em;
    li:nth-child(2) {
      text-transform: uppercase;
      font-weight: bold;
    }
  }
`;

export default ({ channel }) => {
  return (
    <StyledSection>
      <ul>
        <li>
          <Icon type="menu" />
        </li>
        <li>{channel}</li>
        <li>
          <Icon type="leave" />
        </li>
      </ul>
    </StyledSection>
  );
};
