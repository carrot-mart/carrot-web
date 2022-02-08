import React from 'react'
import Media from 'react-bootstrap/Media';
import moment from 'moment';

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
        <div style={{ marginBottom: '3px', display:'flex' }}>
            {/* 프로필모양 */}
            <img
                style={{ borderRadius: '10px' }}
                width={48}
                height={48}
                className="mr-3"
                src={message.user.image}
                alt={message.user.name} 
            />
            {/* 메세지 창들 */}
            <div style={{
                backgroundColor: isMessageMine(message, user) && "#ECECEC"
            }}>
                {/* 메세지 보낸 사람 이름 */}
                <h6>{message.user.name}{" "}
                    <span style={{ fontSize: '10px', color: 'gray' }}>
                        {/* 보낸시간 */}
                        {timeFromNow(message.timestamp)}
                    </span>
                </h6>
                {isImage(message) ?
                    <img style={{ maxWidth: '300px' }} alt="이미지" src={message.image} />
                    :
                    <p>
                        {message.content}
                    </p>
                }
            </div>
        </div>
    )
}

export default Message
