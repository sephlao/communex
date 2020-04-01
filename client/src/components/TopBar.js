import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import { Link } from "react-router-dom";

const StyledSection = styled.section`
  background-color: #3f3d56;
  color: #fcfeff;
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
      font-weight: bold;
      font-size: 1.125em;
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
          <Link to="/">
            <Icon type="leave" />
          </Link>
        </li>
      </ul>
    </StyledSection>
  );
};
