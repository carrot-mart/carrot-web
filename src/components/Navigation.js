import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from "react-redux";

import Bell from "./Bell";

function Navigation() {
  const navigate = useNavigate();
  const login = useSelector((state) => state.login.value);

  return (
    <StyledNavigation>
      <Header>
        <Top_head>
          <Link to="/">
            <img src="img/main_logo.png" alt="메인로고" className="mainlogo" />
          </Link>
          <Top_search>
            <div className="search-box">
              <input
                type="text"
                className="search-txt"
                name=""
                placeholder="동네 이름, 물품명 등을 검색해보세요!"
              />
              <Link to="/" className="search-btn">
                <i className="fas fa-search"></i>
              </Link>
            </div>
          </Top_search>
          <Top_menu>
            <ul className="menu_list">
              <li className="menus">
                <Link to="/" className="line">
                  <h2>인기매물</h2>
                </Link>
              </li>
              <li className="menus">
                <Link to="/" className="line">
                  <h2>동네정보</h2>
                </Link>
              </li>
              <li className="menus">
                <button
                  className="line"
                  onClick={() => {
                    login ? navigate("/mypage/likerecord") : navigate("/login");
                  }}
                >
                  <h2>
                    <FaRegUser className="usericon" size="22" /> 나의당근
                  </h2>
                </button>
              </li>
              <li className="menus">
                <Link to="/" className="line">
                  <Bell /> <h2>알림</h2>
                </Link>
              </li>
            </ul>
          </Top_menu>
        </Top_head>
      </Header>
    </StyledNavigation>
  );
}

export default Navigation;

const StyledNavigation = styled.div`
  margin: 0;
  padding: 0;
  background-color: #fff;
  font-family: "Nanum Gothic", sans-serif;
  color: #333333;
  ul,
  li {
    list-style: none;
    float: left;
  }
`;
const Header = styled.header`
  height: 100px;
  border-bottom: 1px solid #b4b9be;
`;
const Top_head = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;
  height: 100px;
  div {
    float: left;
  }
  .mainlogo {
    float: left;
    line-height: 100%;
  }
`;
const Top_search = styled.div`
  .search-box {
    position: absolute;
    padding: 10px;
    top: 25%;
    left: 20%;
    height: 30px;
    background-color: #fff;
    border: 1px solid #e9ecef;
    border-radius: 20px;
    width: 400px;
  }
  .search-btn {
    text-decoration: none;
    float: right;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b4b9be;
    font-size: 16px;
  }
  .search-txt {
    display: flex;
    width: 280px;
    padding: 0 6px;
    border: none;
    background: none;
    outline: none;
    float: left;
    font-size: 1rem;
    line-height: 30px;
  }
`;
const Top_menu = styled.div`
  height: 100px;
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .menu_list {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .menus {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 17px;
    margin-left: 10px;
    position: relative;
    text-decotaion: none;
    color: black;
  }
  .menus h2 {
    font-size: 18px;
    font-weight: normal;
    float: left;
  }
  .menus::after {
    content: "|";
    margin-left: 10px;
  }
  .menus:last-child::after {
    content: "";
  }
  .menus h2:hover {
    color: #b4b9be;
  }
  .My {
    float: left;
    margin-right: 5px;
    margin-top: 15px;
  }
  .line {
    text-decoration: none;
    color: #000;
  }
  .usericon {
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
  }
`;
