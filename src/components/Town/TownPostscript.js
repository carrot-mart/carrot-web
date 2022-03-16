import React, { useState } from 'react';
import styled from "styled-components";

import Userdefault from '../../asset/TownImg/userdefault.svg';

function TownPostscript() {
    return (
        <TownStorePostscriptBox>
            <TownStorePostscript>
                <h2>동네주민의 진짜 후기를 찾아보세요.</h2>
                <TownStorePostscriptDetailBox>
                    <TownStorePostscriptDetail>
                        <a href='https://town.daangn.com/bp/330711'>
                            <img src={Userdefault} />
                            <h5>대박살롱 님의 추천</h5>
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
                            <h5>비우는중 님의 추천</h5>
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
                            <h5>재정오빠 님의 추천</h5>
                            <TownStorePostscriptDetailText>
                                <h4>GO익스프레스</h4>
                                <p>대전광역시 달서구 성당동</p>
                                <h5>"♥♥ 일단 한 번 가보세요 ! ♥♥ "</h5>
                            </TownStorePostscriptDetailText>
                        </a>
                    </TownStorePostscriptDetail>
                </TownStorePostscriptDetailBox>
            </TownStorePostscript>
        </TownStorePostscriptBox>
    );
}

export default TownPostscript;


const TownStorePostscriptBox = styled.div`
    width : 100%;
    border:1px solid red;
`;

const TownStorePostscript = styled.div`
  margin : 0 auto;
  width : 100%;
  max-width : 120rem;
  height: fit-content;
  min-height : 50rem;
  h2{
      margin : 0 0 6rem 2rem;
      font-size:4rem;
  }
`;

const TownStorePostscriptDetailBox = styled.div`
  width : 100%;
  height : fit-content;
  margin : 0 auto;
  font-size: 1.6rem;
  
`;


const TownStorePostscriptDetail = styled.div`
    float: left;
    height : fit-content;
    margin: 0 4rem 0 1rem;
    border-radius:5px;

    a{
        text-decoration: none;
        color : black;
    }
    
    a:visited{
        color: black;
    }

    h5{
        font-size: 1.3em;
        padding-left : 1rem;
    }
    h4{
        font-size: 1.3em;
        
    }

    img{
        width: 5rem;
        padding-left : 2rem;
    }
`;

const TownStorePostscriptDetailText = styled.div`
    background-color : #DCEAFE;
    padding : 1rem;
    width:32rem;
    height: 31rem;
    line-height : 100%;

    h4{
        font-weight: bold;
        font-size: 1.6em;
        margin-left:1rem;
        color: rgb(18, 116, 90);
    }
    
    p{
        margin-left:1rem;
        font-size: 1.2em;
        color: rgb(145, 143, 143);
    }
    h5{
        margin-left:1rem;
        font-size: 1.4em;
        line-height : 180%;
        padding-left : 0;
    }
`;

