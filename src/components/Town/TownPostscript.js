import React, { useState } from 'react';
import styled from "styled-components";

import Userdefault from '../../img/TownImg/userdefault.svg';

function TownPostscript() {
    return (
        <TownStorePostscript>
            <h2>동네주민의 진짜 후기를 찾아보세요.</h2>
            <TownStorePostscriptDetail>
                <a href='https://town.daangn.com/bp/330711'>
                    <img src={Userdefault} />
                    <h4>대박살롱 님의 추천</h4>
                    <TownStorePostscriptDetailText>
                        <h4>밍스파</h4>
                        <p>대전광역시 서구 둔산동</p>
                        <h5>"엄마랑 커플마사지 받고 왔어요.. 다들 치절하시고 차근차근 잘해주셨어요!!"</h5>
                    </TownStorePostscriptDetailText>
                </a>
            </TownStorePostscriptDetail>
            <TownStorePostscriptDetail>
                <a href='https://town.daangn.com/bp/977771'>
                    <img src={Userdefault} />
                    <h4>비우는중 님의 추천</h4>
                    <TownStorePostscriptDetailText>
                        <h4>카페하인츠 삼거리점</h4>
                        <p>충청남도 천안시 동남구 청룡동</p>
                        <h5>"쿠폰은 발급 했지만, 누구나 사용할 수 있는건 아니에요 문의등록 해야 사용하실 수 있어요!</h5>
                    </TownStorePostscriptDetailText>
                </a>
            </TownStorePostscriptDetail>
            <TownStorePostscriptDetail>
                <a href='https://town.daangn.com/bp/330711'>
                    <img src={Userdefault} />
                    <h4>재정오빠 님의 추천</h4>
                    <TownStorePostscriptDetailText>
                        <h4>GO익스프레스</h4>
                        <p>대전광역시 달서구 성당동</p>
                        <h5>"♥♥ 일단 한 번 가보세요 ! ♥♥ "</h5>
                    </TownStorePostscriptDetailText>
                </a>
            </TownStorePostscriptDetail>
        </TownStorePostscript>
    );
}

export default TownPostscript;


const TownStorePostscript = styled.div`
  margin : 200px 70px;
  margin-bottom : 200px;
  padding-left : 20px;
  width : 1440px;
  height: 300px;
  h2{
      margin-left : 30px;
      font-size:2.5em;
  }
`;

const TownStorePostscriptDetail = styled.div`
    float: left;
    width: 400px;
    height: 350px;
    margin: 20px 40px;
    border-radius:5px;

    a{
        text-decoration: none;
        color : black;
    }
    
    a:visited{
        color: black;
    }

    h4{
        font-size: 1.5em;
    }

    img{
        width: 40px;
    }
`;

const TownStorePostscriptDetailText = styled.div`
    background-color : #DCEAFE;
    padding : 1px 10px;
    width:100%;
    height: 350px;
    line-height : 100%;

    h4{
        font-weight: bold;
        font-size: 2em;
        margin-left:10px;
        color: rgb(18, 116, 90);
    }
    
    p{
        margin-left:10px;
        font-size: 1.5em;
        color: rgb(145, 143, 143);
    }
    h5{
        margin-left:10px;
        font-size: 1.6em;
        line-height : 180%;
    }
`;

