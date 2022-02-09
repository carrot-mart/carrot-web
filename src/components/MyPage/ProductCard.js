import styled from "styled-components";
import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import "../../globalStyles.css";

function ProductCard({ product }) {
  const [clickEmoticon, setClickEmoticon] = useState(false);
  const navigate = useNavigate();

  return (
    <StyledProductCard
      onClick={() => {
        navigate("/");
      }}
    >
      <ProductImage src={product.img} />
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductCost>{product.cost}</ProductCost>
        <div className="flexBox">
          <ProductRegion>{product.region}</ProductRegion>
          <ProductResponse
            onClick={(e) => {
              e.stopPropagation();
              setClickEmoticon(!clickEmoticon);
            }}
          >
            {clickEmoticon ? <BsHeartFill fill="red" /> : <BsHeart />}
          </ProductResponse>
        </div>
      </ProductInfo>
    </StyledProductCard>
  );
}

export default ProductCard;

const StyledProductCard = styled.button`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: none;
  text-align: left;
  height: 100%;

  .productInfoFlex {
    display: flex;
    width: 100%;
    align-items: center;

    p {
      flex-grow: 2;
      margin: 0;
    }
  }
`;

const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 2.5rem;
`;

const ProductInfo = styled.div`
  width: 97%;
  margin: 1.5rem auto 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    margin: 0;
  }

  .flexBox {
    display: flex;
    align-items: center;
  }
`;

const ProductTitle = styled.p`
  font-size: 1.7rem;
`;

const ProductResponse = styled.div`
  width: fit-content;
  align-items: right;
`;

const ProductCost = styled.p`
  font-size: 1.7rem;
  font-weight: bolder;
`;

const ProductRegion = styled.p`
  font-size: 1.5rem;
  flex-grow: 1;
`;
