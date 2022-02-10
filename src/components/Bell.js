import React, { component } from 'react';
import { useState } from "react";
import { BrowserRouter, Link, Routes ,Route , Router } from "react-router-dom";
import styled from "styled-components";
import { VscBell } from "react-icons/vsc";

export const Bell = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleModal = () => {
      setIsOpen(!isOpen)
    };

    return (
        <>
        <ModalContainer>
        <ModalBtn onClick={handleModal}>
        {isOpen === false ?  <VscBell className='bellicon' size='25' /> : <VscBell className='bellicon2' size='25' color='#ff772b' />} <h2>알림</h2>
        </ModalBtn>
    
        {isOpen ===false ?
          null
        : <ModalBackdrop>
        <ModalView>
        
          <Bell_about>
                <div class="bell_list_top">
                      <h1>알림</h1>
                </div>
                    <ul>
                        <li><Link to="/"><img src="img/talkuser.png" alt="" className="talk_user" /><p>신촌 이웃을 사로잡은 금주의 인기매물, 지금 만나보세요!<span>6일전</span></p></Link></li>
                        <li><Link to="/"><img src="img/talkuser.png" alt="" className="talk_user" /><p>정연희님이 "~" 글에 제안을 했습니다.[30,000원]<span>8일전</span></p></Link></li>
                        <li><Link to="/"><img src="img/talkuser.png" alt="" className="talk_user" /><p>장은비님이 "~" 글에 제안을 했습니다.[40,000원]<span>10일전</span></p></Link></li>
                        <li><Link to="/"><img src="img/talkuser.png" alt="" className="talk_user" /><p>신촌 이웃을 사로잡은 금주의 인기매물, 지금 만나보세요!<span>14일전</span></p></Link></li>
                    </ul>
            </Bell_about>
            
        </ModalView>
      </ModalBackdrop>
        }
    
        </ModalContainer>
        </>
      );
    };

const ModalBtn = styled.div`
  text-decoration: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  float:left; 
  margin-right:5px;
  border-radius: 30px;
  cursor: pointer;
  h2{
    margin-left:5px;
  }
  
  
`;
const ModalContainer = styled.div`
  position:relative;
  `;
  const ModalBackdrop = styled.div`

  `;
  const ModalView = styled.div`
  
  `;
  const Bell_about = styled.div`
    position:absolute;
    right:-14%;
    top:120%;
    clear:both;
    width:28rem;
    min-height:36rem;
    height: fit-content;
    border:1px solid #ff772b;
    border-radius:20px;
    box-sizing:border-box;
    background-color:#fff;
    z-index:10;
    ::after{
        border-color: #ffffff transparent;
        border-style: solid;
        border-width: 0 6px 8px 6.5px;
        content: '';
        display: block;
        right: 60px;
        position: absolute;
        top: -7px;
        width: 0;
        z-index: 1;  
    }
    ::before {
        border-color: #ff772b transparent;
        border-style: solid;
        border-width: 0 6px 8px 6.5px;
        content: '';
        display: block;
        right: 60px;
        position: absolute;
        top: -8px;
        width: 0;
        z-index: 0;
      }
      .talk_user{
        border:1px solid black;
        border-radius:100%;
        width:3rem;
      }
      ul li:after{
        content:""
    }
    .bell_list_top, ul{
        box-sizing:border-box;
        float:left;
    }
    .bell_list_top{  
        border-bottom:1px solid #e5e5e5;
        line-height:normal;
        width:100%;
        min-height:45px;
        height: fit-content;
        padding:0 15px;
    }
    .bell_list_top h1{
        margin-top:1.5rem;
        font-size: 1.5rem;
        font-weight:bold;
    }
    ul{
        width:100%;
        height:31.3rem;
        padding:0 15px;
    }
    ul li{
        line-height: normal;
        float: left;
        margin-top:15px;
        height:5.4rem;  
    }
    ul li img, ul li p{
        float:left;
    }
    ul li p{
        width:20rem;
        margin-left:10px;
        font-size: 1.3rem;
        margin-top:0;
        color:#000;
    }
    ul li span{
        display:block;
        color:#a0a0a0;
    }

  `;
  

  
export default Bell;