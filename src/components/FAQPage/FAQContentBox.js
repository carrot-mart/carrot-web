import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

// 내부
function QnAnserBox() {
  return (
    <FAQWrap>
      <AnswerBox>
        <StyleLink to="management">운영정책</StyleLink>
        <StyleLink to="acount">계정/인증</StyleLink>
        <StyleLink to="purchaseSell">구매/판매</StyleLink>
        <StyleLink to="dealList">거래품목</StyleLink>
        <StyleLink to="manner">거래 매너</StyleLink>
        <StyleLink to="event">이벤트/초대</StyleLink>
        <StyleLink to="restrictedUse">이용제재</StyleLink>
        <StyleLink to="neighbor">동네생활</StyleLink>
        <StyleLink to="coupon">쿠폰</StyleLink>
        <StyleLink to="chat">당근채팅</StyleLink>
        <StyleLink to="authentication">본인인증</StyleLink>
        <StyleLink to="etc">기타</StyleLink>
      </AnswerBox>
      <Outlet />
    </FAQWrap>
  );
}

export default QnAnserBox;
const FAQWrap = styled.div`
  margin: 0px;
  Routes {
    margin: 50px auto;
    width: 100%;
    overflow: hidden;
    height: auto;
    box-sizing: border-box;
  }
`;

const AnswerBox = styled.div`
  margin: 0 auto;
  width: 100%;  
  padding:30px;
  box-sizing: border-box;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;

  }
`;

const StyleLink = styled(Link)`
  margin: 0 auto;
  width: 33.1%;
  line-height:60px;
  text-align:center;
  border: 1px solid #ddd;
  color:#4d4d4d;
  font-size:2vh;
  font-weight:400;
  &: hover, 
  &: active, &:link, &:focus {
    color:#F04124;
    font-weight:bold;
    text-decoration: none;
  }
  &: visited {
    text-decoration: none;
    color: #4d4d4d;
  }
`;
