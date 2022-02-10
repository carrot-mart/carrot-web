import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

function MyPageLink() {
  return (
    <StyledMyPageLink to="/mypage">
      <MdOutlineArrowBackIosNew />
      <p>마이페이지</p>
    </StyledMyPageLink>
  );
}

export default MyPageLink;

const StyledMyPageLink = styled(Link)`
  display: flex;
  width: fit-content;
  font-size: 2rem;
  margin-top: 8rem;
  color: orangered;
  text-decoration: none;

  p {
    margin: 0 1rem;
    font-weight: bold;
  }
`;
