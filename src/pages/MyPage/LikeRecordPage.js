import styled from "styled-components";
import { useEffect, useState } from "react";

import ProductGrid from "../../components/MyPage/ProductGrid";
import SectionTitle from "../../components/MyPage/SectionTitle";
import Navigation from "../../components/Navigation";
import "../../globalStyles.css";
import { db } from "../../fbase";
import { useSelector } from "react-redux";

function LikeRecordPage() {
  const likeData = useSelector((state) => state.likes);
  console.log(likeData);

  return (
    <>
      <Navigation />
      <StyledLikeRecord>
        <SectionTitle>찜한 목록</SectionTitle>
        <ProductGrid productData={likeData} />
      </StyledLikeRecord>
    </>
  );
}

export default LikeRecordPage;

const StyledLikeRecord = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  align-items: center;
`;
