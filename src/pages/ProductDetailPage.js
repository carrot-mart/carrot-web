import styled from "styled-components";
import { useSelector } from "react-redux";

import "../globalStyles.css";

function ProductDetailPage() {
  const product = useSelector((state) => state.detail.product);

  return (
    <StyledWrapper>
      <DetailContainer>
        <ProductImage src={product.img} />
        <ProductTopSection>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductCost>{product.cost}</ProductCost>
          <ProductRegion>{product.region}</ProductRegion>
        </ProductTopSection>
        <LineDivider />
        <ProductBottomSection>{product.content}</ProductBottomSection>
      </DetailContainer>
    </StyledWrapper>
  );
}

export default ProductDetailPage;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  width: 40%;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 45rem;
`;

const ProductTopSection = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  width: 98%;
  margin: 3rem auto 0;
`;

const ProductTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const ProductRegion = styled.p`
  color: grey;
  font-size: 1rem;
`;

const ProductCost = styled.h1`
  color: orangered;
  font-size: 1.5rem;
  font-weight: bolder;
  margin: 1rem 0;
`;

const LineDivider = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid rgb(204, 204, 204);
`;

const ProductBottomSection = styled.div`
  width: 98%;
  margin: 3rem auto;
  font-size: 2rem;
  line-height: 4rem;
`;
