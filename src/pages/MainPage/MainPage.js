import React, { useState } from "react";
import styled from "styled-components";

function MainPage() {
  return (
    <>
      <MainRepresentative>
        <MainRepresentativeText>
          <p id="Title">
            당신 근처의
            <br />
            당근 장터
          </p>
          <p id="Text">
            중고 거래부터 동네 홍보까지, 이웃과 함께해 <br />
            가깝고 따뜻한 당신의근처를 만들어요
          </p>
        </MainRepresentativeText>
        <MainRepresentativeImg>
          <div id="Img1">
            <img src="data/꽃.jpg" />
          </div>
          <div id="Img2">
            <img src="data/pattern.jpg" />
          </div>
          <div id="Img3">
            <img src="data/flower_5.jpg" />
          </div>
        </MainRepresentativeImg>
      </MainRepresentative>
      <RepresentativeSerch>
        <ul>
          <li>
            <a href="">
              <img src="data/뇌-2.png" />
              <br />
              디지털기기
            </a>
          </li>
          <li>
            <a href="">
              <img src="data/뇌-2.png" />
              <br />
              인기매물
            </a>
          </li>
          <li>
            <a href="">
              <img src="data/뇌-2.png" />
              <br />
              생활가전
            </a>
          </li>
          <li>
            <a href="">
              <img src="data/뇌-2.png" />
              <br />
              가구/인테리어
            </a>
          </li>
          <li>
            <a href="">
              <img src="data/뇌-2.png" />
              <br />
              유아동
            </a>
          </li>
          <li>
            <a href="">
              <img src="data/뇌-2.png" />
              <br />
              생활/가공식품
            </a>
          </li>
          <li>
            <a href="">
              <img src="data/뇌-2.png" />
              <br />
              유아도서
            </a>
          </li>
          <li>
            <a href="">
              <img src="data/뇌-2.png" />
              <br />
              스포츠/레저
            </a>
          </li>
          <li>
            <a href="">
              <img src="data/뇌-2.png" />
              <br />
              여성잡화
            </a>
          </li>
          <li>
            <a href="">
              <img src="data/뇌-2.png" />
              <br />
              여성의류
            </a>
          </li>
          <li>
            <a href="">
              <img src="data/뇌-2.png" />
              <br />
              남성패션/잡화
            </a>
          </li>
          <li>
            <a href="">
              <img src="data/뇌-2.png" />
              <br />
              게임/취미
            </a>
          </li>
        </ul>
      </RepresentativeSerch>
      <PopularItems>
        <p id="Title">중고거래 인기매물</p>
        <ul>
          <li>
            <a href="">
              <img src="data/꽃.jpg" />
              <br />
              <strong>혼다 전기오토바이 자전거...</strong>
              <br />
              <span>경기도 성남시 분당구 금곡동</span>
              <br />
              <span id="price">9000,000</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="data/꽃.jpg" />
              <br />
              <strong>혼다 전기오토바이 자전거...</strong>
              <br />
              <span>경기도 성남시 분당구 금곡동</span>
              <br />
              <span id="price">9000,000</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="data/꽃.jpg" />
              <br />
              <strong>혼다 전기오토바이 자전거...</strong>
              <br />
              <span>경기도 성남시 분당구 금곡동</span>
              <br />
              <span id="price">9000,000</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="data/꽃.jpg" />
              <br />
              <strong>혼다 전기오토바이 자전거...</strong>
              <br />
              <span>경기도 성남시 분당구 금곡동</span>
              <br />
              <span id="price">9000,000</span>
            </a>
          </li>
        </ul>
      </PopularItems>
      <PopularSerch>
        <p id="Title">중고거래 인기검색</p>
        <PopularSerchText>
          <PopularSerchTextMenu>
            <li>
              <a href="">자전거</a>
            </li>
            <li>
              <a href="">캠핑</a>
            </li>
            <li>
              <a href="">패딩</a>
            </li>
            <li>
              <a href="">의자</a>
            </li>
            <li>
              <a href="">냉장고</a>
            </li>
            <li>
              <a href="">노트북</a>
            </li>
            <li>
              <a href="">아이폰</a>
            </li>
            <li>
              <a href="">난로</a>
            </li>
            <li>
              <a href="">컴퓨터</a>
            </li>
            <li>
              <a href="">아이패드</a>
            </li>
          </PopularSerchTextMenu>
        </PopularSerchText>
        <div>
          <PopularSerchIcon1>
            <li>
              <a href="">
                <img src="data/꽃.jpg" />
                <br />
                <strong>혼다 전기오토바이 자전거...</strong>
                <br />
                <span>경기도 성남시 분당구 금곡동</span>
                <br />
                <span id="price">9000,000</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src="data/꽃.jpg" />
                <br />
                <strong>혼다 전기오토바이 자전거...</strong>
                <br />
                <span>경기도 성남시 분당구 금곡동</span>
                <br />
                <span id="price">9000,000</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src="data/꽃.jpg" />
                <br />
                <strong>혼다 전기오토바이 자전거...</strong>
                <br />
                <span>경기도 성남시 분당구 금곡동</span>
                <br />
                <span id="price">9000,000</span>
              </a>
            </li>
          </PopularSerchIcon1>
        </div>
        <div>
          <PopularSerchIcon2>
            <li>
              <a href="">
                <img src="data/꽃.jpg" />
                <br />
                <strong>혼다 전기오토바이 자전거...</strong>
                <br />
                <span>경기도 성남시 분당구 금곡동</span>
                <br />
                <span id="price">9000,000</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src="data/꽃.jpg" />
                <br />
                <strong>혼다 전기오토바이 자전거...</strong>
                <br />
                <span>경기도 성남시 분당구 금곡동</span>
                <br />
                <span id="price">9000,000</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src="data/꽃.jpg" />
                <br />
                <strong>혼다 전기오토바이 자전거...</strong>
                <br />
                <span>경기도 성남시 분당구 금곡동</span>
                <br />
                <span id="price">9000,000</span>
              </a>
            </li>
          </PopularSerchIcon2>
        </div>
      </PopularSerch>
    </>
  );
}

