import React, { useState } from 'react';
import styled from "styled-components";



function TownInfoTopSearch(){
    return(
        <InfoTopSearch>
            <h3>내 동네 설정하기</h3>
        </InfoTopSearch>
    );
}




export default TownInfoTopSearch;

const InfoTopSearch =styled.div`
    border : 1px solid #cdcdcd;
    width : 70%;
    float : right;
    height : 10rem;
    display : flex;
    
`;