import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";

import { showStoreDetail } from "../../redux/features/detail/detailSlice";

function TownStoreCard({ store }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showDetails = () => {
    dispatch(showStoreDetail({ store }));
    navigate("/store/details");
  };
  return (
    <StyledCard onClick={showDetails}>
      <img src={store.img} />
      <h4>{store.name}</h4>
      <p>{store.region}</p>
    </StyledCard>
  );
}

export default TownStoreCard;

const StyledCard = styled.a`
  background-color: #fff;
  float: left;
  width: 24rem;
  height: 35rem;
  margin: 1rem 2rem 5rem 2rem;
  border-radius: 5px;
  font-size: 2rem;
  line-height: 70%;

  a {
    text-decoration: none;
    color: black;
  }

  a:visited {
    color: black;
  }

  img {
    border-radius: 5px;
    width: 100%;
    height: 70%;
  }

  h4 {
    margin-left: 1rem;
    color: rgb(18, 116, 90);
  }
  h5 {
    margin-left: 1rem;
  }

  p {
    margin-left: 1rem;
    font-size: 0.8em;
    color: rgb(145, 143, 143);
  }
`;
