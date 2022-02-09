import React, { useState, useRef } from 'react'
import { BiImages } from "react-icons/bi";
import { BsArrowUpShort } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import firebase from '../../../firebase';
import { useSelector } from 'react-redux';
import mime from 'mime-types';
import { getDatabase, ref, set, remove, push, child } from "firebase/database";
import { getStorage, ref as strRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import styled from "styled-components";

function MessageForm() {
    const chatRoom = useSelector(state => state.chatRoom.currentChatRoom)
    const user = useSelector(state => state.user.currentUser)
    const [content, setContent] = useState("")
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)
    const [percentage, setPercentage] = useState(0)
    const messagesRef = ref(getDatabase(), "messages")
    const inputOpenImageRef = useRef();
    // const storageRef = ref(getStorage());
    const typingRef = ref(getDatabase(), "typing")
    const isPrivateChatRoom = useSelector(state => state.chatRoom.isPrivateChatRoom)
    const handleChange = (event) => {
        setContent(event.target.value)
    }

    const createMessage = (fileUrl = null) => {
        const message = {
            timestamp: new Date(),
            user: {
                id: user.uid,
                name: user.displayName,
                image: user.photoURL
            }
        }

        if (fileUrl !== null) {
            message["image"] = fileUrl;
        } else {
            message["content"] = content;
        }

        return message;
    }

    const handleSubmit = async () => {
        if (!content) {
            setErrors(prev => prev.concat("Type contents first"))
            return;
        }
        setLoading(true);

        try {

            await set(push(child(messagesRef, chatRoom.id)), createMessage())

 
            await remove(child(typingRef, `${chatRoom.id}/${user.uid}`));
            setLoading(false)
            setContent("")
            setErrors([])
        } catch (error) {
            setErrors(pre => pre.concat(error.message))
            setLoading(false)
            setTimeout(() => {
                setErrors([])
            }, 5000);
        }
    }

    const handleOpenImageRef = () => {
        inputOpenImageRef.current.click()
    }

    const getPath = () => {
        if (isPrivateChatRoom) {
            return `/message/private/${chatRoom.id}`
        } else {
            return `/message/public`
        }
    }

    const handleUploadImage = (event) => {
        const file = event.target.files[0];
        const storage = getStorage();

        const filePath = `${getPath()}/${file.name}`;
        console.log('filePath', filePath);
        const metadata = { contentType: mime.lookup(file.name) }
        setLoading(true)
        try {

            const storageRef = strRef(storage, filePath);
            const uploadTask = uploadBytesResumable(storageRef, file, metadata);

            uploadTask.on('state_changed',
                (snapshot) => {

                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {

                    switch (error.code) {
                        case 'storage/unauthorized':

                            break;
                        case 'storage/canceled':

                            break;



                        case 'storage/unknown':

                            break;
                    }
                },
                () => {

                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                        set(push(child(messagesRef, chatRoom.id)), createMessage(downloadURL))
                        setLoading(false)
                    });
                }
            );
        } catch (error) {
            console.log(error)
        }
    }

    const handleKeyDown = (event) => {

        if (event.ctrlKey && event.keyCode === 13) {
            handleSubmit();
        }

        const userUid = user.uid;
        if (content) {
            set(ref(getDatabase(), `typing/${chatRoom.id}/${user.uid}`), {
                userUid: user.displayName
            })
        } else {
            remove(ref(getDatabase(), `typing/${chatRoom.id}/${user.uid}`))
        }
    }

    return (
        <StyledForm>
            <PhotoUp>
                <button
                    onClick={handleOpenImageRef}
                    className="message-form-button"
                    disabled={loading ? true : false}
                >
                <BiImages size='20' />
            </button>
            <input
                accept="image/jpeg, image/png"
                style={{ display: 'none' }}
                type="file"
                ref={inputOpenImageRef}
                onChange={handleUploadImage}
            />
            </PhotoUp>
            
            
            {/* 대화 텍스트창 */}
            <Form onSubmit={handleSubmit} className='textbox'>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                        onKeyDown={handleKeyDown}
                        value={content}
                        onChange={handleChange}
                        as="textarea"
                        rows={2} />
                </Form.Group>
            </Form>

            {
                !(percentage === 0 || percentage === 100) &&
                <ProgressBar variant="warning" label={`${percentage}%`} now={percentage} />
            }
            
            {/* 보내기와 업로드 버튼들 */}
                <SendMessage >
                    <button
                        onClick={handleSubmit}
                        className="message-form-button"
                        disabled={loading ? true : false}
                    >
                        <BsArrowUpShort size="24" color="#fff" />
                    </button>
                    </SendMessage>
            

        </StyledForm>
    )
}

export default MessageForm;

const StyledForm = styled.div`
float:left;
width:100%;
height:65px;
position:relative;
border: .3rem solid #ececec;
border-top:0;
border-radius: 0px 0px 20px 0px;
background-color:white;
.message-form-button{
    width: 2.3rem;
    height:2.3rem;
    float:left;
    borderRadius:100%;
    background: #ff772b;
    color: white;
    text-transform: uppercase;
    border: none;
    font-size: 16px;
    font-weight: 100;
}
.message-form-button:hover {
    background: #b8571f;
  }
  .textbox{
    width:80% ;
    float:left;
    height:65px;
  }
`;

const PhotoUp = styled.div`
float:left;
width:10%;
height:65px;
display:flex;
alignItems:center;
justifyContent:center;

`;

const SendMessage = styled.div`
float:left;
width:10%;
height:65px;
display:flex;
alignItems:center;
justifyContent:center;

`;
