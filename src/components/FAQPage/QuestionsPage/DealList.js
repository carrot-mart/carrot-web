import styled from "styled-components";
import { Link } from "react-router-dom";

function DealList() {
  return (
    <div>
      <AnserSection>
        <List as="a" href="#">
          Q. 중고거래 게시판 거래 및 환불 정책
        </List>
        <List as="a" href="#">
          Q. 당근마켓에서 믿고 거래하세요
        </List>
        <List as="a" href="#">
          Q. 가격제안이 뭬예요?(가격제안하는 방법)
        </List>
        <List as="a" href="#">
          Q. 사기를 당했을 때는 어떻게 하나요?
        </List>
        <List as="a" href="#">
          Q. 다른 지역에서 거래할 수 없나요?
        </List>
      </AnserSection>
    </div>
  );
}

export default DealList;
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
