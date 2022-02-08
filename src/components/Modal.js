import React, { component } from 'react';
import { useState } from "react";
import { BrowserRouter, Link, Routes ,Route , Router } from "react-router-dom";
import styled from "styled-components";
import ChatPage from './ChatPage/ChatPage'


export const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleModal = () => {
      setIsOpen(!isOpen)
    };

    return (
        <>
        <Body>
        <ModalContainer>
        <ModalBtn onClick={handleModal}>
        {isOpen === false ?  <img src="img/talk.png" alt="당근채팅" /> : <img src="img/talk2.png" alt="당근채팅2" className='talk_logo' />}
        </ModalBtn>
    
        {isOpen ===false ?
          null
        : <ModalBackdrop>
        <ModalView>
        
          <ChatPage/>
            
        </ModalView>
      </ModalBackdrop>
        }
    
        </ModalContainer>
        </Body>
        </>
      );
    };

const ModalBtn = styled.div`
  background-color: none;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  position:fixed;
  right:10%;
  bottom:6%;
  .talk_logo{
      position:absolute;
      top:-500px;
      right:10%;
  }
`;

const Body = styled.body`  
position:relative;
position:fixed;
  right:10%;
  bottom:6%;
  z-index:50;      
      `;
const ModalContainer = styled.div`

  position:relative;
  `;
  const ModalBackdrop = styled.div`
  position:absolute;
  bottom:0px;
  right:20px;
  `;
  const ModalView = styled.div`
  .close_btn{
      position:absolute;
      right:30px;
      top:25px;
      cursor:pointer;
      padding:5px;
  }
  .close_btn:hover{
    transition: all 1s;
    filter:brightness(250%);
  }
  `;

  
export default Modal;