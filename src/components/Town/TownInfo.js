import React, { useState } from 'react';
import styled from "styled-components";


import TownInfoCard from "./TownInfoCard";
import TownInfoDetail from "./Detail";


function TownInfo() {

    let [modal, setmodal] = useState(true);
    return (
        <>
            {
                modal === true
                    ? <TownDetailInfoModal modal={modal} setmodal={setmodal}></TownDetailInfoModal>
                    : <TownStoreDetailPageModal />
            }
        </>

    );
}

function TownDetailInfoModal(props){
    return(
        <TownInfoContainer  >
            <TownInfoBox>
                <h1>우리동네 정보</h1>
                
                {test.map((card, index) => (
                    <div onClick={ () => { props.setmodal(false) }} >
                        <TownInfoCard card={card} >
                        </TownInfoCard>
                    </div>
                ))}
            </TownInfoBox>
        </TownInfoContainer>
    )
}


function TownStoreDetailPageModal(){
    return(
        <TownInfoDetail />

    )
}


export default TownInfo;

const TownInfoContainer = styled.div`
    margin : 250px 0;
	width : 100%;
	height:  1050px;
    background-color: rgba(238, 106, 84, 20%);
	
	
`;

const TownInfoBox = styled.div`
    width : 1150px;
    margin : 0 auto;
    display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(4, minmax(22%, auto));
	grid-template-rows: 1fr 5fr 5fr;
	
	padding: 4rem 6rem;
    h1 {
		font-size: 3rem;
		width: 100vw;
		grid-column: span 4;
		text-align: left;
		margin: 5px 3px;
	}
`;

const test = [
    {
        cartegory: "교육/학원",
        nickname: "송곳",
        region: "동작구 상도동",
        content:
            "혹시 편집디자인 배울 학원 추천 받을 수 있을까요?\n		저는 30대 직장인이고, 국가지원교육이면 더 좋을꺼같아요. 기본적인 포토샵/일러는 사용가능합니다.",
        views: 23,
        time: "15분 전",
    },
    {
        cartegory: "동네질문",
        nickname: "GUANAJA",
        region: "동작구 노량진동",
        content:
            "노량진에 HDMI 케이블 파는 곳 있을까요?",
        views: 12,
        time: "37분 전",
    },
    {
        cartegory: "동네질문",
        nickname: "당근당근",
        region: "동작구 노량진동",
        content:
            "스타벅스 테이크아웃 요즘 다회용컵 쓰나요?? 안간지 오래돼서 요즘엔 어떻게 운영되는지 모르겠네요😃😃\n스타벅스 자주가시는분 계신가요오?",
        views: 35,
        time: "57분 전",
    },
    {
        cartegory: "일상",
        nickname: "당근당근",
        region: "동작구 노량진동",
        content:
            "메카스터디타워사는데\n방에 탕냄새가나서\n복도에 나가니까 탄냄새장난아니네요\n불났나요??😭😭",
        views: 49,
        time: "2시간 전",
    },
    {
        cartegory: "동네맛집",
        nickname: "고니",
        region: "동작구 상도제4동",
        content:
            "혹시 인생과일도담 오늘 오픈했을까요~? 전화했는데 안받으시네요 ㅠㅠ",
        views: 2,
        time: "3시간 전",
    },
    {
        cartegory: "건강",
        nickname: "제메",
        region: "동작구 노량진동",
        content:
            "새벽5시 or 저녁 7시 국사봉 운동하실 메이트 구합니다! 술먹고 담배피고 운동 안하는 방탕한 생활 하다 보니 드디어 전고점 돌파해서 77키로 됐네요...🤣 다 끊을작정입니다. 작년에 76찍고 다이어트 해서 68까지 \n...더보기",
        views: 10,
        time: "4시간 전",
    },
    {
        cartegory: "교육/학원",
        nickname: "다니엘",
        region: "동작구 상도제1동",
        content:
            "아이가 미성동 성보고등학교에 입학했어요~\n학교 근처쪽으로 학원을 알아보려고 하는데\n꼼꼼하게 잘 봐주고 학교내신 정보가 좋은 학원 추천좀 부탁드려요\n영어, 수학, 국어 등",
        views: 1,
        time: "3시간 전",
    },
    {
        cartegory: "동네질문",
        nickname: "삐그덕",
        region: "동작구 상도제3동",
        content:
            "보라매e편한세상(신대방삼거리역 부근)옆에 엄청 크게 공사시작한것 같던데\n혹시뭐짓는지 아시는분 계신가요?\n집을 부숴도 보통 1-2채 부수고 공사하는데...더보기",
        views: 11,
        time: "5시간 전",
    },

];


const testCase = [
    {}
]