import styled from "styled-components";

import FAQContentBox from "../../components/FAQPage/FAQContentBox";
import HelpBox from "../../components/FAQPage/HelpMailBox";
import SectionTitle from "../../components/MyPage/SectionTitle";
import Navigation from "../../components/Navigation";
import Bottom from "../../components/Bottom";

function FAQPage() {
  return (
    <>
      <Navigation />
      <QnAWrapping>
        <SectionTitle>자주 묻는 질문</SectionTitle>
        <FAQContentBox />
        <HelpBox />
      </QnAWrapping>
      <Bottom />
    </>
  );
}

export default FAQPage;

const QnAWrapping = styled.div`
  margin: 8rem auto;
  max-width: 1440px;
`;
