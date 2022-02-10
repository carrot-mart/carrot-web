import React, { useState } from "react";
import styled from "styled-components";

import "../../globalStyles.css";
import ProductGrid from "../../components/MyPage/ProductGrid";
import SectionLabel from "../../components/MyPage/SellBuyRecord/SectionLabel";
import { keywords } from "../../Tests";
import MyPageLink from "../../components/MyPage/MyPageLink";

function SellBuyRecord() {
  const sellRecordData = keywords.animals.강아지;
  const buyRecordData = keywords.beauty.makeup;

  const [viewSell, setViewSell] = useState(true);
  const [data, setData] = useState(sellRecordData);
  const changeData = () => {
    viewSell ? setData(buyRecordData) : setData(sellRecordData);
  };

  return (
    <>
      <StyledSellBuyRecord>
        <MyPageLink />
        <SectionLabel
          viewSell={viewSell}
          setViewSell={setViewSell}
          changeData={changeData}
        />
        <ProductGrid productData={data} />
      </StyledSellBuyRecord>
    </>
  );
}

export default SellBuyRecord;

const StyledSellBuyRecord = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;
