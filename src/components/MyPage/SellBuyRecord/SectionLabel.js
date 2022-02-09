import styled, { css } from "styled-components";

import "../../../globalStyles.css";

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
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  height: 8rem;
  align-items: center;
  margin: 1rem 0 5rem;
`;

const LineDivider = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid rgb(204, 204, 204);
`;

const SectionFlex = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LabelButton = styled.button`
  border: none;
  background-color: white;
  border-radius: 10px;
  height: fit-content;
  width: fit-content;
  padding: 1rem 5rem;
  margin: 0 1rem;
  font-size: 2rem;
  font-weight: bolder;

  ${(props) =>
    props.isClicked &&
    css`
      background-color: rgb(240, 65, 36);
      color: white;
      transition-duration: 0.1s;
    `}
`;
