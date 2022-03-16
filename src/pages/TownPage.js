import React, { useState, Component } from "react";
import styled from "styled-components";

import TownInfoBox from '../components/Town/TownInfoBox'
import TownStoreBox from '../components/Town/TownStoreBox'
import TownPostscript from '../components/Town/TownPostscript'



// 승혁
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


function TownMainPage() {

    return (

        <TownMainContainer>
                <Navigation />
                <TownInfoBox />
                <TownStoreBox />
                <TownPostscript />
                <Footer />

        </TownMainContainer>

    );
}

export default TownMainPage;

const TownMainContainer = styled.div`
    
    
`;

