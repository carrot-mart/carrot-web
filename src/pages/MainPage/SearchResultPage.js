import React, { useState } from "react";
import styled from 'styled-components';

function MainPagePopularDetail() {
    return (
        <PopularDetail>
            <h5>검색결과</h5>
            <PopularMenuText>
                <ul class="menu_">
                    <li><a href="">전체</a></li>
                    <li><a href="">캠핑</a></li>
                    <li><a href="">패딩</a></li>
                    <li><a href="">의자</a></li>
                    <li><a href="">냉장고</a></li>
                    <li><a href="">노트북</a></li>
                    <li><a href="">아이폰</a></li>
                    <li><a href="">난로</a></li>
                    <li><a href="">컴퓨터</a></li>
                    <li><a href="">아이패드</a></li>
                </ul>
            </PopularMenuText>
            <PopularMenuIcon1>
                <ul class="icon_1">
                    <li>
                        <a href=""><img src="data/꽃.jpg" /><br /><strong>혼다 전기오토바이 자전거...</strong><br /><span>경기도 성남시 분당구 금곡동</span><br /><span id="price">9000,000</span></a>
                    </li>
                    <li>
                        <a href=""><img src="data/꽃.jpg" /><br /><strong>혼다 전기오토바이 자전거...</strong><br /><span>경기도 성남시 분당구 금곡동</span><br /><span id="price">9000,000</span></a>
                    </li>
                    <li>
                        <a href=""><img src="data/꽃.jpg" /><br /><strong>혼다 전기오토바이 자전거...</strong><br /><span>경기도 성남시 분당구 금곡동</span><br /><span id="price">9000,000</span></a>
                    </li>
                </ul>
            </PopularMenuIcon1>
            <PopularMenuIcon2>
                <ul class="icon_2">
                    <li>
                        <a href=""><img src="data/꽃.jpg" /><br /><strong>혼다 전기오토바이 자전거...</strong><br /><span>경기도 성남시 분당구 금곡동</span><br /><span id="price">9000,000</span></a>
                    </li>
                    <li>
                        <a href=""><img src="data/꽃.jpg" /><br /><strong>혼다 전기오토바이 자전거...</strong><br /><span>경기도 성남시 분당구 금곡동</span><br /><span id="price">9000,000</span></a>
                    </li>
                    <li>
                        <a href=""><img src="data/꽃.jpg" /><br /><strong>혼다 전기오토바이 자전거...</strong><br /><span>경기도 성남시 분당구 금곡동</span><br /><span id="price">9000,000</span></a>
                    </li>
                </ul>
            </PopularMenuIcon2>
            <PopularMenuIcon3>
                <ul class="icon_3">
                    <li>
                        <a href=""><img src="data/꽃.jpg" /><br /><strong>혼다 전기오토바이 자전거...</strong><br /><span>경기도 성남시 분당구 금곡동</span><br /><span id="price">9000,000</span></a>
                    </li>
                    <li>
                        <a href=""><img src="data/꽃.jpg" /><br /><strong>혼다 전기오토바이 자전거...</strong><br /><span>경기도 성남시 분당구 금곡동</span><br /><span  id="price">9000,000</span></a>
                    </li>
                    <li>
                        <a href=""><img src="data/꽃.jpg" /><br /><strong>혼다 전기오토바이 자전거...</strong><br /><span>경기도 성남시 분당구 금곡동</span><br /><span id="price">9000,000</span></a>
                    </li>
                </ul>
            </PopularMenuIcon3>
        </PopularDetail>
    );

}

export default MainPagePopularDetail;

const PopularDetail = styled.div`
    h5 {
        padding: 0px 320px;
        font-size: 35px;
        margin: 0px;
        }
` 
const PopularMenuText = styled.div`
    width: auto;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: space-around;
        list-style: none;
        padding-left: 0;
        margin: 0px;
    }

    li {
        padding: 8px 30px;
        }

    a {
        text-decoration-line: none;
        color: black;
        }

    li:hover {
        background-color: #fdb8d8;
        border-radius: 4px;
        }
`

const PopularMenuIcon1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    padding-left: 0;
    margin: 0px;
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        justify-content: space-around;
        list-style: none;
        padding-left: 0px;
        }

    img {
        width: 250px;
        height: 250px;
        border-radius: 18%;
        }

    li {
        padding: 8px 30px;
        }

    a {
        text-decoration-line: none;
        color: black;
        }

    strong {
        font-size: 23px;
        }

    #price {
        color: red;
        }
`

const PopularMenuIcon2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    padding-left: 0;
    margin: 0px;
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        justify-content: space-around;
        list-style: none;
        padding-left: 0px;
        }

    img {
        width: 250px;
        height: 250px;
        border-radius: 18%;
        }

    li {
        padding: 8px 30px;
        }

    a {
        text-decoration-line: none;
        color: black;
        }

    strong {
        font-size: 23px;
        }

    #price {
        color: red;
        }
`

const PopularMenuIcon3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    padding-left: 0;
    margin: 0px;

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        justify-content: space-around;
        list-style: none;
        padding-left: 0px;
        }

    img {
        width: 250px;
        height: 250px;
        border-radius: 18%;
        }

    li {
        padding: 8px 30px;
        }

    a {
        text-decoration-line: none;
        color: black;
        }

    strong {
        font-size: 23px;
        }

    #price {
        color: red;
        }
`