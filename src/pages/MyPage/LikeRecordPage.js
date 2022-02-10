import styled from "styled-components";
import { useSelector } from "react-redux";

import ProductGrid from "../../components/MyPage/ProductGrid";
import SectionTitle from "../../components/MyPage/SectionTitle";
import "../../globalStyles.css";

function LikeRecordPage() {
  const likeData = useSelector((state) => state.likes);
  console.log(likeData);

  return (
    <>
      <StyledLikeRecord>
        <SectionTitle>관심 목록</SectionTitle>
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
