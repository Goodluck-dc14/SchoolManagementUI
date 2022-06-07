import React from "react";
import styled from "styled-components";
import Student from "../gallery/Student.jpg";
import Teacher from "../gallery/teacher.jpg";
import Dashboard from "../gallery/dashboard.png";
import Card from "./Card";

const layer = () => {
  return (
    <MainHolder>
      <First>
        <Text>Which Is Suitable For You?</Text>
        <Layer1>
          <Card Image={Student} title="Admin" />
          <Card Image={Teacher} title="Teacher" />
          <Card Image={Teacher} title="Student" />
          <Card Image={Teacher} title="Parents" />
        </Layer1>
      </First>
      <Text2 style={{ textAlign: "center" }}>
        Here Is a Sneak Peak Of User's Dashboard
      </Text2>
      <Info>
        <Note>
          SkoolBus connects everyone every arm of school for safe and easy
          networking SkoolBu
        </Note>
      </Info>
      <ImageLayer>
        <ImageHold>
          <Image src={Dashboard} />
        </ImageHold>
      </ImageLayer>
    </MainHolder>
  );
};

export default layer;

const ImageLayer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;
const Image = styled.img`
  /* height: 500px; */
  width: 100%;
  object-fit: contain;
  border-radius: 15px;
`;
const ImageHold = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  margin: 20px 0;
`;
const Text2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: 600;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;
`;
const Note = styled.div`
  width: 300px;
  text-align: center;
  font-weight: 400;
  font-size: 11px;
`;
const Info = styled.div`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const MainHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Text = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: 600;
  align-items: center;
  text-align: center;
  margin: 50px 0;
  flex-direction: column;
`;
const Layer1 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const First = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
