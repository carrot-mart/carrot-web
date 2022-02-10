import styled from "styled-components";
import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { showProductDetail } from "../../redux/features/detail/detailSlice";
import { like, unlike } from "../../redux/features/likes/likesSlice";
import "../../globalStyles.css";

function ProductCard({ product }) {
  const [likes, setLikes] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showDetails = () => {
    dispatch(showProductDetail({ product }));
    navigate("/product/details");
  };
  return (
    <StyledProductCard onClick={showDetails}>
      <ProductImage src={product.img} />
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductCost>{product.cost}</ProductCost>
        <div className="flexBox">
          <ProductRegion>{product.region}</ProductRegion>
          <ProductResponse
            onClick={(e) => {
              e.stopPropagation();
              likes
                ? dispatch(unlike({ product }))
                : dispatch(like({ product }));
              setLikes(!likes);
            }}
          >
            {likes ? (
              <BsHeartFill fill="orangered" />
            ) : (
              <BsHeart fill="orangered" />
            )}
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
  color: orangered;
`;

const ProductRegion = styled.p`
  font-size: 1.5rem;
  flex-grow: 1;
  color: grey;
`;
