import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ProductGrid from "../../components/MyPage/ProductGrid";
import "../../globalStyles.css";
import { db } from "../../fbase";
import SectionTitle from "../../components/MyPage/SectionTitle";
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
      <SearchResultBox>
        <h5>검색 결과</h5>
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
