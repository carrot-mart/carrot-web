import React, { useState } from "react";
import styled from "styled-components";
<<<<<<< HEAD
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

=======

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
>>>>>>> 90c1f955128d2b7a798290aa279aaa0c9447fef7
}

export default MainPage;

const MainRepresentative = styled.div`
<<<<<<< HEAD
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
=======
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
>>>>>>> 90c1f955128d2b7a798290aa279aaa0c9447fef7
    display: flex;
    list-style: none;
    padding-left: 0px;
  }

  li {
    padding: 8px 12px;
<<<<<<< HEAD

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
=======
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
>>>>>>> 90c1f955128d2b7a798290aa279aaa0c9447fef7
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 90c1f955128d2b7a798290aa279aaa0c9447fef7
