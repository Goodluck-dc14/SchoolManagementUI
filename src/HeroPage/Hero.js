import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <StarF src="/assets/star 1.png" />

          <Head>Carry Out Your School Activities With Just A Click</Head>
          <Stars src="/assets/star 2.png" />
          <Start src="/assets/star 3.png" />
          <Down>
            SkoolBus connects everyone every arm of school for safe and easy
            networking SkoolBus connects everyone every arm of school for safe
            and easy networking
          </Down>
          <Button>Try it for free</Button>
        </Left>
        <Right>
          <img src="/assets/education 1.png" alt="hero" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 1200px;
  /* background: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  /* flex-direction:column;  */
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    /* background:red */
  }
`;
const Left = styled.div`
  flex: 0.5;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Right = styled.div`
  flex: 0.7;
  img {
    width: 100%;
  }
`;
const Head = styled.div`
  font-size: 45px;
  font-family: Montserrat;
  font-weight: bold;
  margin-bottom: 20px;
  position: relative;

  @media (max-width: 800px) {
    text-align: center;
  }
`;
const Down = styled.div`
  width: 450px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    text-align: center;
  }
`;
const Button = styled.button`
  background: #fbb03b;
  outline: none;
  border: 0;
  padding: 13px 30px;
  font-family: montserrat;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    transition: all 300ms;
    transform: scale(1.1);
  }
`;
const StarF = styled.img``;
const Start = styled.img`
  position: absolute;
  bottom: 285px;
  left: 490px;
`;
const Stars = styled.img`
  position: absolute;
  top: 210px;
  left: 430px;
`;
