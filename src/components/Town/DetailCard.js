import {
  BsChat,
  BsChatFill,
  BsEmojiSmile,
  BsEmojiSmileFill,
} from "react-icons/bs";
import React, { useState } from "react";
import styled, { css } from "styled-components";

import Market from "../../asset/TownImg/Market.svg";
import Location from "../../asset/TownImg/Location.svg";
import Mapsample from "../../asset/TownImg/Mapsample.png";

function TownDetailCard({ card }) {
  const [Customer, Customers] = useState(0);

  return (
    <TownStoreDetailPageBox>
      <TownDetailpageimg>
        <img src="http://placeimg.com/640/480/any" alt="default"></img>
      </TownDetailpageimg>

      <TownStoreDetailpageTextbox>
        <TownStoreDetailpageTitlebox>
          <TownStoreDetailpageRound>프로필사진</TownStoreDetailpageRound>

          <TownStoreDetailpageTitle>
            <h3 className="cardWriter">{card.nickname}</h3>
            <p className="cardWriter">
              {" "}
              &nbsp;{card.time}&nbsp; | &nbsp;공감👨‍👩‍👧‍👦&nbsp;{Customer}
            </p>
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
              <img src={Market} alt="default" /> &nbsp; {card.content}
              <br />
            </li>{" "}
            <br />
            <br />
            <li>
              <img src={Location} alt="default" /> &nbsp;
              <span>{card.region}</span>
            </li>
          </ul>
        </TownStoreDetailpageList>
        <MapModal>
          <img src={Mapsample} alt="default" />
        </MapModal>
      </TownStoreDetailpageTextbox>
    </TownStoreDetailPageBox>
  );
}

export default TownDetailCard;

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

const TownDetailpageimg = styled.div`
  width: 100%;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledTownDetailCard = styled.button`
  margin: 1.2rem 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  border: none;
  height: 19rem;
  hr {
    border: 0;
    border-top: 1px solid black;
    width: 100%;
  }
`;

const StyledTownDetailCardbutton = styled.div`
  margin: 0.5rem 0;
  background-color: #cdcdcd;
  color: #6c6d6f;
  width: 4rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  border-radius: 5px;
`;
const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  flex-grow: 1;
  text-align: left;
  font-size: 1.1rem;

  p {
    font-size: 2rem;
  }
`;

const CardWritterDetail = styled.div`
  display: flex;
  font-size: 0.9rem;
  color: grey;

  .cardWriter {
    font-weight: bolder;
    margin-right: 0.5rem;
  }

  .cardRegion {
    flex-grow: 1;
  }

  p {
    margin: 0.5rem 0 0 0;
  }
`;
