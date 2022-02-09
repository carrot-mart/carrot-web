import styled from "styled-components";
import ProductCard from "./ProductCard";

function ProductGrid({ productData }) {
  return (
    <StyledProductGrid>
      {productData.map((product) => (
        <ProductCard key={product.href} product={product} />
      ))}
    </StyledProductGrid>
  );
}

export default ProductGrid;

const StyledProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 1.5rem;
`;
