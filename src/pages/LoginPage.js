import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import fbase from "../fbase";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/features/login/loginSlice";

import SocialLogin from "../components/LoginPage/SocialLogin";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await fbase
        .auth() // auth 서비스에 저장
        .signInWithEmailAndPassword(data.email, data.password);
      setLoading(false);
      dispatch(login());
      navigate("/");
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
  };

  return (
    <>
      <MainLogo src="img/main_logo.png" alt="메인로고" className="mainlogo" />
      <ContentCover>
        <AuthWrapper>
          <LoginTitle>
            <h2>로그인</h2>
          </LoginTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input
              name="email"
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <p>이메일주소를 입력해 주세요.</p>}

            <label>Password</label>
            <input
              name="password"
              type="password"
              autoComplete="off"
              {...register("password", {
                required: true,
              })}
            />
            {/* {errors.password && <p>비밀번호를 입력해 주세요.</p>} */}
            {errorFromSubmit && <p>{errorFromSubmit}</p>}
            <LoginBtn type="submit" disabled={loading} value={"로그인"} />
            <RegisterLink
              style={{ color: "gray", textDecoration: "none" }}
              to="../register"
            >
              회원가입 바로가기
            </RegisterLink>
          </form>
          <SocialLogin />
        </AuthWrapper>
      </ContentCover>
    </>
  );
}

export default LoginPage;
const MainLogo = styled.img`
  margin: 5rem auto;
  display: flex;
  justify-content: center;
`;
const ContentCover = styled.div`
  margin: 0 auto;
  width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border:1px solid #9f9f9f;
  border-radius:2rem;
  padding:6rem;

`;
const AuthWrapper = styled.div`
  width: 100%;
  font-size: 2rem;
  form {
    width: 100%;
    margin: 0 auto;
  }
  .form {
    min-width: 40rem;
    background: #0e101c;
  }
  h1 {
    font-weight: 100;
    color: white;
    text-align: center;
    padding-bottom: 1rem;
    border-bottom: 0.1rem solid rgb(79, 98, 148);
  }
  p {
    color: #bf1650;
    font-size: 1.3rem;
  }
  p::before {
    display: inline;
    content: "⚠ ";
  }
  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 1rem;
    border: 1px solid #c0c0c0;
    padding: 1.2rem 1.5rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    &:focus {
      outline: 2px solid #f04124;
    }
  }
  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin: 5px 0;
    font-size: 1.5rem;
    font-weight: 400;
  }
`;
const LoginTitle = styled.div`
  margin-bottom:2rem;
  h2{
    font-size:2.5rem;
    font-weight:bold;
  }
`;
const RegisterLink = styled(Link)`
  font-size: 1.4rem;
`;
const LoginBtn = styled.input`
  margin-top:2rem;
  background: #f04124;
  color: #fff;
  cursor: pointer;
`;