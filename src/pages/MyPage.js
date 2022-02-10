import { useNavigate } from "react-router";
import styled from "styled-components";

import defaultUserIcon from "../asset/defaultUserImage.jpeg";
import Navigation from "../components/Navigation";

function MyPage() {
  const navigate = useNavigate();
  const name = "홍길동";
  const email = "abc@kako.com";
  const region = "서초동";
  return (
    <>
      <Navigation />
      <StyledMyPage>
        <UserInfo>
          <Avatar src={require("../asset/defaultUserImage.jpeg")} />
          <UserInfoTexts>
            <p>안녕하세요,</p>
            <h1>{name} 님</h1>
            <h3>{email}</h3>
            <h2>{region}</h2>
          </UserInfoTexts>
        </UserInfo>
        <LineDivider />
        <MenuGrid>
          <Menu>
            <MenuTitle>판매 / 구매내역</MenuTitle>
            <MenuButton onClick={() => navigate("/mypage/sellbuyrecord")}>
              내역 확인
            </MenuButton>
          </Menu>
          <Menu>
            <MenuTitle>관심 목록</MenuTitle>
            <MenuButton onClick={() => navigate("/mypage/likerecord")}>
              관심 목록 확인
            </MenuButton>
          </Menu>
          <Menu>
            <MenuTitle>내 동네 설정</MenuTitle>
            <MenuButton onClick={() => navigate("/mypage/regionsettings")}>
              내 동네 확인
            </MenuButton>
          </Menu>
          <Menu>
            <MenuTitle>내 작성글 보기</MenuTitle>
            <MenuButton onClick={() => navigate("/mypage/likerecord")}>
              내 작성글 확인
            </MenuButton>
          </Menu>
          <Menu>
            <MenuTitle>자주 묻는 질문</MenuTitle>
            <MenuButton onClick={() => navigate("/mypage/faq")}>
              확인하기
            </MenuButton>
          </Menu>
        </MenuGrid>
      </StyledMyPage>
    </>
  );
}

export default MyPage;

const StyledMyPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;
const LineDivider = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid rgb(204, 204, 204);
`;

const UserInfo = styled.div`
  display: flex;
  margin: 0 0 3rem 0;
`;

const UserInfoTexts = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  justify-content: center;

  p {
    font-size: 3rem;
    margin-bottom: 0.2rem;
  }
  h1 {
    font-size: 4rem;
    margin: 0;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    color: grey;
  }
`;

const Avatar = styled.img`
  vertical-align: middle;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
`;

const MenuGrid = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10rem;
  row-gap: 5rem;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  padding: 3rem;
`;
const MenuTitle = styled.p`
  font-size: 3rem;
  margin: 0 0 7rem;
`;
const MenuButton = styled.button`
  padding: 1rem 5rem;
  width: fit-content;
  color: white;
  background-color: orangered;
  border: none;
`;
