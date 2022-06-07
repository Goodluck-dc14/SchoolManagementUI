import React from "react";
import styled from "styled-components";

const footer = () => {
  return (
    <Container>
      <Wrapper>
        <LogoDiv>SkoolBoard</LogoDiv>
        <Texts>
          <About>
            We believe in bringing education to students round the world, in
            this era! , We believe in bringing education to students round the
            world, in this era! We believe in bringing education to students
            round the world, in this era! We believe in bringing education to
            students round the world, in this era!
          </About>
          <ColumnText>Contact Us</ColumnText>
        </Texts>
      </Wrapper>
    </Container>
  );
};

export default footer;

const ColumnText = styled.div``;
const About = styled.div`
  font-size: 12px;
`;
const Texts = styled.div`
  width: 80%;
`;
const LogoDiv = styled.div`
  width: 150px;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: blue;
`;
