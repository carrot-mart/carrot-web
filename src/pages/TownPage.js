import React, { useState } from 'react';
import styled from "styled-components";

import TownInfoBox from '../components/Town/TownInfoBox'
import TownStoreInfoBox from '../components/Town/TownStoreInfoBox'
import TownPostscript from '../components/Town/TownPostscript'



// 승혁님
// import Top from "../components/Top";


function TownMainPage() {


    return (

        <TownMainContainer>
            {/* <Top></Top> */}
            <TownInfoBox>

            </TownInfoBox>

            <TownStoreInfoBox />
            <TownPostscript />

            <Nothing />

        </TownMainContainer>

    );
}


export default TownMainPage;


const TownMainContainer = styled.div`
    margin : 0 auto;
  width:1440px;
  height:3000px;
`;

const Nothing = styled.div`
    height : 900px;
`;