export default MainPage;

const MainRepresentative = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1440;
  height: 900px;
  background-color: #ffddd6;
`;

const MainRepresentativeText = styled.div`
  display: flex;
  flex-direction: column;
  #Title {
    font-size: 64px;
  }
  #Text {
    font-size: 25px;
    color: #686767;
  }
`;
const MainRepresentativeImg = styled.div`
  margin: 0;
  padding: 0;
  width: 600px;
  height: 1000px;
  position: relative;
  img {
    position: absolute;
    width: 250px;
    height: 550px;
    border-radius: 20%;
    box-shadow: 30px;
  }
  #Img1 {
    width: 250px;
    height: 550px;
    transform: translate(0, 200px);
  }
  #Img2 {
    width: 250px;
    height: 550px;
    transform: translate(350px, -250px);
  }
  #Img3 {
    width: 250px;
    height: 550px;
    transform: translate(180px, -950px);
  }
`;

const RepresentativeSerch = styled.div`
  width: auto;
  height: 200px;
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;

  a {
    color: black;
    text-decoration-line: none;
  }

  ul {
    display: flex;
    list-style: none;
    padding-left: 0px;
  }

  li {
    padding: 8px 12px;
  }
`;

const PopularItems = styled.div`
  width: auto;
  height: 600px;
  background-color: #fff3be;
  margin-top: 0px;

  a {
    color: black;
    text-decoration-line: none;
  }

  strong {
    font-size: 23px;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    padding-left: 0;
  }

  #Title {
    font-size: 35px;
    padding: 60px 200px;
    margin-top: 0px;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 18%;
  }
`;

const PopularSerch = styled.div`
  #Title {
    padding: 60px 200px;
    font-size: 35px;
    margin: 0px;
  }
  a {
    color: black;
    text-decoration-line: none;
  }
`;

const PopularSerchText = styled.div`
  width: auto;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const PopularSerchTextMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  padding-left: 0;
  margin: 0px;
  li {
    padding: 8px 30px;
  }
  a {
    color: black;
  }
  li:hover {
    background-color: #fdb8d8;
    border-radius: 4px;
  }
`;

const PopularSerchIcon1 = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  list-style: none;
  padding-top: 100px;
  padding-bottom: 100px;

  strong {
    font-size: 23px;
  }

  ul {
    padding-left: 0px;
  }

  img {
    width: 250px;
    height: 250px;
    border-radius: 18%;
  }
`;

const PopularSerchIcon2 = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  list-style: none;
  padding-top: 100px;
  padding-bottom: 100px;

  strong {
    font-size: 23px;
  }
  ul {
    padding-left: 0px;
  }
  img {
    width: 250px;
    height: 250px;
    border-radius: 18%;
  }
`;
