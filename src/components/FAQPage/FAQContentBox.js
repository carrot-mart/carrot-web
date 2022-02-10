import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

// 내부
import Management from "./QuestionsPage/Management";
import Acount from "./QuestionsPage/Acount";
import PurchaseSell from "./QuestionsPage/PurchaseSell";
import DealList from "./QuestionsPage/DealList";
import Manner from "./QuestionsPage/Manner";
import Event from "./QuestionsPage/Event";
import RestrictedUse from "./QuestionsPage/RestrictedUse";
import Neighbor from "./QuestionsPage/Neighbor";
import Coupon from "./QuestionsPage/Coupon";
import Chat from "./QuestionsPage/Chat";
import Authentication from "./QuestionsPage/Authentication";
import Etc from "./QuestionsPage/Etc";

function QnAnserBox() {
  return (
    <FAQWrap>
      <AnswerBox>
        <StyleLink to="/faqpage/Management">운영정책</StyleLink>
        <StyleLink to="/faqpage/Acount">계정/인증</StyleLink>
        <StyleLink to="/faqpage/PurchaseSell">구매/판매</StyleLink>
        <StyleLink to="/faqpage/DealList">거래품목</StyleLink>
        <StyleLink to="/faqpage/Manner">거래 매너</StyleLink>
        <StyleLink to="/faqpage/Event">이벤트/초대</StyleLink>
        <StyleLink to="/faqpage/RestrictedUse">이용제재</StyleLink>
        <StyleLink to="/faqpage/Neighbor">동네생활</StyleLink>
        <StyleLink to="/faqpage/Coupon">쿠폰</StyleLink>
        <StyleLink to="/faqpage/Chat">당근채팅</StyleLink>
        <StyleLink to="/faqpage/Authentication">본인인증</StyleLink>
        <StyleLink to="/faqpage/Etc">기타</StyleLink>
      </AnswerBox>
      <AnswerList>
        <Routes>
          <Route path="/" element={<Management />} />
          <Route path="/faqpage/Acount" element={<Acount />} />
          <Route path="/faqpage/PurchaseSell" element={<PurchaseSell />} />
          <Route path="/faqpage/DealList" element={<DealList />} />
          <Route path="/faqpage/Manner" element={<Manner />} />
          <Route path="/faqpage/Event" element={<Event />} />
          <Route path="/faqpage/RestrictedUse" element={<RestrictedUse />} />
          <Route path="/faqpage/Neighbor" element={<Neighbor />} />
          <Route path="/faqpage/Coupon" element={<Coupon />} />
          <Route path="/faqpage/Chat" element={<Chat />} />
          <Route path="/faqpage/Authentication" element={<Authentication />} />
          <Route path="/faqpage/Etc" element={<Etc />} />
        </Routes>
      </AnswerList>
    </FAQWrap>
  );
}

export default QnAnserBox;
const FAQWrap = styled.div`
  margin: auto;
  width: 80%;
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
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const AnswerList = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10px 20px 40px 20px;
  text-decoration: none;
`;
const StyleLink = styled(Link)`
  margin: 0 auto;
  width: 33.13%;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ddd;
  color: #4d4d4d;
  font-size: 2vh;
  font-weight: 400;
  :active,
  :link,
  :focus {
    color: #f04124;
    font-weight: bold;
    text-decoration: none;
  }
`;
