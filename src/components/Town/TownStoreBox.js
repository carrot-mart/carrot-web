import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { db } from "../../fbase";
import PostscriptClick from "../../asset/TownImg/PostscriptClick.png";
import TownStoreCard from "./TownStoreCard";

function TownStoreBox() {
  const region = "seoul/서대문구/신촌동";
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    db.ref(`regions/${region}`)
      .once("value")
      .then((snapshot) => {
        setIsLoading(false);
        setData(snapshot.val());
      });
  }, [region]);

  return (
    <TownStoreContainer>
      <TownStoreMainBox>
        <h1>우리동네 가게 소식</h1>
        <TownStoretitleList>
          <TownStoretitleListButton>
            <a href="https://town.daangn.com/regions/6088/stores">전체</a>
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

        <TownStoreH3>다양한 동네가게를 볼 수 있어요.</TownStoreH3>

        <TownStoreDetailBox>
          {data.map((store) => (
            <TownStoreCard store={store} />
          ))}
        </TownStoreDetailBox>

        <TownStoreLastBoxButton>
          <a href="https://town.daangn.com/">
            <h3>
              내 동네 설정하고 우리동네 가게 찾기 &nbsp;
              <img src={PostscriptClick} />
            </h3>
          </a>
        </TownStoreLastBoxButton>
      </TownStoreMainBox>
    </TownStoreContainer>
  );
}

export default TownStoreBox;

const TownStoreContainer = styled.div`
  margin: 400px 0;
  width: 100%;
  height: fit-content;
  background-color: rgba(255, 239, 207, 0.55);

  h1 {
    padding: 0 !important;
    margin: 0;
  }
`;

const TownStoreMainBox = styled.div`
  width: 80%;
  margin: auto;
  max-width: 125rem;
  h1 {
    font-size: 4.6em;
    padding: 5rem;
  }
`;

const TownStoretitleList = styled.div`
  max-width: 115rem;
  margin: 0 auto;
  height: fit-content;
  min-height: 5rem;
  display: flex;
  justify-content: space-around;
`;

const TownStoretitleListButton = styled.button`
  border: none;
  background-color: rgba(255, 255, 255, 0.2);

  a {
    text-decoration: none;
    color: black;
    background-color: white;
    padding: 1rem;
    border-radius: 80px;
    font-size: 1.5em;
    text-decoration: none;
    border: 1px solid #cdcdcd;
  }
  a:hover {
    background-color: rgb(240, 65, 36);
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 80px;
    font-size: 1.5em;
    color: white;
    text-decoration: none;
  }
`;

const TownStoreH3 = styled.h3`
  font-size: 2.5em;
  margin: 10rem 0 5rem 5rem;
`;

const TownStoreDetailBox = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const TownStoreListDetail = styled.div`
  background-color: #fff;
  float: left;
  width: 24rem;
  height: 30rem;
  margin: 1rem 2rem 5rem 2rem;
  border-radius: 5px;
  font-size: 2rem;
  line-height: 70%;

  a {
    text-decoration: none;
    color: black;
  }

  a:visited {
    color: black;
  }

  img {
    border-radius: 5px;
    width: 100%;
    height: 50%;
  }

  h4 {
    margin-left: 1rem;
    color: rgb(18, 116, 90);
  }
  h5 {
    margin-left: 1rem;
  }

  p {
    margin-left: 1rem;
    font-size: 0.8em;
    color: rgb(145, 143, 143);
  }
`;

const TownStoreLastBoxButton = styled.div`
  margin: 0 auto;
  width: 55rem;
  height: 6rem;
  padding: 0.5rem;
  font-size: 2.5em;
  background-color: #cdcdcd;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
  }

  a:visited {
    color: black;
  }

  img {
    width: 3.5rem;
  }
`;
