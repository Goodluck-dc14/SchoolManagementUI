import React from "react";
import styled from "styled-components";
import Hero1 from "./Hero1";

const Heropage = () => {
  return (
    <Container>
      <Hero1
        title="Carry Out Your School Activities With Just A Click"
        text="   SkoolBus connects everyone every arm of school for safe and easy
        networking SkoolBus connects everyone every arm of school for safe
        and easy networking"
        image="/assets/skull.png"
      />
    </Container>
  );
};

export default Heropage;

const Container = styled.div``;
