import React from 'react'
import styled from "styled-components";

import UserPanel from './UserPanel';
import DirectMessages from './DirectMessages';


function SidePanel() {
    return (
        <StyledSide>
            <UserPanel />

            <DirectMessages />
        </StyledSide>
    )
}

export default SidePanel

const StyledSide = styled.div`
background-color: #ff772b;
padding: 2.5rem;
height: 46rem;
color: white;
width: 27.5rem;
border-radius:20px 0px 0px 20px;
`;