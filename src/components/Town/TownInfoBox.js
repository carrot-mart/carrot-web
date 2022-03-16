import React, { useState } from "react";
import styled from "styled-components";
import { GrLocation } from "react-icons/gr";

import TownInfo from "./TownInfo";

function TownInfoBox() {
    let [modal, setmodal] = useState(true);
    return (
        <>
            {modal ? (
                <TownInfoTopBoxModal modal={modal} setmodal={setmodal} />
            ) : (
                <TownInfoModal />
            )}
        </>
    );
}

function TownInfoTopBoxModal(props) {
    return (
        <TownInfoTopContainer>
          <TownInfoTopBox>
              <TownInfoTopBoxleft>
              <img src="img/TownImg/TownTop.png" />
              </TownInfoTopBoxleft>

              <TownInfoTopBoxright>
                  <h1>
                  <GrLocation />
                      내가 찾아보는 <br />
                      &nbsp;&nbsp;동네정보
                  </h1>
                  <h4>
                      우리 동네 소식이 궁굼한가요? <br />
                      동네 주민이 남긴 진짜 동네 정보를<br /> 함께 확인해보세요!
                  </h4>
                  <TownInfoTopBoxButton
                      onClick={() => {
                          props.setmodal(false);
                      }}
                  >
                      <h3>★ 동네 설정하고 정보를 찾아보세요!</h3>
                  </TownInfoTopBoxButton>
              </TownInfoTopBoxright>
          </TownInfoTopBox>
        </TownInfoTopContainer>
    );
}

function TownInfoModal(props) {
    return <TownInfo />;
}

export default TownInfoBox;

const TownInfoTopContainer = styled.div`
  width: 100%;
  height:100rem;
  // margin : 30rem 0;
  //hegiht:fit-content;
  // min-height: 5rem;
  text-align: center;
  //display: flex;
  //flex-direction: "row";
  border:1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TownInfoTopBox = styled.div`
  margin: 0 auto;
  max-width: 500rem;
  text-align: center;
  display: flex;
  flex-direction: "row";
  border:1px solid blue;
`;

const TownInfoTopBoxleft = styled.div`
  width: 100%;
  height: fit-content;

  img {
    width: 100%;
    height: 60rem;
  }
`;

const TownInfoTopBoxright = styled.div`
  float: right;
  margin-top: 150px;
  width: 100%;
  height: 40rem;
  

  h1 {
    font-size: 4.7em;
    margin-bottom:50px;
    line-height : 150%;
  }

  img {
    width: 40px;
    padding-right : 10px;
  }
  h4 {
    font-size: 2.5em;
    margin-bottom:80px;
    line-height : 150%;
  }
`;

const TownInfoTopBoxButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  margin-left: 60px;
  width: 480px;
  height: 70px;
  border-radius: 40px;
  background-color: rgb(240, 65, 36);
  color: white;
`;


