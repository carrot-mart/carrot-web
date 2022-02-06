import styled from "styled-components";
import { Link } from "react-router-dom";

function RestrictedUse() {
  return (
    <div>
      <AnserSection>
        <List as="a" href="#">
          Q. 판매 금지 물품이 보여요!
        </List>
        <List as="a" href="#">
          Q. 판매 금지 물품이 보여요!
        </List>
        <List as="a" href="#">
          Q. 판매 금지 물품이 보여요!
        </List>
        <List as="a" href="#">
          Q. 판매 금지 물품이 보여요!
        </List>
        <List as="a" href="#">
          Q. 판매 금지 물품이 보여요!
        </List>
      </AnserSection>
    </div>
  );
}
export default RestrictedUse;
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
