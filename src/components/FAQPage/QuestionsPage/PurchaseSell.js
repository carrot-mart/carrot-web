import styled from "styled-components";
import { Link } from "react-router-dom";

function PurchaseSell() {
  return (
    <div>
      <AnserSection>
        <List as="a" href="#">
          Q. 판매 금지 물품
        </List>
        <List as="a" href="#">
          Q. 직접 재배하거나 채취한 농수산물도 중고거래 할 수 있나요?
        </List>
        <List as="a" href="#">
          Q. 가품, 전문판매업자 글이 있는데 보기 싫어요 어떻게 해야 하나요?
        </List>
        <List as="a" href="#">
          Q. 내가 운영하는 쇼핑몰 물건을 당근마켓에서 중고거래 할 수 있나요?
        </List>
        <List as="a" href="#">
          Q. 형편없는 물건을 판매해요.
        </List>
      </AnserSection>
    </div>
  );
}
export default PurchaseSell;
const AnserSection = styled.div`
  margin: 0 auto;
  display: block;
`;
const List = styled(Link)`
  display: block;
  padding: 18px 30px;
  text-align: left;
  border-bottom: 1px solid #c4c4c4;
`;
