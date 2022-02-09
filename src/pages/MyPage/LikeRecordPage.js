import styled, { css } from "styled-components";

import ProductGrid from "../../components/MyPage/ProductGrid";
import SectionTitle from "../../components/MyPage/SectionTitle";
import { keywords } from "../../Tests";
import { useState } from "react";
import { db } from "../../fbase";

function LikeRecordPage() {
  const [data, setData] = useState([]);
  const test = keywords.animals.all;
  console.log(test);

  // const dataRef = db.ref("keywords/animals/전체");
  // dataRef.on("value", (snapshot) => {
  //   setData(snapshot.val());
  // });

  return (
    <StyledLikeRecord>
      <SectionTitle>찜한 목록</SectionTitle>
      <ProductGrid productData={test} />
      <tempBox />
    </StyledLikeRecord>
  );
}

export default LikeRecordPage;

const StyledLikeRecord = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 10rem;
  align-items: center;
`;

const tempBox = styled.div`
  width: 100%;
  background-color: red;
  height: 100px;
`;
