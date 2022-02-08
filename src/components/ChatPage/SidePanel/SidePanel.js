import React from 'react'
import UserPanel from './UserPanel';
import DirectMessages from './DirectMessages';

function SidePanel() {
    return (
        <div
            style={{
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
        </div>
    )
}

export default SidePanel
