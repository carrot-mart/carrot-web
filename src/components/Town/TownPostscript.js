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
    width : 100%
`;

const TownStorePostscript = styled.div`
  margin : 0 auto;
  padding-left : 10px;
  width : 1200px;
  height: 620px;
  h2{
      margin : 0 0 60px 15px;
      font-size:2.5em;
  }
`;

const TownStorePostscriptDetailBox = styled.div`
  width : 1150px;
  height : 500px;
  margin : 0 auto;
  
`;


const TownStorePostscriptDetail = styled.div`
    float: left;
    width: 340px;
    height: 465px;
    margin: 0 39px 0 0;
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
        padding-left : 20px;
    }
    h4{
        font-size: 1.3em;
        
    }

    img{
        width: 50px;
        padding-left : 20px;
    }
`;

const TownStorePostscriptDetailText = styled.div`
    background-color : #DCEAFE;
    padding : 1px 10px;
    width:320px;
    height: 310px;
    line-height : 100%;

    h4{
        font-weight: bold;
        font-size: 1.6em;
        margin-left:10px;
        color: rgb(18, 116, 90);
    }
    
    p{
        margin-left:10px;
        font-size: 1.2em;
        color: rgb(145, 143, 143);
    }
    h5{
        margin-left:10px;
        font-size: 1.4em;
        line-height : 180%;
        padding-left : 0;
    }
`;

