import styled from "styled-components";
import { Link } from "react-router-dom";

function Management() {
  return (
    <div>
      <AnserSection>
        <List as="a" href="#">
          Q. 커뮤니티 가이드라인
        </List>
        <List as="a" href="#">
          Q. 중고거래 운영정책
        </List>
        <List as="a" href="#">
          Q. 당근장터 지역광고 운영정책
        </List>
        <List as="a" href="#">
          Q. 동네생활 운영정책
        </List>
        <List as="a" href="#">
          Q. 신고는 어떻게 하나요?
        </List>
      </AnserSection>
    </div>
  );
}

export default Management;
const AnserSection = styled.div`
  margin: 0 auto;
  width: 100%;
  display: block;
  a {
    text-decoration: none;
    font-size: 1.6rem;
    color: #3d3d3d;
    &:visited,
    link {
      color: #3d3d3d;
      text-decoration: none;
    }
    &: hover {
      color: #f04124;
    }
  }
`;
const List = styled(Link)`
  display: block;
  padding: 18px 30px;
  text-align: left;
  border-bottom: 1px solid #c4c4c4;
`;
