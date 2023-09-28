import React from "react";
import styled from "styled-components";
import MobileImage from "./assets/pattern-divider-mobile.svg";
import DesktopImage from "./assets/pattern-divider-desktop.svg";
import DiceImage from "./assets/icon-dice.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 540px;
  border-radius: 15px;
  background: #313a48;
  padding: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 767px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  color: #53ffaa;
  font-size: 13px;
  font-family: "Manrope", sans-serif;
`;

const Paragraph = styled.p`
  color: #cee3e9;
  font-weight: 800;
  font-family: "Manrope", sans-serif;
  font-size: 28px;
  padding: 40px;
`;

const MobileImg = styled.img`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopImg = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const CircleContainer = styled.div`
  position: absolute;
  top: 345px;

  background-color: #53ffaa;
  border-radius: 50%;
  padding: 7px;
`;

const DiceImg = styled.img`
  width: 30px;
  height: 30px;
`;

function App() {
  return (
    <Container>
      <Card>
        <Title>ADVICE #117</Title>
        <Paragraph>random quote hey hey</Paragraph>
        <MobileImg src={MobileImage} alt="Mobile Image" />
        <DesktopImg src={DesktopImage} alt="Desktop Image" />
        <CircleContainer>
          <DiceImg src={DiceImage} alt="Dice image" />
        </CircleContainer>
      </Card>
    </Container>
  );
}

export default App;
