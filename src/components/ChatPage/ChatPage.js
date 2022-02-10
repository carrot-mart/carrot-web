import React from 'react'
import SidePanel from './SidePanel/SidePanel';
import MainPanel from './MainPanel/MainPanel';
import { useSelector } from 'react-redux';
import styled from "styled-components";


function ChatPage() {
    const currentUser = useSelector(state => state.user.currentUser)
    const currentChatRoom = useSelector(state => state.chatRoom.currentChatRoom)

    return (
        <Chat>
            <ChatSide>
                <SidePanel
                    key={currentUser && currentUser.uid}
                />
            </ChatSide>
            <ChatMain>
                <MainPanel
                    key={currentChatRoom && currentChatRoom.id}
                />
            </ChatMain>
        </Chat>
    )
}

export default ChatPage;

const Chat = styled.div`
display: flex;

`;
const ChatSide = styled.div`
width: 27.5rem;

`;
const ChatMain = styled.div`
width: 50rem;

`;
