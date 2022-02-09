import styled from "styled-components";
import { Link } from "react-router-dom";

function Manner() {
  return (
    <div>
      <AnserSection>
        <List as="a" href="#">
          Q. 당근마켓에서 지켜야 할 매너
        </List>
        <List as="a" href="#">
          Q. 당근마켓에서 지켜야 할 매너
        </List>
        <List as="a" href="#">
          Q. 당근마켓에서 지켜야 할 매너
        </List>
        <List as="a" href="#">
          Q. 당근마켓에서 지켜야 할 매너
        </List>
        <List as="a" href="#">
          Q. 당근마켓에서 지켜야 할 매너
        </List>
      </AnserSection>
    </div>
  );
}
export default Manner;
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
