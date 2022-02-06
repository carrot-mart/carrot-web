import React, { component } from 'react';
import { useState } from "react";
import { BrowserRouter, Link, Routes ,Route , Router } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Modal2 from "./Modal2";
import Workspace from "../common/Workspace";

export const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleModal = () => {
      setIsOpen(!isOpen)
    };

    return (
        <>
        {/* <BrowserRouter> */}
        <Body>
        <ModalContainer>
        <ModalBtn onClick={handleModal}>
        {isOpen === false ?  <img src="img/talk.png" alt="당근채팅" /> : <img src="img/talk2.png" alt="당근채팅2" className='talk_logo' />}
        </ModalBtn>
    
        {isOpen ===false ?
          null
        : <ModalBackdrop>
        <ModalView>
        
          <div className="close_btn" onClick={handleModal}>&times;</div>
          <Talk_about>
               <h1>채팅</h1>
               <Talk_search_box>
                 <a className="talk-search-btn" href="#">
                 <FontAwesomeIcon icon={faSearch} className="search" />
                  </a> 
                  <input type="text" className="talk-search-txt" name=""placeholder="Search" />
                  
               </Talk_search_box>
                <ul>
                <Link to="1">
                    <li>
                        <img src="img/talkuser.png" alt="talk_user" className="talk_user" />
                        <div className="talk_room">
                        <h2>당근이</h2><p>우리 동네 '신촌'을 인증하고 근처...</p>
                        </div>
                        <img src="img/talkbellIcon.png" alt="talkbell" className="talk_bell" />
                    </li>
                    </Link>
                    <Link to="2">
                    <li>
                        <img src="img/talkuser.png" alt="talk_user" className="talk_user" />
                        <div className="talk_room">
                        <h2>당근이</h2><p>우리 동네 '신촌'을 인증하고 근처...</p>
                        </div>
                        <img src="img/talkbellIcon.png" alt="talkbell" className="talk_bell" />
                    </li>
                    </Link>
                    <Link to="3">
                    <li>
                        <img src="img/talkuser.png" alt="talk_user" className="talk_user"  />
                        <div className="talk_room">
                        <h2>당근이</h2><p>우리 동네 '신촌'을 인증하고 근처...</p>
                        </div>
                        <img src="img/talkbellIcon.png" alt="talkbell" className="talk_bell" />..
                    </li>
                    </Link>
                </ul>
        <Routes>
        {/* <Route path=":id" element={<Modal2 />} /> */}
        </Routes>
            </Talk_about>
            
        </ModalView>
      </ModalBackdrop>
        }
    
        </ModalContainer>
        </Body>
        {/* </BrowserRouter> */}
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
  ul,li{
    list-style:none; 
    float:left; 
    margin:0; 
    padding:0;
  }
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
  const Talk_about = styled.div`
  clear:both;
  width:358px;
  height:460px;
  border:1px solid #ff772b;
  border-radius:20px;
  padding:17px;
  padding-top:18px;
  box-sizing:border-box;
  background-color:#fff;
  h1{
    font-size:22px;
    margin-bottom:10px;
}
ul{
    float:left;
    margin-top:15px;
}
ul li{
    float:left;
    margin-top:10px;   
}
ul li img, .talk_room{
    float:left;   
}
.talk_room{
    margin-top:2px;
    margin-left:10px;
    width:229px;
    color:#000;
}
.talk_room h2{
    font-size:14px;
    margin-top:0;
    margin-bottom:0;
}
.talk_room p{
    clear:both;
    margin-top:0;
    font-size:13px;
    padding:none;
}
.talk_user{
    border:1px solid black;
    border-radius:100%;
    width:40px;
}
.talk_bell{
    width:25px;
    height:25px;
    margin-top:7px;
    
}

  `;
  const Talk_search_box = styled.div`
  padding: 5px;
  height: 20px;
  background-color: #e5e5e5;
  border: 1px solid #e9ecef;
  border-radius: 20px;
  width: 300px;
  .talk-search-btn{
    text-decoration: none;
    float: right;
    width: 30px;
    height: 10px;
    background-color: #e5e5e5;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b4b9be;
    font-size:16px;
    margin-top:5px;
  }
  .talk-search-txt{
    display: flex;
    width: 250px;
    padding: 0 6px;
    border:none;
    background: none;
    outline: none;
    float: left;
    font-size: 13px;
    line-height: 20px;
  }

  `;

  
export default Modal;