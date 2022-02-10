import styled from "styled-components";

function HelpMailBox() {
  return (
    <HelpBoxWrap>
      <p>그래도 해결이 안되시나요?</p>

      <span as="a" href="mailto:test@carrotmart.com">
        고객센터 문의하기
      </span>
    </HelpBoxWrap>
  );
}

export default HelpMailBox;

const HelpBoxWrap = styled.div`
  margin: 8rem auto;
  width: 100%;
  height: 15vh;
  background-color: #eee;
  text-align: center;
  p {
    font-size: 1.8vh;
    font-weight: bold;
    line-height: 9vh;
  }
  span {
    font-size: 1.5rem;
    color: #f04124;
    font-weight: bold;
    cursor: pointer;
  }
`;
