import React from "react";
import styled, { css } from "styled-components";

function SectionLabel({ viewSell, setViewSell, changeData }) {
  return (
    <StyledSectionLabel>
      <LineDivider />
      <SectionFlex>
        <LabelButton
          isClicked={viewSell}
          onClick={() => {
            setViewSell(!viewSell);
            changeData();
          }}
        >
          판매내역
        </LabelButton>
        <LabelButton
          isClicked={!viewSell}
          onClick={() => {
            setViewSell(!viewSell);
            changeData();
          }}
        >
          구매내역
        </LabelButton>
      </SectionFlex>
      <LineDivider />
    </StyledSectionLabel>
  );
}

export default SectionLabel;

const StyledSectionLabel = styled.div`
  margin: 1rem 0;
`;

const LineDivider = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid rgb(204, 204, 204);
`;

const SectionFlex = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
`;

const LabelButton = styled.button`
  border: none;
  background-color: white;
  border-radius: 10px;
  height: 2.2rem;
  width: 8rem;
  margin: 0 1rem;
  font-size: 1rem;
  font-weight: bolder;

  ${(props) =>
    props.isClicked &&
    css`
      background-color: rgb(240, 65, 36);
      color: white;
      transition-duration: 0.1s;
    `}
`;
