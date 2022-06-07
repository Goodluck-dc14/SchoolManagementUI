import React from "react";
import styled from "styled-components";

const LearningExperience = () => {
  return (
    <Container>
      <Sponsors>
        <Images src="/assets/cousera.png" />
        <Images src="/assets/cousera.png" />
        <Images src="/assets/cousera.png" />
        <Images src="/assets/cousera.png" />
        <Images src="/assets/cousera.png" />
        <Images src="/assets/cousera.png" />
      </Sponsors>
      <Wrapper>
        <Holder>
          {" "}
          <Left>
            <Image src="/assets/img.png" />
          </Left>
          <Right>
            <TextHolder>
              <BigText>A Personalise Learning Experience</BigText>
              <Text>
                SkoolBus connects everyone every arm of school for safe and easy
                networking SkoolBus connects everyone every arm of school for
                safe and easy networking
              </Text>
            </TextHolder>
          </Right>
        </Holder>
        <Holder1>
          {" "}
          <Right>
            <TextHolder>
              <BigText>Teachers Can Check Their Students Milestone</BigText>
              <Text>
                SkoolBus connects everyone every arm of school for safe and easy
                networking SkoolBus connects everyone every arm of school for
                safe and easy networking
              </Text>
            </TextHolder>
          </Right>
          <Left>
            <Image src="/assets/img2.png" />
          </Left>
        </Holder1>
      </Wrapper>
    </Container>
  );
};

export default LearningExperience;

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Sponsors = styled.div`
  display: flex;
  padding-top: 50px;
  padding-bottom: 50px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const Images = styled.img`
  margin: 10px;
  @media screen and (max-width: 768px) {
    width: 20%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Holder = styled.div`
  /* height: 100%; */
  width: 90%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Holder1 = styled.div`
  /* height: 100%; */
  width: 90%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 60px;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 50%;
    align-items: center;
    justify-content: center;
    margin-right: unset;
  }
`;

const Image = styled.img`
  height: 70%;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  margin-left: 60px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    margin-left: unset;
    width: 70%;
  }
  @media screen and (max-width: 425px) {
    width: 85%;
  }
`;

const TextHolder = styled.div``;

const BigText = styled.div`
  font-size: 40px;
  font-weight: bold;
  line-height: 1;
  @media screen and (max-width: 768px) {
    max-width: 450px;
    text-align: center;
  }
`;

const Text = styled.div`
  margin-top: 20px;
  max-width: 450px;
  color: gray;
  @media screen and (max-width: 768px) {
    max-width: 450px;
    text-align: center;
    padding-bottom: 20px;
  }
`;
