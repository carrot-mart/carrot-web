import React, { component } from 'react';
import { useState } from "react";
import { BrowserRouter, Link, Routes ,Route , Router } from "react-router-dom";
import styled from "styled-components";


export const Modal2 = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleModal = () => {
      setIsOpen(!isOpen)
    };

    return (
        <>
        <Body>
        <ModalContainer>
        <ModalBtn onClick={handleModal}>
        {isOpen === false ?  <img src="img/talk.png" alt="당근채팅" />  : <img src="img/talk2.png" alt="당근채팅2" className='talk_logo' />}
        </ModalBtn>
    
        {isOpen ===false ?
          null
        : <ModalBackdrop>
        <ModalView>
          {/* <div className="close_btn" onClick={handleModal}>
          </div> */}
          <Talk_about>
            <Talk3_top>
                   <img src="img/leftarrow.png" alt="before" className="before" />
                   <div className="talk_name">
                      <img src="img/talkuser.png" alt="talk_user" className="talk_user" />
                      <h1>당근이</h1>
                    </div>
            </Talk3_top>
            <Talk3_section>
              <div className="talk3_send">
                  <p>오후 3:14</p>
                  <p>안녕하세요!</p>
              </div>
              <div className="talk3_reply">
                <img src="img/talkuser.png" alt="talk_user" className="talk_user" />
                  <p>안녕하세요.</p>
                  <p>오후 3:14</p>                    
              </div>
            </Talk3_section>
            <Talk3_bottom>
               <div className="talk3_message">
                <textarea placeholder="메시지를 입력해주세요." className="talk3_txt"></textarea>
                    <img src="img/picture.png" alt="" />
                    <img src="img/emoji.png" alt="" />
                    <img src="img/paperclip.png" alt="" />
                </div>
            </Talk3_bottom>
            </Talk_about>
            
        </ModalView>
      </ModalBackdrop>
        }
    
        </ModalContainer>
        </Body>
        </>
      );
    };

const Body = styled.body`  
position:relative;
position:fixed;
  right:10%;
  bottom:6%;
  z-index:50;      
      `;
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
      top:18px;
      cursor:pointer;
      padding:5px;
      border:1px solid red;
      border-radius:100%;
  }
  .close_btn:hover{
    transition: all 1s;
    filter:brightness(250%);
  }
  `;
  const Talk_about = styled.div`
  clear:both;
  width:358px;
  height:478px;
  border:1px solid #ff772b;
  border-radius:20px;
  //padding-top:18px;
  box-sizing:border-box;
  background-color:#fff;
  h1{
    font-size:22px;
    margin-bottom:10px;
}
.talk_user{
  border:1px solid black;
  border-radius:100%;
  width:30px;
}

  `;
  const Talk3_top = styled.div`
    float:left;
    border-bottom:1px solid #e5e5e5;
    width:100%;
    height:55px;
    box-sizing: border-box;
    position: relative;
    padding-top:10px;
    img, h1{
      float:left;
      cursor: pointer;
  }
  .before{
    margin-left:15px;
}
.talk_name{
  float:left;
  position:absolute;
  left:50%;
  transform: translateX(-50%)
}
.talk_name h1{
  font-size:18px;
  margin-top:5px;
  margin-left:10px;
}



  `;
  const Talk3_section = styled.div`
  float:left;
  width:100%;
  height:300px;
  padding:0 10px;
  box-sizing: border-box;
  .talk3_send{
    float:right;
    margin-top:20px;
}
.talk3_send p:first-child{
  float:left;
  font-size:10px;
  margin-right:5px;
  line-height: 40px;
}
.talk3_send p:last-child{
  float:left;
  border-radius:20px 0 20px 20px;
  color:#ffffff;
  background-color:#ff772b;
  width:100px;
  height:33px;
  text-align: center;
  line-height:33px;
  font-size:14px;
}
.talk3_reply{
  clear:both;
  float:left;
  margin-top:30px;
}
.talk3_reply > * {
  float:left;
}
.talk3_reply p{
  line-height:33px;
}
.talk3_reply p:nth-child(2){
  border-radius:0px 20px 20px 20px;
  color:#000000;
  background-color:#e0dfdf;
  width:100px;
  height:33px;
  text-align: center;
  font-size:14px;
  margin-left:10px;
}
.talk3_reply p:last-child{
  font-size:10px;
  margin-left:5px;
  line-height: 40px;
}
  `;
  const Talk3_bottom = styled.div`
  float:left;
  padding:10px;
  width:100%;
  height:123px;
  box-sizing: border-box;
  .talk3_message{
    padding: 10px;
    height: 88px;
    background-color: #fff;
    border: 1px solid #000000;
    border-radius: 10px;
    width: 310px;
      padding-top:0;
  }
  .talk3_message img{
      width:20px;
      cursor: pointer;
      margin-right:5px;
      margin-top:5px;
  }
  .talk3_txt{
    display: flex;
    width: 100%;
      height:60px;
    border:none;
    background: none;
    outline: none;
    float: left;.
    font-size: 0.7rem;
    line-height: 30px; 
  }

  `;

  
export default Modal2;