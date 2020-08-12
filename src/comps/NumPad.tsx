import React from "react";
import styled from "styled-components";
import NumPadButton from "./NumPadButton";

const NumPadContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 120px);
  grid-template-columns: repeat(3, 120px);
`;

export default () => {
  return (
    <NumPadContainer>
      <NumPadButton value="1" />
      <NumPadButton value="2" />
      <NumPadButton value="3" />
      <NumPadButton value="4" />
      <NumPadButton value="5" />
      <NumPadButton value="6" />
      <NumPadButton value="7" />
      <NumPadButton value="8" />
      <NumPadButton value="9" />
      <NumPadButton value="Clear" />
      <NumPadButton value="0" />
      <NumPadButton value="Unlock" />
    </NumPadContainer>
  );
};
