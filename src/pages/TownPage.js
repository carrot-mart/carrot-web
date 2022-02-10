import React, { useState } from "react";
import styled from "styled-components";

import TownInfoBox from "../components/Town/TownInfoBox";
import TownStoreBox from "../components/Town/TownStoreBox";
import TownPostscript from "../components/Town/TownPostscript";

// 승혁
import Navigation from "../components/Navigation";
import Bottom from "../components/Bottom";

function TownMainPage() {
  return (
    <TownMainContainer>
      <TownMainBox>
        <Navigation />
        <TownInfoBox />
        <TownStoreBox />
        <TownPostscript />
        <Bottom />
      </TownMainBox>
    </TownMainContainer>
  );
}

export default TownMainPage;

const TownMainContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: fit-content;
  min-height: 5rem;
`;

const TownMainBox = styled.div`
  margin: 0 auto;
  width: 100%;
  height: fit-content;
  min-height: 5rem;
`;
