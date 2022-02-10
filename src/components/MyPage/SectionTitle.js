import React from "react";
import styled from "styled-components";
import MyPageLink from "./MyPageLink";

function SectionTitle({ children }) {
  return (
    <StyledWrapper>
      <MyPageLink />
      <StyledSectionTitle>
        <LineDivider />
        <SectionLabel>{children}</SectionLabel>
        <LineDivider />
      </StyledSectionTitle>
    </StyledWrapper>
  );
}

export default SectionTitle;

const StyledWrapper = styled.div`
  align-items: flex-start;
  width: 100%;
`;

const StyledSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0 5rem;
  width: 100%;
  height: 12rem;
`;

const LineDivider = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid rgb(204, 204, 204);
  margin: 1rem;
`;

const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 1rem;
  font-size: 2rem;
  font-weight: bolder;
`;
