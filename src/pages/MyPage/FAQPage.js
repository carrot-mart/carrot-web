import styled from "styled-components";

import FAQContentBox from "../../components/FAQPage/FAQContentBox";
import HelpBox from "../../components/FAQPage/HelpMailBox";
import SectionTitle from "../../components/MyPage/SectionTitle";

function FAQPage() {
  return (
    <div>
      <QnAWrapping>
        <SectionTitle>자주 묻는 질문</SectionTitle>
        <FAQContentBox />
        <HelpBox />
      </QnAWrapping>
    </div>
  );
}

export default FAQPage;

const QnAWrapping = styled.div`
  margin: 0 auto;
  width: 80%;
  .title {
    padding: 15px 30px;
    text-align: left;
    font-weight: bold;
    font-size: 3.5vh;
  }
`;
