import React, { useState } from "react";
import styled from "styled-components";
import {keywords} from"../../Tests"


function MainPage() {
    const PopularItemData = keywords.animals;
    const PopularSearchData = keywords.animals;

    

    return (    
    <>
        <MainRepresentative>
            <MainRepresentativeText>
                <p id="Title">당신 근처의<br />당근 장터</p>
                <p id="Text">중고 거래부터 동네 홍보까지, 이웃과 함께해 <br />가깝고 따뜻한 당신의근처를 만들어요</p>
            </MainRepresentativeText>
            <MainRepresentativeImg>
                <div id="Img1"><img src="main1.png" /></div>
                <div id="Img2"><img src="main2.png" /></div>
                <div id="Img3"><img src="main3.png" /></div>
            </MainRepresentativeImg>
        </MainRepresentative>
        <RepresentativeSearch>
        <ul>
            <li>
                <a href=""><img src="icon/difital_devices.jpeg" /><br /><p>디지털기기</p></a>
            </li>
            <li>
                <a href=""><img src="icon/popular_items.jpeg" /><br /><p>인기매물</p></a>
            </li>
            <li>
                <a href=""><img src="icon/appliances.jpeg" /><br /><p>생활가전</p></a>
            </li>
            <li>
                <a href=""><img src="icon/furniture.jpeg" /><br /><p>가구/인테리어</p></a>
            </li>
            <li>
                <a href=""><img src="icon/children.jpeg" /><br /><p>유아동</p></a>
            </li>
            <li>
                <a href=""><img src="icon/food.jpeg" /><br /><p>생활/가공식품</p></a>
            </li>
            <li>
                <a href=""><img src="icon/childrenbook.jpeg" /><br /><p>유아도서</p></a>
            </li>
            <li>
                <a href=""><img src="icon/sports.jpeg" /><br /><p>스포츠/레저</p></a>
            </li>
            <li>
                <a href=""><img src="icon/women_merchandise.jpeg" /><br /><p>여성잡화</p></a>
            </li>
            <li>
                <a href=""><img src="icon/women's_clothing.jpeg" /><br /><p>여성의류</p></a>
            </li>
            <li>
                <a href=""><img src="icon/men's_fachion.jpeg" /><br /><p>남성패션/잡화</p></a>
            </li>
            <li>
                <a href=""><img src="icon/game.jpeg" /><br /><p>게임/취미</p></a>
            </li>
        </ul>
        </RepresentativeSearch>
        <PopularItems>
            <p id="Title">중고거래 인기매물</p>
            <ul>
                {PopularItemData.강아지.map((item) => 
                    <li>
                        <div>
                            <img src={item.img}/>
                            <br />
                            <p id='sentence'>
                                {item.content}
                            </p>
                            <br />
                            <span id="area">
                                {item.region}
                            </span>
                            <br />
                            <span id="price">
                                {item.cost}
                            </span>
                        </div>
                    </li>
                )}
            </ul>
        </PopularItems>
        <PopularSearch>
            <p id="Title">중고거래 인기검색</p>
            <PopularSearchText>
                <PopularSearchTextMenu>
                    <li><a href=""><p>자전거</p></a></li>
                    <li><a href=""><p>캠핑</p></a></li>
                    <li><a href=""><p>패딩</p></a></li>
                    <li><a href=""><p>의자</p></a></li>
                    <li><a href=""><p>냉장고</p></a></li>
                    <li><a href=""><p>노트북</p></a></li>
                    <li><a href=""><p>아이폰</p></a></li>
                    <li><a href=""><p>난로</p></a></li>
                    <li><a href=""><p>컴퓨터</p></a></li>
                    <li><a href=""><p>아이패드</p></a></li>
                </PopularSearchTextMenu>
            </PopularSearchText>
            
                <PopularSearchIcon1>
                    <ul>
                    {PopularItemData.고양이.map((item) => 
                    <li>
                    <div>
                        <img src={item.img}/>
                        <br />
                        <p id='sentence'>
                            {item.content}
                        </p>
                        <br />
                        <span id="area">
                            {item.region}
                        </span>
                        <br />
                        <span id="price">
                            {item.cost}
                        </span>
                    </div>
                </li>
                )}
                </ul>
                </PopularSearchIcon1>
            
                <PopularSearchIcon2>
                <ul>
                    {PopularItemData.고양이.map((item) => 
                    <li>
                    <div>
                        <img src={item.img}/>
                        <br />
                        <p id='sentence'>
                            {item.content}
                        </p>
                        <br />
                        <span id="area">
                            {item.region}
                        </span>
                        <br />
                        <span id="price">
                            {item.cost}
                        </span>
                    </div>
                </li>
                )}
                </ul>
            </PopularSearchIcon2>
        </PopularSearch>
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
        border-radius: 60px;
        box-shadow: 2px 3px 5px 0px;
    }
    #Img1 {
        width: 250px;
        height: 550px;
        transform: translate(0, 230px);
    }
    #Img2 {
        width: 250px;
        height: 550px;
        transform: translate(300px, -250px);
    }
    #Img3 {
        width: 250px;
        height: 550px;
        transform: translate(180px, -950px);
    }
