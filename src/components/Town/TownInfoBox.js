import React, { useState } from "react";
import styled from "styled-components";

import TownTop from '../../asset/TownImg/TownTop.png';
import Location from '../../asset/TownImg/Location.svg';

// 연희님
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
        <TownInfoTopBox>
            <TownInfoTopBoxleft>
                <img src={TownTop} />
            </TownInfoTopBoxleft>

            <TownInfoTopBoxright>
                <h1>
                    <img src={Location} />
                     내가 찾아보는 <br />
                    &nbsp;&nbsp;동네정보
                </h1>
                <h4>
                    우리 동네 소식이 궁굼한가요? <br />
                    동네 주민이 남긴 진짜 동네 정보를 함께 확인해보세요!
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
    );
}

function TownInfoModal(props) {
    return <TownInfo />;
}

export default TownInfoBox;

const TownInfoTopBox = styled.div`
  margin: 200px 50px;
  width: 1440px;
  height: 800px;
  text-align: center;
  display: flex;
  flex-direction: "row";
`;

const TownInfoTopBoxleft = styled.div`
  margin: 20px;
  width: 700px;
  height: 800px;

  img {
    width: 100%;
  }
`;

const TownInfoTopBoxright = styled.div`
  float: right;

  margin: 20px;
  margin-top: 150px;
  width: 720px;
  height: 400px;

  h1 {
    font-size: 2.8em;
  }

  img {
    width: 40px;
    padding-right : 10px;
  }
  h4 {
    font-size: 1.5em;
  }
`;

const TownInfoTopBoxButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  margin-left: 100px;
  width: 520px;
  height: 70px;
  border-radius: 40px;
  background-color: rgb(240, 65, 36);
  color: white;
`;


