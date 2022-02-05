// 외부 파일
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import styled from "styled-components";

// 내부 파일
import SocialLogin from "../components/LoginPage/SocialLogin";
import Modal from "../components/RegisterPage/RegisterModal";
import fbase from "../fbase";

function RegisterPage() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const password = useRef();
  password.current = watch("password");

  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      // user정보인 email과 password를 기본 정보로 firebase에 보냄.
      let createdUser = await fbase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      console.log("createdUser", createdUser);

      await createdUser.user.updateProfile({
        displayName: data.name,
      });

      //Firebase 데이터베이스에 저장하기

      await fbase.database().ref("users").child(createdUser.user.uid).set({
        name: createdUser.user.displayName,
      });

      setLoading(false);
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
  };
  // 동의여부확인
  const [term, setTerm] = useState(false);
  // 오류메시지 상태저장
  const [termError, setTermError] = useState(false);

  const onChangeTerm = (event) => {
    // 체크박스 초기화
    setTermError(false);
    setTerm(event.target.checked);
  };

  // 모달창
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  // 버튼

  return (
    <>
      <RegisterInputWrap>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">이메일</label>
          <RegisterInput
            name="email"
            type="email"
            id="email"
            placeholder="이메일주소를 입력해주세요."
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p>메일주소를 입력해주세요.</p>}
          <label htmlFor="name">이름</label>
          <RegisterInput
            name="name"
            type="text"
            id="name"
            placeholder="이름을 입력해주세요."
            {...register("name", { required: true, maxLength: 10 })}
          />
          {errors.name && errors.name.type === "required" && (
            <p>필수입력항목입니다.</p>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <p>10글자 미만으로 작성해주세요.</p>
          )}
          <label htmlFor="password">비밀번호</label>
          <RegisterInput
            name="password"
            type="password"
            id="password"
            placeholder="영문과 숫자, 특수문자를 포함한 10자리 이상"
            {...register("password", {
              required: true,
              minLength: 10,
              maxLength: 25,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/,
              validate: (value) => value === watch("password"),
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <p>비밀번호를 입력해주세요.</p>
          )}
          {errors.password && errors.password.minLength === "minLength" && (
            <p>최소 10자 이상 적어주세요.</p>
          )}
          {errors.password && errors.password.maxLength === "MaxLength" && (
            <p>최대 25자 이하로 적어주세요.</p>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <p>특수문자를 포함해주세요.</p>
          )}
          <label htmlFor="password_confirm">비밀번호 확인</label>
          <RegisterInput
            name="password_confirm"
            type="password"
            id="password_confirm"
            placeholder="비밀번호를 다시 한 번 입력해주세요."
            {...register("password_confirm", {
              required: true,
              validate: (value) => value === password.current,
            })}
          />
          {errors.password_confirm && errors.password.type === "required" && (
            <p>비밀번호를 확인해주세요.</p>
          )}
          {errors.password_confirm &&
            errors.password_confirm.type === "validate" && (
              <p>비밀번호가 일치하지 않습니다.</p>
            )}
          {errorFromSubmit && <p>{errorFromSubmit}</p>}

          {/* 약관동의 모달창 */}

          <h3>약관동의</h3>
          <CheckInput
            type="checkbox"
            value={term}
            onChange={onChangeTerm}
            onClick={openModal}
            id="chk1"
          />
          <Modal open={modalOpen} close={closeModal}></Modal>
          <CheckLabel htmlFor="chk1">개인정보 수집 이용동의(필수)</CheckLabel>
          <br />
          <CheckInput
            type="checkbox"
            value={term}
            onChange={onChangeTerm}
            onClick={openModal}
            id="chk2"
          />
          <Modal open={modalOpen} close={closeModal}></Modal>
          <CheckLabel htmlFor="chk2">
            당근마켓<span>이용약관</span>(필수)
          </CheckLabel>
          <br />
          <CheckInput
            type="checkbox"
            value={term}
            onChange={onChangeTerm}
            onClick={openModal}
            id="chk3"
          />
          <Modal open={modalOpen} close={closeModal} header="약관확인"></Modal>
          <CheckLabel htmlFor="chk3">
            마케팅 활용 및 광고성 정보 수신 동의(선택)
          </CheckLabel>
          <br />
          <CheckInput
            type="checkbox"
            value={term}
            onChange={onChangeTerm}
            onClick={openModal}
            id="chk4"
          />
          <Modal open={modalOpen} close={closeModal} header="약관확인"></Modal>
          <CheckLabel htmlFor="chk4">만 14세 미만 가입 제한(필수)</CheckLabel>
          <br />
          <RegisterButton type="submit" disabled={loading} />
          <Link style={{ color: "gray", textDecoration: "none" }} to="../login">
            로그인바로가기
          </Link>
        </form>
        <SocialLogin />
      </RegisterInputWrap>
    </>
  );
}

export default RegisterPage;

const RegisterInputWrap = styled.div`
  margin: 0 auto;
  padding: 5rem;
  width: 80%;
  height: auto;
  overflow: hidden;
`;
const RegisterInput = styled.input`
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  padding-left: 1rem;
  width: 100%;
  height: 3.5rem;
  border: 1px solid #c4c4c4;
  border-radius: 1rem;
  font-size: 1rem;
  &:focus {
    border: none;
    outline: 1px solid #f04124;
  }
`;
const RegisterButton = styled.input`
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  width: 100%;
  height: 3.5rem;
  border: 1px solid #f04124;
  border-radius: 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #f04124;
  font-weight: bold;
`;
const CheckInput = styled.input`
  display: inline-block;
  margin: 0 auto;
  padding-botton: 3rem;
  float: left;
  position: relative;
  top: 0.8rem;
`;
const CheckLabel = styled.label`
  position: relative;
  top: -1.5px;
  left: 1rem;
  line-height: 200%;
  z-index: -1;
`;
