import styled from "styled-components";
import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const [clickEmoticon, setClickEmoticon] = useState(false);
  const navigate = useNavigate();

  return (
    <StyledProductCard onClick={() => navigate("/")}>
      <ProductImage src={product.img} />
      <p className="productTitle">{product.title}</p>
      <p className="productCost">{product.cost}</p>
      <ProductResponse onClick={() => setClickEmoticon(!clickEmoticon)}>
        {clickEmoticon ? <BsHeartFill /> : <BsHeart />}
      </ProductResponse>
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
`;

const ProductImage = styled.img`
  height: 15rem;
  width: 100%;
  object-fit: cover;
`;

const ProductResponse = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
