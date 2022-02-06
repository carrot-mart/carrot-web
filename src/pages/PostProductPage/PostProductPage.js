import React, { useState } from "react";
import styled from 'styled-components';

function PostPruductPage() {

    return (
        <Post>
            <legend><b>중고거래 글쓰기</b></legend>
            <form action="#">
                <FileSet>
                    <label for="input-file">
                        <img src="camera.svg"></img>
                    </label>
                </FileSet>
                <p><input type="file" id="input-file" style="display:none"></input></p>
                <hr></hr>
                <TitleSet>
                    <input type="text" placeholder="글제목"></input>
                </TitleSet>
                <hr></hr>
                <p>
                    <CategorySet>
                        <option value="">카테고리 설정</option>
                        <option value="디지털기기">디지털기기</option>
                        <option value="생활가전">생활가전</option>
                        <option value="가구/인테리어">가구/인테리어</option>
                        <option value="유아동">유아동</option>
                        <option value="생활/가공식품">생활/가공식품</option>
                        <option value="유아도서">유아도서</option>
                        <option value="스포츠/레저">스포츠/레저</option>
                        <option value="여성잡화">여성잡화</option>
                        <option value="여성의류">여성의류</option>
                        <option value="남성패션/잡화">남성패션/잡화</option>
                        <option value="게임/취미">게임/취미</option>
                        <option value="뷰티/미용">뷰티/미용</option>
                        <option value="반려동물용품">반려동물용품</option>
                        <option value="도서/티켓/음반">도서/티켓/음반</option>
                        <option value="식물">식물</option>
                        <option value="기타 중고물품">기타 중고물품</option>
                        <option value="삽니다">삽니다</option>
                    </CategorySet>
                </p>
                <hr></hr>
                <PriceSet>
                    <input placeholder="가격(선택사항)"></input>
                    <label>가격제안받기</label>
                    <input type="checkbox"></input>
                </PriceSet>
                <hr></hr>
                <TextSet>
                    <input type="text" placeholder="게시글 내용을 작성해주세요(가품 및 판매금지품목은 게시가 제한될 수 있어요.)"></input>
                </TextSet>
                <hr></hr>  
                <OftenSentenceSet>
                    <label for="input_button">
                        <img src="plus.svg"></img>
                        &nbsp;자주 쓰는 문구
                    </label>

                    </ModalPage>

                </OftenSentenceSet>
                <p><input type="button" id="input_button" style="display:none"></input></p>
                <hr></hr>
                <PostButton>
                    <input type="submit" value="등록"></input>
                </PostButton>
            </form>
        </Post>

        );

}

export default PostPruductPage;

const Post = styled.fieldset`
    border: hidden;
    width: 600px;
    height: auto;

    hr {
        border: solid 1px;
        border-bottom: 0px;
        border-left: 0px;
        border-right: 0px;
        }

    b {
        font-size: 25px;
        }
    input,select:focus {
                        outline: none;
                        }
`

const FileSet = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(165, 165, 165);
    width: 80px;
    height: 80px;

    img {
        width: 30px;
        height: 30px;
        }
`

const TitleSet = styled.p`
    input {
        border: hidden;
        height: 30px;
        width: 600px;
        }
`

const CategorySet = styled.select`
    border: hidden;
    height: 30px;
    width: 600px;
`

const PriceSet = styled.p`
    input {
        border: hidden;
        height: 30px;
        width: 480px;
        }
`

const TextSet = styled.p`
    input {
        border: hidden;
        height: 700px;
        width: 600px;
        }
`

const OftenSentenceSet = styled.p`
    img {
        width: 13px;
        height: 13px;
        }
`

const PostButton = styled.p`
    input {
        border: none;
        width: 100px;
        height: 30px;
        background-color: #ff5e00;
        color: white;
        font-size: 15px;
        border-radius: 1vh;
        }
`