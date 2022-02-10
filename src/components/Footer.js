import React from 'react';
import { BrowserRouter, Link, Router } from "react-router-dom";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
    return (
    <FooterStyled>
           <Inner>
            <Link to = "/" className="mainlogo2">
                <img src="img/main_logo2.png" alt="메인로고2" />
            </Link>
            <Footer_inner>
            <Footer_menu>
                <ul>
                    <li>자주 묻는 질문</li>
                    <li>이용약관</li>
                    <li>개인정보처리방침</li>
                    <li>위치기반서비스 이용약관</li>
                </ul>
            </Footer_menu>
            <Footer_addr>
                    <ul class="addr1">
                        <li>명승혁 audtmdgur@naver.com</li>
                        <li>곽미진 mj010516@naver.com</li>
                        <li>허승현 lutise@gmail.com</li>
                    </ul>
                    <div className="addr2">
                        <li>정연희 spig0126@gmail.com</li>
                        <li>장은비 eunbi217@gmail.com</li>
                    </div>
                
            </Footer_addr>
            <Git>
            <a href="https://github.com/carrot-mart/carrot-web"><AiFillGithub className='giticon' size='60' color='black'/></a>
            </Git>
            </Footer_inner>
            </Inner>
        </FooterStyled>
    );
  }
  
  const FooterStyled = styled.footer`
    margin: 0;
    padding: 0;
    color:#333333;
    width:100%;
    height:37rem;
    background-color: #495057;
    ul,li{
        list-style:none; 
        float:left; 
        margin:0; 
        padding:0;
    }
  `;
  const Inner = styled.div`
    position:relative;
    width:120rem;
    height:37rem;
    margin:0 auto;
    .mainlogo2{
        float:left;
    }
  `;
  const Footer_inner = styled.div`
    clear: both;
    width:73.9rem;
    margin:0 auto;
    a{
        margin:0 auto;
        position:absolute;
        left:50%;
        transform: translateX(-50%);
        top:30px;
    }
    a img{
        width:5.2rem;
        height:5.2rem;
    }
`;
const Footer_menu = styled.div`
    clear:both;
    float:left;
    width:74rem;
    position:relative;
    ul{
        overflow: hidden;
        border-bottom:1px solid #5c6268;
    }
    ul li{
        margin:10px 17px;
        font-size:2rem;
        color:#ffffff;
        cursor:pointer;
    }
`;
const Footer_addr = styled.div`
    float:left;
    position:relative;
    margin-top:27px;
    box-sizing: border-box;
    li{
        color:#ffffff;
        font-size: 1.4rem;
    }
    .addr1{
        margin-bottom:31px;
        
    }
    .addr1 li, .addr2 li{
        margin-right:88px;
        cursor:pointer;
    }
    .addr1 li:last-child, .addr2 li:last-child{
        margin:0;
    }
    .addr2{
        clear: both;
        display:block;
        margin:0 auto;
        width:460px;
    }
`;
const Git = styled.div`
    float:left;
    width:73.9rem;
    position:relative;
    .giticon :hover{
        transition: all 1s;
        color:#ffffff;
    }
`;
  
  export default Footer;
  
  
  