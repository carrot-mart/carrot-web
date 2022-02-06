import React, { useState } from "react";
import styled from "styled-components";

import Market from '../../img/TownImg/Market.svg';
import Phone from '../../img/TownImg/Phone.svg';
import Location from '../img/TownImg/Location.svg';
import Clock from '../../img/TownImg/Clock.svg';
import Mapsample from '../../img/TownImg/Mapsample.png';
// import TownInfoCard from "./TownInfoCard";

function TownInfoDetail() {
    const [Customer, Customers] = useState(0);

    return (
        <TownStoreDetailPageBox>
            <TownStoreDetailpageContainer>
                <TownStoreDetailpageimg>
                    <img src="http://placeimg.com/640/480/any" alt="default"></img>
                </TownStoreDetailpageimg>

                <TownStoreDetailpageTextbox>
                    <TownStoreDetailpageTitlebox>
                        <TownStoreDetailpageRound>프로필사진</TownStoreDetailpageRound>

                        <TownStoreDetailpageTitle>
                            <h3>송곳</h3>
                            <p> &nbsp;지역&nbsp; | &nbsp;공감👨‍👩‍👧‍👦&nbsp;{Customer}</p>
                        </TownStoreDetailpageTitle>

                        <TownStoreDetailpageTitleButton
                            onClick={() => {
                                Customers(Customer + 1);
                            }}
                        >
                            {" "}
                            + 공감하기
                        </TownStoreDetailpageTitleButton>
                    </TownStoreDetailpageTitlebox>

                    <TownStoreDetailpageList>
                        <ul>
                            <li>
                                <img src={Market} alt="default" /> &nbsp; 사당역 대패삼겹살
                                맛집🥰🥰
                                <br />
                                &nbsp; &nbsp; 삼겹살집인데 카페같은 인테리어, <br />
                                &nbsp; &nbsp; 청결하고,친절한곳 가장중요한 맛있는집
                            </li>
                            <li>
                                <img src={Clock} alt="default" /> &nbsp; 10:00 ~ 22:00, 평일
                            </li>
                            <li>
                                <img src={Phone} alt="default" /> &nbsp; 02-588-0666
                            </li>
                            <li>
                                <img src={Location.src} alt="default" /> &nbsp;
                                <span>서울 동작구 동작대로7길 65 1층</span>
                            </li>
                        </ul>
                    </TownStoreDetailpageList>
                    <MapModal>
                        <img src={Mapsample} alt="default" />
                    </MapModal>
                </TownStoreDetailpageTextbox>
            </TownStoreDetailpageContainer>
        </TownStoreDetailPageBox>
    );
}

export default TownInfoDetail;

const TownStoreDetailPageBox = styled.div`
  width: 100%;
  height: 100%;
`;

const TownStoreDetailpageContainer = styled.div`
  border: 1px solid black;
  background: white;
  margin: 200px auto 0 auto;
  width: 800px;
  height: 1200px;
`;

const TownStoreDetailpageimg = styled.div`
  width: 100%;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const TownStoreDetailpageTextbox = styled.div`
  width: 100%;
  height: 700px;
`;

const TownStoreDetailpageTitlebox = styled.div`
  width: 700px;
  height: 100px;
  margin: 50px;
  padding-bottom: 10px;
  border-bottom: 2px solid #cdcdcd;
  display: flex;
  flex-direction: "row";
`;

const TownStoreDetailpageRound = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TownStoreDetailpageTitle = styled.div`
  float: left;
  width: 350px;
  height: 100px;
  margin-left: 50px;
  h3 {
    font-size: 22px;
  }
  p {
    font-size: 14px;
  }
`;

const TownStoreDetailpageTitleButton = styled.button`
  width: 100px;
  height: 40px;
  margin: 45px 0px 0px 80px;
  color: white;
  background-color: #f14124;
`;

const TownStoreDetailpageList = styled.div`
  width: 650px;
  height: 320px;
  margin: 10px;
  padding-top: 5px;
  padding-left: 0;
  font-size: 17px;
  line-height: 300%;

  li {
    list-style-type: none;
  }
  span {
    color: #f14124;
    font-weight: bold;
  }
`;

const MapModal = styled.div`
  width: 650px;
  height: 300px;
  margin: 0 75px;
  background: #eee;

  img {
    width: 100%;
    height: 100%;
  }
`;
