import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaLock } from 'react-icons/fa';
import { FaLockOpen } from 'react-icons/fa';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Media } from 'react-bootstrap';
import { getDatabase, ref, onValue, remove, child, update } from "firebase/database";



function MessageHeader({ handleSearchChange }) {
    const chatRoom = useSelector(state => state.chatRoom.currentChatRoom)
    const isPrivateChatRoom = useSelector(state => state.chatRoom.isPrivateChatRoom)
    const [isFavorited, setIsFavorited] = useState(false);
    const usersRef = ref(getDatabase(), "users");
    const user = useSelector(state => state.user.currentUser);
    const userPosts = useSelector(state => state.chatRoom.userPosts)
    useEffect(() => {
        if (chatRoom && user) {
            addFavoriteListener(chatRoom.id, user.uid)
        }
    }, [])

    const addFavoriteListener = (chatRoomId, userId) => {

        onValue(child(usersRef, `${userId}/favorited`), data => {
            if (data.val() !== null) {
                const chatRoomIds = Object.keys(data.val());
                const isAlreadyFavorited = chatRoomIds.includes(chatRoomId)
                setIsFavorited(isAlreadyFavorited)
            }
        })

    }

    const handleFavorite = () => {
        if (isFavorited) {
            setIsFavorited(prev => !prev)
            remove(child(usersRef, `${user.uid}/favorited/${chatRoom.id}`))
        } else {
            setIsFavorited(prev => !prev)
            update(child(usersRef, `${user.uid}/favorited`), {
                [chatRoom.id]: {
                    name: chatRoom.name,
                    description: chatRoom.description,
                    createdBy: {
                        name: chatRoom.createdBy.name,
                        image: chatRoom.createdBy.image
                    }
                }
            })
        }
    }

    const renderUserPosts = (userPosts) =>
        Object.entries(userPosts)
            .sort((a, b) => b[1].count - a[1].count)
            .map(([key, val], i) => (
                <div key={i} style={{ display: 'flex'}}>
                    <img
                        style={{ borderRadius: 25 }}
                        width={48}
                        height={48}
                        className="mr-3"
                        src={val.image}
                        alt={val.name}
                    />
                    <div>
                        <h6>{key}</h6>
                        <p>
                            {val.count} 개
                        </p>
                    </div>
                </div>
            ))
                


    return (
        <div style={{
            width: '100%',
            height: '70px',
            border: '.3rem solid #ececec',
            borderRadius: '0px 20px 0px 0px',
            display:'flex',
            alignItems:'center',
            backgroundColor:'white'
            }} >
            <Container>
                <Row>
                    <Col>
                        <h2>
                            {chatRoom && chatRoom.name}
                        </h2>
                    </Col>    
                </Row>
            </Container>
        </div>
    )
}

export default MessageHeader
