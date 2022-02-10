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
import Phone from "../../asset/TownImg/Phone.svg";
import Clock from "../../asset/TownImg/Clock.svg";

function TownDetailCard({ card }) {
  const [Customer, Customers] = useState(0);

  return (
    <TownStoreDetailPageBox>
      <TownStoreDetailpageimg src={card.img} alt="default" />
      <TownStoreDetailpageTextbox>
        <TownStoreDetailpageTitlebox>
          <TownStoreDetailpageRound>프로필사진</TownStoreDetailpageRound>
          <TownStoreDetailpageTitle>
            <h3 className="cardWriter">{card.name}</h3>
            <p className="cardWriter">
              {" "}
              {card.region} | &nbsp;공감👨‍👩‍👧‍👦&nbsp;{Customer}
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
              <img src={Market} alt="default" /> &nbsp; {card.description}
              <br />
            </li>
            <li>
              <img src={Clock} alt="default" /> &nbsp; {card.businessHours}
              <br />
            </li>
            <li>
              <img src={Location} alt="default" /> &nbsp; {card.address}
              <br />
            </li>
            <li>
              <img src={Phone} alt="default" /> &nbsp; {card.tel}
              <br />
            </li>
          </ul>
        </TownStoreDetailpageList>
      </TownStoreDetailpageTextbox>
      <Map src={Mapsample} alt="default" />
    </TownStoreDetailPageBox>
  );
}

export default TownDetailCard;

const TownStoreDetailPageBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-items: center;
`;

const TownStoreDetailpageimg = styled.img`
  width: 100%;
  height: 45rem;
  object-fit: cover;
`;

const TownStoreDetailpageTextbox = styled.div`
  width: 100%;
  height: fit-content;
`;

const TownStoreDetailpageTitlebox = styled.div`
  display: flex;
  height: fit-content;
  padding: 3rem;
  border-bottom: 2px solid #cdcdcd;
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
  display: flex;
  flex-direction: column;
  float: left;
  flex-grow: 1;
  height: 100px;
  margin-left: 50px;
  h3 {
    font-size: 3rem;
    margin: 1rem 0 0;
    font-weight: bolder;
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
  border: none;
  background-color: orangered;
`;

const TownStoreDetailpageList = styled.div`
  width: 650px;
  height: fit-content;
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

const Map = styled.img`
  justify-content: center;
  align-content: center;
  width: 70%;
`;
