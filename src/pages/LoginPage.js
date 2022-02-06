import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import fbase from "../fbase";
import styled from "styled-components";

// 내부
import SocialLogin from "../components/LoginPage/SocialLogin";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await fbase
        .auth() // auth 서비스에 저장
        .signInWithEmailAndPassword(data.email, data.password);
      setLoading(false);
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
  };

  return (
    <AuthWrapper>
      <div style={{ textAlign: "center" }}>
        <h3>로그인</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          name="email"
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>This email field is required</p>}

        <label>Password</label>
        <input
          name="password"
          type="password"
          autoComplete="off"
          {...register("password", {
            required: true,
            minLength: 10,
            maxLength: 20,
            pattern: /^(?=.*[a-zA-Z])(?=.*[0-9]).{10,25}$/,
          })}
        />

        {errorFromSubmit && <p>{errorFromSubmit}</p>}
        <input type="submit" disabled={loading} />
        <Link
          style={{ color: "gray", textDecoration: "none" }}
          to="../register"
        >
          회원가입 바로가기
        </Link>
      </form>
      <SocialLogin />
    </AuthWrapper>
  );
}

export default LoginPage;

const AuthWrapper = styled.div`
  margin:0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  width:80%;
  form {
    width: 100%
    margin: 0 auto;
  }
  .form {
    min-width:40rem;
    background: #0e101c;
    

  }
  h1 {
    font-weight: 100;
    color: white;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(79, 98, 148);
  }
  p {
    color: #bf1650;
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
    background-color:#f0f0f0;
    border:none;
    padding: 1.2rem 1.5rem;
    margin-bottom: 10px;
    font-size: 1rem;
  }
  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin: 5px 0;
    font-size: 1rem;
    font-weight: 400;
  }
  // button[type="submit"],
  // input[type="submit"] {
  //   background: #f04124;
  //   color: white;
  //   text-transform: uppercase;
  //   border: none;
  //   margin-top: 40px;
  //   padding: 20px;
  //   font-size: 16px;
  //   font-weight: 100;
  //   letter-spacing: 10px;
  // }
`;
