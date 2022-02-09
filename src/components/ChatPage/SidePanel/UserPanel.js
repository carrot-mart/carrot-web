import React, { useRef } from 'react'
import { IoIosChatboxes } from 'react-icons/io';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import { useDispatch, useSelector } from 'react-redux';
import mime from 'mime-types';
import { setPhotoURL } from '../../../redux/actions/user_action';
import { getDatabase, ref, child, update } from "firebase/database";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { getStorage, ref as strRef, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import styled from "styled-components";



function UserPanel() {
    const user = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch();
    const inputOpenImageRef = useRef();

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }

    const handleOpenImageRef = () => {
        inputOpenImageRef.current.click();
    }

    const handleUploadImage = async (event) => {
        const file = event.target.files[0];
        const auth = getAuth();
        const user = auth.currentUser;

        const metadata = { contentType: mime.lookup(file.name) };
        const storage = getStorage();

        try {
            //스토리지에 파일 저장하기 
            let uploadTask = uploadBytesResumable(strRef(storage, `user_image/${user.uid}`), file, metadata)


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
                        // 프로필 이미지 수정
                        updateProfile(user, {
                            photoURL: downloadURL
                        })

                        dispatch(setPhotoURL(downloadURL))

                        //데이터베이스 유저 이미지 수정
                        update(ref(getDatabase(), `users/${user.uid}`), { image: downloadURL })
                    });
                }
            );

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <StyledUser>
            <h3>
                <IoIosChatboxes />{" "} 당근채팅
            </h3>

            <Droplist>
                <Dropdown>
                    <Dropdown.Toggle
                        style={{ background: 'transparent', border: '1px solid white' }}
                        id="dropdown-basic">
                        {user && user.displayName} 
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={handleLogout}>
                            로그아웃
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> 
            </Droplist>

         <input
                onChange={handleUploadImage}
                accept="image/jpeg, image/png"
                style={{ display: 'none' }}
                ref={inputOpenImageRef}
                type="file"
            /> 
        </StyledUser>
    )
}

export default UserPanel;

const StyledUser = styled.div`
  h3{
      color:white;
  }
`;

const Droplist = styled.div`
display: flex; 
margin-bottom: 1rem;
`;

