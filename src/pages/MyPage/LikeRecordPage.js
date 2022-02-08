import styled, { css } from "styled-components";

import ProductCard from "../../components/MyPage/ProductCard";
import SectionTitle from "../../components/MyPage/SectionTitle";
import { keywords } from "../../Tests";

function LikeRecordPage() {
  const data = keywords.animals.강아지;

  return (
    <StyledLikeRecord>
      <SectionTitle>찜한 목록</SectionTitle>
      <ProductCard data={data} />
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
