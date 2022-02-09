import styled, { css } from "styled-components";

import ProductGrid from "../../components/MyPage/ProductGrid";
import SectionTitle from "../../components/MyPage/SectionTitle";
import { useEffect, useState } from "react";
import { db } from "../../fbase";

function LikeRecordPage() {
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

  return isLoading ? (
    <div>loading</div>
  ) : (
    <StyledLikeRecord>
      <SectionTitle>찜한 목록</SectionTitle>
      <ProductGrid productData={data} />
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
