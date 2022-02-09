import styled from "styled-components";
import { Link } from "react-router-dom";

function Acount() {
  return (
    <AnserSection>
      <List as="a" href="#">
        Q. 동네인증이 안 돼요!
      </List>
      <List as="a" href="#">
        Q. 탈퇴는 어떻게 하나요?
      </List>
      <List as="a" href="#">
        Q. 동네인증을 왜 해야 하나요?
      </List>
      <List as="a" href="#">
        Q. 가입한 적 없는데 계정이 있다고 나와요
      </List>
      <List as="a" href="#">
        Q. 계정 휴면상태가 무엇인가요?
      </List>
    </AnserSection>
  );
}
export default Acount;
const AnserSection = styled.div`
  margin: 0 auto;
  width: 100%;
  display: block;
`;
const List = styled(Link)`
  display: block;
  padding: 18px 30px;
  text-align: left;
  border-bottom: 1px solid #c4c4c4;
`;
