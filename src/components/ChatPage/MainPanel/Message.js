import React from 'react'
import moment from 'moment';
import styled from "styled-components";

function Message({ message, user }) {

    const timeFromNow = timestamp => moment(timestamp).fromNow();

    const isImage = message => {
        return message.hasOwnProperty("image") && !message.hasOwnProperty("content");
    }
    const isMessageMine = (message, user) => {
       if(user) {
           return message.user.id === user.uid
       }
    }

    return (
        // 메세지 블럭 자체들
        <MessageBlock>
            {/* 프로필모양 */}
            <img
                style={{ borderRadius: '10px' }}
                width={38}
                height={38}
                className="mr-3"
                src={message.user.image}
                alt={message.user.name} 
            />
            {/* 메세지 창들 */}
            <Balloon >
                {/* 메세지 보낸 사람 이름 */}
                <h6>{message.user.name}{" "}
                    <span>
                        {/* 보낸시간 */}
                        {timeFromNow(message.timestamp)}
                    </span>
                </h6>
                {isImage(message) ?
                    <img style={{ maxWidth: '300px' }} alt="이미지" src={message.image} />
                    :
                    <p style={{
                        backgroundColor: isMessageMine(message, user) && "#ff772b",
                        color: isMessageMine(message, user) && "#ffffff"
                    }}>
                        {message.content}
                    </p>
                }
            </Balloon>
        </MessageBlock>
    )
}

export default Message;

const MessageBlock = styled.div`
  margin-bottom:3px;
  display:flex;
  font-size:1.4rem;
`;
const Balloon = styled.div`
h6{
    font-size:1.5rem;
}
span{
    font-size:1rem; 
    color: gray;
}
p{
  background-color:#ECECEC;
  color:#000;
  border-radius:0px 20px 20px 20px;
  padding:20px;
}
`;
