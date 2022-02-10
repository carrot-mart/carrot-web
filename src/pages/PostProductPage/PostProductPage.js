import React, { useState } from "react";
import styled from 'styled-components';

function PostPage() {

    return (
<<<<<<< HEAD
        
        <Post>
            <fieldset>
=======
        <Post>
>>>>>>> 90c1f955128d2b7a798290aa279aaa0c9447fef7
            <legend><b>중고거래 글쓰기</b></legend>
            <form action="#">
                <FileSet>
                    <label for="input-file">
                        <img src="camera.svg"></img>
                    </label>
<<<<<<< HEAD
                    <p><input type="file" id="input-file"></input></p>
                </FileSet>
=======
                </FileSet>
                <p><input type="file" id="input-file" style="display:none"></input></p>
>>>>>>> 90c1f955128d2b7a798290aa279aaa0c9447fef7
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
                    <input id="price" placeholder="가격(선택사항)"></input>
                    <label>가격제안받기</label>
                    <input id="priceCheck" type="checkbox"></input>
                </PriceSet>
                <hr></hr>
                <TextSet>
                    <input type="text" placeholder="게시글 내용을 작성해주세요(가품 및 판매금지품목은 게시가 제한될 수 있어요.)"></input>
                </TextSet>
                <hr></hr>  
                
                <p>
                <OftenSentenceSet>
<<<<<<< HEAD
                        <option value="">자주 쓰는 문구를 선택해주세요</option>
                        <option value="직거래해주세요">직거래해주세요</option>
                        <option value="주말에만 가능해요">주말에만 가능해요</option>
                        <option value="평일에만 가능해요">평일에만 가능해요</option>
                        <option value="시간조율 가능해요">시간조율 가능해요</option>
                        <option value="오전에만 가능해요">오전에만 가능해요</option>
                        <option value="오후에만 가능해요">오후에만 가능해요</option>
                        <option value="저녁에만 가능해요">저녁에만 가능해요</option>

                    </OftenSentenceSet>
                </p>
                <hr></hr>
                <RegionSet>
                    <input type="text" placeholder="자신의 동네를 써주세요"></input>
                </RegionSet>
=======
                    <label for="input_button">
                        <img src="plus.svg"></img>
                        &nbsp;자주 쓰는 문구
                    </label>

                    </ModalPage>

                </OftenSentenceSet>
                <p><input type="button" id="input_button" style="display:none"></input></p>
>>>>>>> 90c1f955128d2b7a798290aa279aaa0c9447fef7
                <hr></hr>
                <PostButton>
                    <input type="submit" value="등록"></input>
                </PostButton>
<<<<<<< HEAD
            </form> 
            </fieldset>
=======
            </form>
        </Post>
>>>>>>> 90c1f955128d2b7a798290aa279aaa0c9447fef7

        </Post>
        
        );

}

<<<<<<< HEAD
export default PostPage;
=======
export default PostPruductPage;

const Post = styled.fieldset`
    border: hidden;
    width: 600px;
    height: auto;
>>>>>>> 90c1f955128d2b7a798290aa279aaa0c9447fef7

const Post = styled.div`
display: flex;
justify-content: center;
    fieldset {
        border: hidden;
        width: 600px;
        height: auto;
    }
    hr {
        border: solid 1px;
        border-bottom: 0px;
        border-left: 0px;
        border-right: 0px;
        }

    b {
        font-size: 25px;
        }
    input:focus {
        outline: none;
        }
    select:focus {
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
    p{
        display:none
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
    #price {
        border: hidden;
        height: 30px;
        width: 480px;
        }

`

const TextSet = styled.p`
    input {
        border: hidden;
        height: 400px;
        width: 600px;
        }
`

const OftenSentenceSet = styled.select`
border: hidden;
height: 30px;
width: 600px;
`
const RegionSet = styled.p`
input {
    border: hidden;
    height: 30px;
    width: 600px;
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