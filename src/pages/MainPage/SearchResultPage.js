import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ProductGrid from "../../components/MyPage/ProductGrid";
import "../../globalStyles.css";
import { db } from "../../fbase";
import { useSelector } from "react-redux";
import Navigation from "../../components/Navigation";

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
    <>
      <Navigation />
      <>
        <h5>검색결과</h5>
        <PopularMenuText>
          <ul class="menu_">
            <li>
              <a href="">
                <p>전체</p>
              </a>
            </li>
            <li>
              <a href="">
                <p>캠핑</p>
              </a>
            </li>
            <li>
              <a href="">
                <p>패딩</p>
              </a>
            </li>
            <li>
              <a href="">
                <p>의자</p>
              </a>
            </li>
            <li>
              <a href="">
                <p>냉장고</p>
              </a>
            </li>
            <li>
              <a href="">
                <p>노트북</p>
              </a>
            </li>
            <li>
              <a href="">
                <p>아이폰</p>
              </a>
            </li>
            <li>
              <a href="">
                <p>난로</p>
              </a>
            </li>
            <li>
              <a href="">
                <p>컴퓨터</p>
              </a>
            </li>
            <li>
              <a href="">
                <p>아이패드</p>
              </a>
            </li>
          </ul>
        </PopularMenuText>
      </>
      <SearchResultBox>
        <ProductGrid productData={data} />
      </SearchResultBox>
    </>
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
    color: gray;
    box-shadow: 2px 3px 5px 0px;
    border-radius: 4px;
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
`;
