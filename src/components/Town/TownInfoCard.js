import {
    BsChat,
    BsChatFill
} from "react-icons/bs";
import React, { useState } from "react";
import styled, { css } from "styled-components";


function TownInfoCard({ card }) {
    const [clickEmoticon, setClickEmoticon] = useState(false);
    const [clickMessage, setClickMessage] = useState(false);

    return (
		<StyledTownInfoCardBox>
			<StyledTownInfoCard >
				<StyledTownInfoCardbutton >{card.cartegory}</StyledTownInfoCardbutton>
				<CardContent>{card.content}</CardContent>
				<CardWritterInfo>
					<p className="cardWriter">{card.nickname}</p>
					<p className="cardRegion">{card.region}</p>
					<p className="time">{card.time}</p>
				</CardWritterInfo>
				<hr />
				<CardResponse>
					<ResponseButton
						clickEmoticon={clickEmoticon}
						onClick={() => setClickEmoticon(!clickEmoticon)}
					>
						<p>공감하기</p>
						{/* {clickEmoticon ? <BsEmojiSmileFill /> : <BsEmojiSmile />} */}
					</ResponseButton>
					<ResponseButton onClick={() => setClickMessage(!clickMessage)}>
						<p>답변하기</p>
						{clickMessage ? <BsChatFill /> : <BsChat />}
					</ResponseButton>
					<p className="views">조회수 {card.views}</p>
				</CardResponse>
			</StyledTownInfoCard>
		</StyledTownInfoCardBox>
    );
}

export default TownInfoCard;


const StyledTownInfoCardBox = styled.button`
	width: 100%;
	max-width: 50rem;
	display : flex;
	margin : 1.5rem 0;
	height : fit-content;
`;
const StyledTownInfoCard = styled.button`
	margin : 1.5rem 0;
	display: flex;
	flex-direction: column;
	width : 100%;
	height : fit-content;
	background-color: white;
	border-radius : 10px;
	padding: 1rem;
	border: none;
	height: 19rem;
	hr {
		border: 0;
		border-top: 1px solid black;
		width: 100%;
	}
`;


const StyledTownInfoCardbutton = styled.div`
	margin : 0.5rem 0;
	background-color : #cdcdcd;
	color : #6C6D6F;
	width : 6rem;
	height : 2rem;
	display: flex;
	align-items: center;
    justify-content: center;
	font-size : 1.2rem;
	border-radius : 5px;
`;
const CardContent = styled.div`
	display: flex;
	align-items: center;
    justify-content: center;
	flex-direction: column;
	overflow: hidden;
	flex-grow: 1;
	text-align: left;
	font-size: 0.9rem;

`;

const CardWritterInfo = styled.div`
	display: flex;
	color: grey;
	width : 100%;

	.cardWriter {
		font-weight: bolder;
		font-size : 1.5rem;
		margin-right: 0.9rem;
	}

	.cardRegion {
		flex-grow: 1;
		font-size : 1.2rem;
	}

	p {
		margin: 0.5rem 0 0 0;
	}
`;

const CardResponse = styled.div`
	display: flex;
	padding-top: 5px;

	p {
		align-items: center;
		margin: 0;
	}

	.views {
		text-align: right;
		
	}
`;

const ResponseButton = styled.button`
	display: flex;
	align-items: center;
	font-size: 0.8rem;
	background-color: white;
	border: none;
	transition-duration: 0.2s;

	:hover {
		color: rgb(255, 77, 0);
	}
	${(props) =>
    props.clickEmoticon &&
    css`
			color: rgb(255, 107, 0);
		`}
`;
