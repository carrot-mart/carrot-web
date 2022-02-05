import styled from "styled-components";
import { Link } from "react-router-dom";

function Etc() {
  return (
    <div>
      <AnserSection>
        <List as="a" href="#">
          Q. 알림은 어디서 확인하나요?
        </List>
        <List as="a" href="#">
          Q. 알림은 어디서 확인하나요?
        </List>
        <List as="a" href="#">
          Q. 알림은 어디서 확인하나요?
        </List>
        <List as="a" href="#">
          Q. 알림은 어디서 확인하나요?
        </List>
        <List as="a" href="#">
          Q. 알림은 어디서 확인하나요?
        </List>
      </AnserSection>
    </div>
  );
}
export default Etc;
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
