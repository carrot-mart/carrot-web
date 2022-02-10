import { useState, useMemo } from "react";
import styled, { css } from "styled-components";
import { BsXCircle, BsPlusLg } from "react-icons/bs";

import SectionTitle from "../../components/MyPage/SectionTitle";
import "../../globalStyles.css";
import Arrow from '../../asset/Arrow.jpg';
import '../../components/MyPage/style.css';

function RegionSettingsPage() {
  const [isSelected, setIsSelected] = useState(false);
  const [regionName, setRegionName] = useState("망원동");
  const select_btn = () => setIsSelected(!isSelected);
  
  const cityList ={
    
    region09:{
      seoul:["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"]
    },
    
  }

  let categoryChange = () =>{
    return(cityList[document.getElementById("state").value]);
  } ;


  return (
    <StyledRegionSettings>
      <SectionTitle>내 동네 설정 및 변경</SectionTitle>
      {/* {isSelected ? (
        <RegionSelectedBox>
          <RegionText>{regionName}</RegionText>
          <IconButton onClick={select_btn}>
            <BsXCircle />
          </IconButton>
        </RegionSelectedBox>
      ) : (
        <RegionNotSelectedBox>
          <IconButton onClick={select_btn}>
            <BsPlusLg />
          </IconButton>
        </RegionNotSelectedBox>
      )} */}

      <RegionSelectBox>
        {/* <SelectBox /> */}
          <SelectBox>
            <div class="SearchBox">
              <select name="" id="region" onchange={categoryChange}>
                <option value>시/도 선택</option>
                <option value="region01">강원</option>
                <option value="region02">경기</option>
                <option value="region03">경남</option>
                <option value="region04">경북</option>
                <option value="region05">광주</option>
                <option value="region06">대구</option>
                <option value="region07">대전</option>
                <option value="region08">부산</option>
                <option value="region09">서울</option>
                <option value="region10">울산</option>
                <option value="region11">인천</option>
                <option value="region12">전남</option>
                <option value="region13">전북</option>
                <option value="region14">제주</option>
                <option value="region15">충남</option>
                <option value="region16">충북</option>
              </select>
              <span class="icoArrow"><img src={Arrow} alt="Arrow" /></span>
              </div>
            <div class="SearchBox">
              <select name="" id="state">
                <option >군/구 선택 </option>
              </select>
              <span class="icoArrow"><img src={Arrow} alt="Arrow" /></span>
            </div>
          </SelectBox>
      </RegionSelectBox>
    </StyledRegionSettings>
  );
}




export default RegionSettingsPage;

const StyledRegionSettings = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  align-items: center;
`;

// const RegionText = styled.div`
//   color: inherit;
//   font-size: 1.2rem;
//   text-align: left;
//   align-self: center;
//   flex-grow: 1;
//   width: 100%;
// `;

// const RegionSelectedBox = styled.div`
//   display: flex;
//   background-color: rgb(255, 119, 43);
//   border-radius: 5rem;
//   width: 100%;
//   height: 5rem;
//   color: white;
//   justify-items: center;
//   padding: 0 1.2rem;
//   border: 1px solid transparent;
//   box-sizing: border-box;
// `;

// const RegionNotSelectedBox = styled.div`
//   display: flex;
//   border: 1px solid rgb(196, 196, 196);
//   border-radius: 5rem;
//   width: 100%;
//   height: 5rem;
//   color: rgb(107, 107, 107);
//   padding: 0 1.2rem;
//   justify-content: center;
//   box-sizing: border-box;
// `;

// const IconButton = styled.button`
//   display: flex;
//   width: 20%;
//   border: none;
//   color: inherit;
//   align-items: center;
//   background: none;
//   cursor: pointer;
//   justify-content: center;
// `;

//셀렉트 박스

const RegionSelectBox = styled.div`
  width: 100%;
`;

const SelectBox = styled.div`
  width : 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
;



  

