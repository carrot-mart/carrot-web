import React from 'react'

import UserPanel from './UserPanel';
import DirectMessages from './DirectMessages';
import styled from "styled-components";

function SidePanel() {
    return (
        <StyledSide style={{
                backgroundColor: "#ff772b",
                padding: '2rem',
                height: '460px',
                color: 'white',
                width: '275px',
                borderRadius:'20px 0px 0px 20px'

            }}
        >
            <UserPanel />

            <DirectMessages />
        </StyledSide>
    )
}

export default SidePanel

const StyledSide = styled.div`
background-color: #ff772b;
padding: 2rem;
height: 460px;
color: white;
width: 275px;
border-radius:20px 0px 0px 20px;
`;