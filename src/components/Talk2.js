import React from 'react';
import { BrowserRouter, Link, Router } from "react-router-dom";
import styled from "styled-components";

import Modal from "./Modal";
import Modal2 from "./Modal2";

function Talk2() {
    return (
    <BrowserRouter>
    <Body>
        <Section>
            {/* <Talk_plus2> */}
                <Modal2 />
            {/* </Talk_plus2> */}
        </Section>
    </Body>
    </BrowserRouter>
    );
  }
  
  const Body = styled.body`
    margin: 0;
    padding: 0;
    background-color: #fff;
    min-width:1920px;
    font-family:'Nanum Gothic', sans-serif; 
    color:#333333;

  ul,li{
    list-style:none; 
    float:left; 
    margin:0; 
    padding:0;
  }
  `;
  const Section = styled.div`
  width:1200px;
  height:800px;
  margin:0 auto;
  position:relative;
  `;
  const Talk_plus2 = styled.div`
  position:fixed;
  right:10%;
  bottom:6%;
  z-index:50;
  `;
  
  
  export default Talk2;
  
  
  