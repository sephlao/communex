import React from "react";
import styled from "styled-components";

const StyledDiv = styled.section`
  background-color: #f2f4fa;
  position: absolute;
  top: 3.5em;
  bottom: 0;
  width: 350px;
  opacity: 1;
  transition: transform 350ms ease-in-out, opacity 300ms ease;
`;

const Sidebar = ({ show }) => {
  return (
    <StyledDiv
      style={
        !show
          ? { transform: "translateX(-22em)", opacity: 0 }
          : { transform: "translateX(0)" }
      }
    >
      sidebar area: {show.toString()}
    </StyledDiv>
  );
};

export default Sidebar;
