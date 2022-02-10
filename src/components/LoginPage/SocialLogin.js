// 외부
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { authService } from "../../fbase";
import { Routes, useRoutes } from "react-router";
// import firebase from "firebase/compat/auth";
import fbase, { authentication, firebaseInstance } from "../../fbase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

// 내부

function SocialLogin() {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    try {
      if (name === "google") {
        provider = new GoogleAuthProvider();
        const result = await signInWithPopup(authService, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
      } else if (name === "facebook") {
        provider = new FacebookAuthProvider();
        const result = await signInWithPopup(authService, provider);
        const credential = FacebookAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <EasyLoginWrap>
      <Title>
        <div></div>
        <div>간편로그인</div>
        <div></div>
      </Title>
      <GoogleSignBtn onClick={onSocialClick} name="google">
        <FcGoogle style={{ fontSize: "1.8rem", paddingRight: "1rem" }} />
        구글로 로그인
      </GoogleSignBtn>
      <FacebookSignBtn onClick={onSocialClick} name="facebook">
        <AiFillFacebook style={{ fontSize: "1.8rem", paddingRight: "1rem" }} />
        페이스북으로 로그인
      </FacebookSignBtn>
    </EasyLoginWrap>
  );
}

export default SocialLogin;

const EasyLoginWrap = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-top: 20px;
`;
const Title = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  div:first-child,
  div:last-child {
    width: 40%;
    height: 1px;
    background-color: #ccc;
  }
`;
const GoogleSignBtn = styled.button`
  width: 100%;
  margin: 1rem 0;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: middle;
  align-items: center;
  color: #3d3d3d;
  font-weight: bold;
  font-size: 1.5rem;
  background-color: #fff;
  border: 0.1rem solid #ddd;
  border-radius: 1rem;
`;
const FacebookSignBtn = styled.button`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: middle;
  align-items: center;
  font-weight: bold;
  color: #fff;
  font-size: 1.5rem;
  background-color: #3c5a99;
  border: 0.1rem solid #ddd;
  border-radius: 1rem;
`;
