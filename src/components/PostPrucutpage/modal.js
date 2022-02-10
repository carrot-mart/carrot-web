import React, { useState } from "react";
import styled from 'styled-components';


function ModalPage(){
    return(
        <Modal>
        <h2>게시글에 쓰고 싶은 문구를 선택해주세요</h2>
        
        <input type="text" placeholder="문구를 입력해주세요"></input>
        <input type="submit" value = "추가"></input>
        </Modal>
    );
}


export default ModalPage;

const Modal = styled.div`
 margin-top:20px;
 padding:20px
 background:#eee;
`
