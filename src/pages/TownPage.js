import React, { useState } from 'react';
import styled from "styled-components";

import TownInfoBox from '../components/Town/TownInfoBox'
import TownStoreBox from '../components/Town/TownStoreInfoBox'
import TownPostscript from '../components/Town/TownPostscript'



// 승혁
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


function TownMainPage() {

    return (

        <TownMainContainer>
            <TownMainBox>
                <Navigation />
                <TownInfoBox />
                <TownStoreBox />
                <TownPostscript />
                <Footer />
            </TownMainBox>

        </TownMainContainer>

    );
}


export default TownMainPage;


const TownMainContainer = styled.div`
    margin : 0 auto;
    width: 100%;
    hegiht:fit-content;
    min-height: 5rem;
`;

const TownMainBox = styled.div`
    margin : 0 auto;
    width : 100%;
    hegiht:fit-content;
    min-height: 5rem;
`;

