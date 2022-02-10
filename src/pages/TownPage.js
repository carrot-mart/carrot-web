import React, { useState, Component } from "react";
import styled from "styled-components";

import TownStoreBox from '../components/Town/TownStoreBox'
import TownPostscript from '../components/Town/TownPostscript'



// 승혁
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


function TownMainPage() {

    return (

        <TownMainContainer>
                <Footer />

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

