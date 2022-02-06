import React, { useState } from 'react';
import styled from "styled-components";


import StorePicture2 from '../../asset/TownImg/store2.png';
import StorePicture3 from '../../asset/TownImg/store3.png';
import StorePicture8 from '../../asset/TownImg/store8.png';
import StorePicture4 from '../../asset/TownImg/store4.svg';
import StorePicture5 from '../../asset/TownImg/store5.png';
import StorePicture6 from '../../asset/TownImg/store6.png';
import StorePicture1 from '../../asset/TownImg/store1.png';
import StorePicture7 from '../../asset/TownImg/store7.png';
import PostscriptClick from '../../asset/TownImg/PostscriptClick.png';

function TownStoreInfoBox() {
    return (
        <TownStoreLastBox>
            <h1>우리동네 가게 소식</h1>
            <TownStoretitleList>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/6088/stores">
                        전체
                    </a>
                </TownStoretitleListButton>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/6088/stores?categoryId=1160">
                        카페
                    </a>
                </TownStoretitleListButton>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/6088/stores?categoryId=18">
                        휴대폰판매
                    </a>
                </TownStoretitleListButton>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/6088/stores?categoryId=267">
                        이사
                    </a>
                </TownStoretitleListButton>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/6088/stores?categoryId=224">
                        네일샵
                    </a>
                </TownStoretitleListButton>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/6088/stores?categoryId=265">
                        미용실
                    </a>
                </TownStoretitleListButton>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/6088/stores?categoryId=223">
                        피부관리
                    </a>
                </TownStoretitleListButton>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/6088/stores?categoryId=703">
                        기타학원
                    </a>
                </TownStoretitleListButton>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/328/stores?categoryId=212">
                        공인중개사
                    </a>
                </TownStoretitleListButton>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/328/stores?categoryId=244">
                        주택수리종합
                    </a>
                </TownStoretitleListButton>
            </TownStoretitleList>

            <TownStoreH3>
                다양한 동네가게를 볼 수 있어요.
            </TownStoreH3>

            <TownStoreListDetail>
                <a href='https://town.daangn.com/bp/1379688'>
                    <img src={StorePicture1} />
                    <h4>여성의류전문점</h4>
                    <h5>지니샵</h5>
                    <p>전라남도 영암군 삼호읍</p>
                </a>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <a href='https://town.daangn.com/bp/1379690'>
                    <img src={StorePicture2} />
                    <h4>카페</h4>
                    <h5>봉명동내커피</h5>
                    <p>광주광역시 동구 금남로2가</p>
                </a>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <a href='https://town.daangn.com/bp/1379692'>
                    <img src={StorePicture3} />
                    <h4>네일샵</h4>
                    <h5>쌍촌동 다예네일</h5>
                    <p>광주광역시 서구 쌍촌동</p>
                </a>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <a href='https://town.daangn.com/bp/1379697'>
                    <img src={StorePicture4} />
                    <h4>십자수/뜨개</h4>
                    <h5>뜨개지니</h5>
                    <p>경기도 양주시 만송동</p>
                </a>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <a href='https://town.daangn.com/bp/1379698'>
                    <img src={StorePicture5} />
                    <h4>일반중식점</h4>
                    <h5>라땅쟈 마라탕</h5>
                    <p>경기도 시흥시 정왕동</p>
                </a>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <a href='https://town.daangn.com/bp/1379700'>
                    <img src={StorePicture6} />
                    <h4>카페/디저트</h4>
                    <h5>설빙장림점</h5>
                    <p>부산광역시 사하구 장림동</p>
                </a>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <a href='https://town.daangn.com/bp/1379707'>
                    <img src={StorePicture7} />
                    <h4>가스설비</h4>
                    <h5>경동나비엔 음성중앙점</h5>
                    <p>충청북도 음성군 대소면</p>
                </a>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <a href='https://town.daangn.com/bp/1379897'>
                    <img src={StorePicture8} />
                    <h4>김치판매</h4>
                    <h5>권여사김치찜</h5>
                    <p>경기도 수원시 장안구 정자동</p>
                </a>
            </TownStoreListDetail>

            <TownStoreLastBoxButton>
                <a href='https://town.daangn.com/'>
                    <h3>
                        내 동네 설정하고 우리동네 가게 찾기  &nbsp;
                        <img src={PostscriptClick} />
                    </h3>
                </a>
            </TownStoreLastBoxButton>

        </TownStoreLastBox>

    );
}

export default TownStoreInfoBox;



const TownStoreLastBox = styled.div`
    margin : 400px 0;
    width: 1440px;
    height: 1300px ;
    background-color: rgba(255, 239, 207, 0.55);
    padding : 30px 80px ;

    h1{
        font-size: 2.9em;
    }
`;

const TownStoretitleList = styled.div`
    width: 1440px;
    height: 100px ;
    margin-top: 24px;
    margin-left: 16px;
    display: flex;
    justify-content: space-around;
    align-items: end;
`;


const TownStoretitleListButton = styled.button`
    border: none;
    padding: 15px 9px;
    background-color: rgba(255, 255, 255, 0.2);

    a {
        text-decoration: none;
        color: black;
        background-color: white;
        padding: 1rem;
        border-radius: 80px;
        font-size : 1.8em;
        text-decoration: none;
        border: 1px solid #cdcdcd;
    }
    a:hover{
        background-color: rgb(240, 65, 36);
        font-weight:bold;
        padding: 1rem;
        border-radius: 80px;
        font-size : 1.8em;
        color: white; 
        text-decoration: none;
    }
  `;


const TownStoreH3 = styled.h3`
    font-size : 1.5em;
    margin : 100px 20px 50px 20px;
  `;

const TownStoreListDetail = styled.div`
    background-color: #fff;
    float: left;
    width: 300px;
    height: 300px;
    margin: 20px 30px;
    border-radius:5px;

    a{
        text-decoration: none;
        color : black;
    }
    
    a:visited{
        color: black;
    }

    img{
        border-radius:5px;
        width:100%;
        height: 50%;
    }

    h4{
        margin-left:10px;
        color: rgb(18, 116, 90);
    }
    h5{
        margin-left:10px;
    }

    p{
        margin-left:10px;
        font-size: 0.8em;
        color: rgb(145, 143, 143);
    }
  `;


const TownStoreLastBoxButton = styled.div`
    margin : 830px 450px;
    width:550px;
    height : 60px;
    padding : 5px;
    font-size : 1.5em;
    background-color : #cdcdcd;
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        text-decoration: none;
    }
    
    a:visited{
        color: black;
    }
    
    img{
        width : 35px;
    }
  `;