// 외부
import styled from "styled-components";

// 내부
import FAQContentBox from "../../components/FAQPage/FAQContentBox";
import HelpBox from "../../components/FAQPage/HelpMailBox";
import Navigation from "../../components/Navigation";
import Bottom from "../../components/Bottom";

function FAQPage() {
  return (
    <>
      <Navigation />
      <QnAWrapping>
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
