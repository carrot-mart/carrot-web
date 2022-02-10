import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ProductGrid from "../../components/MyPage/ProductGrid";
import "../../globalStyles.css";
import { db } from "../../fbase";
import { useSelector } from "react-redux";

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
`;

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
`;

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
`;

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
`;
