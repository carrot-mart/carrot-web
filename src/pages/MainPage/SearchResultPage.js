import React, { useState } from "react";
import styled from 'styled-components';
import {keywords} from "../../Tests"

function MainPagePopularDetail() {
    const PopularItemData = keywords.animals;
    const PopularSearchData = keywords.animals;

    return (
        <PopularDetail>
            <h5>검색결과</h5>
            <PopularMenuText>
                <ul class="menu_">
                    <li><a href=""><p>전체</p></a></li>
                    <li><a href=""><p>캠핑</p></a></li>
                    <li><a href=""><p>패딩</p></a></li>
                    <li><a href=""><p>의자</p></a></li>
                    <li><a href=""><p>냉장고</p></a></li>
                    <li><a href=""><p>노트북</p></a></li>
                    <li><a href=""><p>아이폰</p></a></li>
                    <li><a href=""><p>난로</p></a></li>
                    <li><a href=""><p>컴퓨터</p></a></li>
                    <li><a href=""><p>아이패드</p></a></li>
                </ul>
            </PopularMenuText>
            <PopularMenuIcon1>
                <ul class="icon_1">
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
            </PopularMenuIcon1>
            <PopularMenuIcon2>
                <ul class="icon_2">
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
            </PopularMenuIcon2>
            <PopularMenuIcon3>
                <ul class="icon_3">
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
            </PopularMenuIcon3>
        </PopularDetail>
    );
                }

function SearchResultPage() {
  const keyword = "plants";
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    db.ref(`keywords/${keyword}/전체`)
      .once("value")
      .then((snapshot) => {
        setIsLoading(false);
        setData(snapshot.val());
      });
  }, [keyword]);

  return (
    <SearchResultBox>
      <h5>검색결과</h5>
      <ProductGrid productData={data} />
    </SearchResultBox>
  );
}

export default SearchResultPage;

const SearchResultBox = styled.div`
  width: 80%;
  margin: auto;
  h5 {
    font-size: 35px;
    margin: 0px;
  }
`;
const PopularMenuText = styled.div`
a:hover {
    color:gray;
    box-shadow: 2px 3px 5px 0px;
    box-shadow-color:gray;
    border-radius: 4px;
    }
    width: auto;
    height: 150px;
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

    a {
        text-decoration-line: none;
        color: black;
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
    padding-left: 0;
    margin: 0px;
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        justify-content: space-around;
        list-style: none;
        padding-left: 0px;
        margin-left:55px;
        margin-right:50px;
        overflow-x: hidden;
        overflow-y: visible;
        }

    img {
        margin-top:0px;
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
        color: red;
        font-size:10px;
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
    margin-left:55px;
    margin-right:50px;
    overflow-x: hidden;
    overflow-y: visible;
    }

img {
    margin-top:0px;
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
    color: red;
    font-size:10px;
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
    margin-left:55px;
    margin-right:50px;
    overflow-x: hidden;
    overflow-y: visible;
    }

img {
    margin-top:0px;
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
    color: red;
    font-size:10px;
    }
`
