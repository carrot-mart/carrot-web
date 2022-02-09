import React from 'react';
import { BrowserRouter, Link, Router } from "react-router-dom";
import styled from "styled-components";

import Modal2 from "../../components/Modal2";
import Modal from "../../components/Modal";

function MyPost() {
    return (
    <BrowserRouter>
    <Body>
      <Section>
        <Modal />
      <Link to="/" className='inner'>
      <h1>마이페이지</h1>
      </Link>
        <div class="mypost_main">
        <Link to="/" className='inner'>
            <h1>내 작성글 보기</h1>
        </Link>
        </div>
        <Link to="/" className='inner'>
        <div class="post1 post">
            <h2>기타</h2>
            <p>립밤 추천해주세요 ㅠㅠ 요즘 건조하기도 하고 해서 입술이 너무 갈라지네요</p>
        </div>
        </Link>
        <Link to="/" className='inner'>
        <div class="post2 post">
            <h2>기타</h2>
            <p>립밤 추천해주세요 ㅠㅠ 요즘 건조하기도 하고 해서 입술이 너무 갈라지네요</p>
        </div>
        </Link>
        <Link to="/" className='inner'>
        <div class="post3 post">
            <h2>기타</h2>
            <p><span>Q.</span>증명사진 잘 찍는곳 있나요? 럭키 아파트나 하나아파트 쪽으로요! 둘리아파트에 있는 삼양스튜디오는 너무 별로더라구요ㅠㅠ추천부탁드려용!</p>
        </div>
        </Link>     
      </Section>
    </Body>
    </BrowserRouter>
    );
  }
  
  const Body = styled.body`
    margin: 0;
    padding: 0;
    background-color: #fff;
    // min-width:1920px;
    font-family:'Nanum Gothic', sans-serif; 
    

  ul,li{
    list-style:none; 
    float:left; 
    margin:0; 
    padding:0;
  }
  `;
  const Section = styled.div`
  width:1000px;
  height:900px;
  margin:0 auto;
  position:relative;
  h1{
    font-size:20px;
    margin:20px 0;
    text-decoration: none;
}
.inner{
  text-decoration:none;
  color:#333333;
}
.mypost_main{
  border-top:1px solid #dddddd;
  border-bottom:1px solid #dddddd;
  padding:30px 0;
}
.mypost_main h1{
  margin:0;
  text-align:center;
  width:150px;
  border:1px solid #f04124;
  border-radius:10px;
  padding:10px;
  color:#ffffff;
  background-color:#f04124;
  margin:0 auto;
}
.post{
  border:1px solid #dddddd;
  float:left;
  width:100%;
  height:180px;
  margin-top:15px;
  padding:10px 30px;
  box-sizing: border-box;
}
.post h2{
  font-size:13px;
  color:#495057;
  border:1px solid #e5e5e5;
  float:left;
  background-color:#e5e5e5;
  border-radius: 8px;
  padding:4px 10px;
  margin-bottom:10px;
}
.post p{
  clear:both;
  font-weight:bold;
  font-size:16px;
}
.post span{
  color:#f04124;
}
  `;
  
  
  export default MyPost;
  
  
  