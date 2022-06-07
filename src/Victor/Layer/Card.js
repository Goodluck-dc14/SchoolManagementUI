import React from "react";
import styled from "styled-components";
// import Teacher from "../gallery/teacher.jpg";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Card = (props) => {
  return (
    <UserCard>
      <ImageDiv>
        <Image src={props.Image} />
      </ImageDiv>
      <p>{props.title}</p>
      <Info>
        <AiOutlineCheckCircle color="white" />
        <Desc>SkoolBus connects teachers students </Desc>
      </Info>
      <Info>
        <AiOutlineCheckCircle color="white" />
        <Desc>SkoolBus connects teachers students </Desc>
      </Info>
      <Info>
        <AiOutlineCheckCircle color="white" />
        <Desc>SkoolBus connects teachers students </Desc>
      </Info>
      <BtnHold>
        <button>View Details</button>
      </BtnHold>
    </UserCard>
  );
};

export default Card;

const BtnHold = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  button {
    height: 35px;
    width: 90px;
    border: 0;
    background-color: #fbb03b;
    border-radius: 15px;
    font-size: 11px;
    font-weight: 600;
  }
`;
const Desc = styled.div`
  font-size: 10px;
  margin-left: 5px;
  color: white;
`;
const Info = styled.div`
  width: 85%;
  /* background-color: red; */
  display: flex;
  align-items: center;
  margin-bottom: 25px; ;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
  background-repeat: no-repeat;
`;
const ImageDiv = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 100%;
  margin-top: 20px;
  display: flex;
  /* background-color: red; */
`;
const UserCard = styled.div`
  height: 350px;
  width: 260px;
  background-color: #489fdf;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  p {
    color: white;
    font-weight: 500;
    font-size: 17px;
  }
`;
