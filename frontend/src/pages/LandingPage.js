import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  font-size: 1.5rem;
  background: red;
  color: white;
`;

const LandingPage = () => {
  return (
    <div>
      <div>LandingPage</div>
      <StyledBtn>Styled btn</StyledBtn>
    </div>
  );
};

export default LandingPage;