`

const RepresentativeSearch = styled.div`
    width: auto;
    height: 200px;
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;

    p {
        font-size : 5px;
    }
    a {
        width: 100px;
        height: 130px;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;

        color: black;
        text-decoration-line: none;
        }

    ul {
        display: flex;
        list-style: none;
        justify-content: center;
        align-items:center;
        padding-left: 0px;
        }

    li {
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;

        }
        a:hover {
            color:gray;
            box-shadow: 2px 3px 5px 0px;
            box-shadow-color:gray;
            border-radius: 4px;
            }

    img {
        width: 55px;
        height: 55px;
        }
`

const PopularItems = styled.div`
    width: 100%;
    height: 600px;
    background-color: #fff3be;
    margin-top: 0px;
    a {
        color: black;
        text-decoration-line: none;
        }

    ul {
        display: flex;
        list-style: none;
        padding-left: 0px;
        margin-left:55px;
        margin-right:50px;
        overflow:hidden;
    }

    li {
        padding: 8px 12px;
        }

    #sentence {
        overflow:hidden;
        text-overflow: ellipsis;
        white-space:nowrap; 
        width: 210px;
        height: 20px;
    }

    #Title {
        font-size: 35px;
        padding: 60px 100px;
        margin-top: 0px;
        font-size: 40px
    }

    #area {
        font-size:13px;
    }

    #price {
        font-size:10px;
        color:red;
    }

    img {
        margin-top:0px
        width: 200px;
        height: 200px;
        border-radius: 18%;
        }
`

const PopularSearch = styled.div`
    #Title {
        padding: 40px 200px;
        font-size: 35px;
        margin: 0px;
    }
    a {
        color: black;
        text-decoration-line: none;
        }
`

const PopularSearchText = styled.div`
    width: auto;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;


`
const PopularSearchTextMenu = styled.ul`
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
    p:hover {
        color:gray;
        background-color: #fff7cc;
        
        border-radius: 4px;
        }
`

const PopularSearchIcon1 = styled.div `
width: 100%;
    height: 400px;
    margin-top: 0px;
    
    a {
        color: black;
        text-decoration-line: none;
        }

    ul {
        
        display: flex;
        list-style: none;
        padding-left: 0px;
        margin-left:55px;
        margin-right:50px;
        overflow-x: hidden;
     overflow-y: visible;
}



    li {
        padding: 8px 12px;
        }

    #sentence {
        overflow:hidden;
        text-overflow: ellipsis;
        white-space:nowrap; 
        width: 210px;
        height: 20px;
    }

    #Title {
        font-size: 35px;
        padding: 60px 100px;
        margin-top: 0px;
        font-size: 40px
    }

    #area {
        font-size:13px;
    }

    #price {
        font-size:10px;
        color:red;
    }

    img {
        margin-top:0px
        width: 200px;
        height: 200px;
        border-radius: 18%;
        }
`;

const PopularSearchIcon2 = styled.div`
width: 100%;
    height: 500px;
    margin-top: 0px;
    
    a {
        color: black;
        text-decoration-line: none;
        }

    ul {
        
        display: flex;
        list-style: none;
        padding-left: 0px;
        margin-left:55px;
        margin-right:50px;
        overflow-x: hidden;
        overflow-y: visible;
}



    li {
        padding: 8px 12px;
        }

    #sentence {
        overflow:hidden;
        text-overflow: ellipsis;
        white-space:nowrap; 
        width: 210px;
        height: 20px;
    }

    #Title {
        font-size: 35px;
        padding: 60px 100px;
        margin-top: 0px;
        font-size: 40px
    }

    #area {
        font-size:13px;
    }

    #price {
        font-size:10px;
        color:red;
    }

    img {
        margin-top:0px
        width: 200px;
        height: 200px;
        border-radius: 18%;
        }
`