import React, { useState } from 'react';
import styled from "styled-components";

import TownInfoBox from '../components/Town/TownInfoBox'
import TownStoreBox from '../components/Town/TownStoreBox'
import TownPostscript from '../components/Town/TownPostscript'



// 승혁
import Navigation from "../components/Navigation";


function TownMainPage() {

    return (

        <TownMainContainer>
            <TownMainBox>
                <Navigation />
                <TownInfoBox />
                <TownStoreBox />
                <TownPostscript />

            </TownMainBox>

        </TownMainContainer>

    );
}


export default TownMainPage;


const TownMainContainer = styled.div`
    margin : 0 auto;
    width: 100%;
    height : 5000px;
`;

const TownMainBox = styled.div`
    margin : 0 auto;
    width : 100%;
`;


