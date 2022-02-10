import styled from "styled-components";
import React from "react";

const Modal = (props) => {
  const { open, close } = props;
  return (
    <div>
      {open ? (
        <div
          onClick={close}
          className={open ? "openModal modal" : "modal"}
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "0",
            left: "0",
          }}
        >
          <ModalSection
            style={{
              borderRadius: "20px",
              backgroundColor: "#FFF",
              padding: "20px",
            }}
          >
            <ModalContent>
              <h3>당근마켓 개인정보처리방침</h3>
              <p>
                "주식회사 당근마켓”(이하 “회사”)은 "정보통신망 이용촉진 및
                정보보호에 관한 법률", “개인정보보호법”, "통신비밀보호법",
                "전기통신사업법" 및 “전자상거래 등에서의 소비자 보호에 관한
                법률” 등 정보통신서비스제공자가 준수하여야 할 관련 법령상의
                개인정보보호 규정을 준수하며, 관련 법령에 의거한
                개인정보처리방침을 정하여 이용자 권익 보호에 최선을
                다하겠습니다. 회사는 이용자의 개인정보를 [개인정보의
                수집목적]에서 고지한 범위 내에서 사용하며, 이용자의 사전 동의
                없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의
                개인정보를 외부에 제공 또는 위탁하지 않습니다. 다만, 아래의
                경우에는 예외로 합니다.
              </p>
              <ul>
                <li>
                  이용자가 사전에 동의한 경우(이용자가 사전에 동의한 경우란,
                  서비스 이용 등을 위하여 이용자가 자발적으로 자신의 개인정보를
                  제3자에게 제공하는 것에 동의하는 것을 의미합니다.)
                </li>
                <li>
                  법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
                  방법에 따라 수사기관의 요구가 있는 경우
                </li>
              </ul>
              <p>
                이러한 경우에도, 회사는 이용자에게 (1) 개인정보를 제공받는 자
                (2) 그의 이용목적 (3) 개인정보의 보유 및 이용기간을 사전에
                고지하고 이에 대해 명시적·개별적으로 동의를 얻습니다. 이와 같은
                모든 과정에 있어서 회사는 이용자의 의사에 반하여 추가적인 정보를
                수집하거나, 동의의 범위를 벗어난 정보를 제3자와 공유하지
                않습니다.
              </p>
              <h4>개인정보 활용처</h4>
              <p>
                당근마켓은 아래와 같은 활용 목적을 가지고 이용자 개인정보를
                수집합니다.
              </p>
              <ol>
                <li>서비스의 기본 기능이나 특화된 기능을 제공</li>
                <li>개별적 공지 필요시</li>
                <li>서비스 이용과 관련하여 문의나 분쟁의 해결</li>
                <li>유료서비스 이용 시 컨텐츠 등의 전송이나 배송∙요금 정산</li>
                <li>서비스 이용</li>
                <li>맞춤형 서비스 제공</li>
                <li>인구통계학적 특성에 따른 서비스 제공</li>
                <li>각종 이벤트나 광고성 정보의 제공</li>
                <li>법령 등에 규정된 의무의 이행</li>
                <li>
                  법령이나 이용약관에 반하여 여러분에게 피해를 줄 수 있는 잘못된
                  이용행위의 방지
                </li>
                <li>중고거래 분쟁 조정</li>
                <li>
                  서비스 이용을 위한 이용자 식별(본인 및 성별, 연령확인 포함) 및
                  부정 이용 방지, 회원 관리 등 서비스 제공
                </li>
              </ol>
              <h4>수집하는 개인정보</h4>
              <ol>
                <li>휴대폰 번호</li>
                <li>거래 계좌번호</li>
                <li>앱 내 채팅 기능을 사용한 채팅 내용</li>
                <li>이용자 이름(닉네임)</li>
                <li>프로필 사진</li>
                <li>성별, 연령</li>
                <li>사진(메타정보 포함)</li>
                <li>위치정보</li>
                <li>자녀의 생년월일(필요 서비스 선택적)</li>
                <li>녹음파일(당근전화)</li>
                <li>
                  단말기 정보(OS, 화면사이즈, 디바이스 아이디), IP주소, 쿠키
                  정보
                </li>
                <li>
                  이름, 휴대폰 번호, 주소, 결제, 취소, 환불과 같은 배송정보
                </li>
                <li>
                  신용카드 정보, 통신사 정보, 상품권 번호 등 결제에 필요한
                  정보(유료 서비스 이용시)
                </li>
                <li>
                  서비스 이용과정에서 이용자가 작성하는 게시물 기타 콘텐츠 등
                  정보, 사용하는 기능, 수행하는 행동이나 활동 시간, 빈도 및 기간
                  등
                </li>
                <li>
                  본인인증 과정에서 본인 확인 기관으로부터 전달받은 생년월일,
                  성별, 통신사, 휴대전화번호, 암호화된 동일인 식별정보(CI),
                  중복가입확인정보(DI)와 DI 해시값, 내외국인 정보, 본인인증 이력
                </li>
              </ol>
            </ModalContent>
          </ModalSection>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;

const ModalSection = styled.div`
  margin: 0 auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  overflow: auto;
`;

const ModalContent = styled.div`
  overflow-y: auto;
  position: relative;
  max-width: 100%;
  max-height: 500px;
  margin: 0 auto;
  padding: 50px;
  text-align: left;
  line-height: 180%;
  background-color: #fff;
  z-index: 999;
  h3 {
    font-size: 25px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  h4 {
    font-size: 20px;
    font-weight: bold;
    padding: 10px 0;
  }
  p {
    padding-bottom: 15px;
  }
  ul,
  ol {
    padding-left: 25px;
  }
  ul > li {
    list-style: square;
  }
  ol > li {
    list-style: decimal;
  }
`;
