import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDatabase, ref, onChildAdded } from "firebase/database";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { AiOutlineSearch } from 'react-icons/ai';
import styled from "styled-components";

import {
    setCurrentChatRoom, setPrivateChatRoom
} from '../../../redux/actions/chatRoom_action';

export class DirectMessages extends Component {

    state = {
        usersRef: ref(getDatabase(), "users"),
        users: [],
        activeChatRoom: ""
    }

    componentDidMount() {
        if (this.props.user) {
            this.addUsersListeners(this.props.user.uid)
        }
    }

    addUsersListeners = (currentUserId) => {
        const { usersRef } = this.state;
        let usersArray = [];

        onChildAdded(usersRef,  DataSnapshot => {
            if (currentUserId !== DataSnapshot.key) {
                let user = DataSnapshot.val();
                user["uid"] = DataSnapshot.key;
                user["status"] = "offline";
                usersArray.push(user)
                this.setState({ users: usersArray })
            }
        })
    }

    getChatRoomId = (userId) => {
        const currentUserId = this.props.user.uid

        return userId > currentUserId
            ? `${userId}/${currentUserId}`
            : `${currentUserId}/${userId}`
    }

    changeChatRoom = (user) => {
        const chatRoomId = this.getChatRoomId(user.uid);
        const chatRoomData = {
            id: chatRoomId,
            name: user.name
        }

        this.props.dispatch(setCurrentChatRoom(chatRoomData));
        this.props.dispatch(setPrivateChatRoom(true));
        this.setActiveChatRoom(user.uid);
    }

    setActiveChatRoom = (userId) => {
        this.setState({ activeChatRoom: userId })
    }


    renderDirectMessages = users =>
        users.length > 0 &&
        users.map(user => (
            <li key={user.uid}
                style={{
                    backgroundColor: user.uid === this.state.activeChatRoom
                        && "#00000045"
                }}
                onClick={() => this.changeChatRoom(user)}>
                # {user.name}
            </li>

        ))

    render() {
        const { users } = this.state;
        return (
            
            <Dm>
                <InputGroup className="mb-3">
                            <InputGroup.Prepend >
                                <InputGroup.Text id="basic-addon1"style={{backgroundColor:'#e5e5e5'}}>
                                    <AiOutlineSearch size={18} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Search Messages"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                                style={{backgroundColor:'#e5e5e5',fontSize:'1.5rem'}}
                            />
                        </InputGroup>
                <ul style={{ listStyleType: 'none', padding: 0 }} > 
                {/* 채팅상대 리스트 */}
                    {this.renderDirectMessages(users)}
                </ul>
            </Dm>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.currentUser
    }
}

export default connect(mapStateToProps)(DirectMessages);

const Dm = styled.div`
ul{
    list-style-type:none; 
    padding:0;
    font-size:1.7rem;
}
.mb-3{
    font-size:1.5rem;
}
`;
