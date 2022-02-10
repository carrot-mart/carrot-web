import styled from "styled-components";
import { Link } from "react-router-dom";

function Authentication() {
  return (
    <div>
      <AnserSection>
        <List as="a" href="#">
          Q. 본인인증 문자가 오지 않아요.
        </List>
        <List as="a" href="#">
          Q. 본인인증 문자가 오지 않아요.
        </List>
        <List as="a" href="#">
          Q. 본인인증 문자가 오지 않아요.
        </List>
        <List as="a" href="#">
          Q. 본인인증 문자가 오지 않아요.
        </List>
        <List as="a" href="#">
          Q. 본인인증 문자가 오지 않아요.
        </List>
      </AnserSection>
    </div>
  );
}
export default Authentication;
const AnserSection = styled.div`
  margin: 0 auto;
  width: 100%;
  display: block;
  a {
    text-decoration: none;
    font-size: 1.6rem;
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
