import React from "react";
import styled from "styled-components";
import MobileImage from "./assets/pattern-divider-mobile.svg";
import DesktopImage from "./assets/pattern-divider-desktop.svg";
import DiceImage from "./assets/icon-dice.svg";
import { useState, useEffect } from "react";
import axios from "axios";

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
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #53ffaa;
  border-radius: 50%;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DiceImg = styled.img`
  width: 30px;
  height: 30px;
  position: relative;
`;

function App() {
  const [adviceData, SetAdviceData] = useState({advice: "", id: ""});

const fetchData = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice, id } = response.data.slip;
        SetAdviceData({advice,id});
       
      })
      .catch((error) => {
        console.log("error fetching advice:", error);
      });
  };

  useEffect(()=> {
    fetchData();
  },[])

  return (
    <Container>
      <Card>
        <Title>ADVICE {adviceData.id} </Title>
        <Paragraph>{adviceData.advice}</Paragraph>
        <MobileImg src={MobileImage} alt="Mobile Image" />
        <DesktopImg src={DesktopImage} alt="Desktop Image" />
        <CircleContainer onClick={fetchData}>
          <DiceImg  src={DiceImage} alt="Dice image" />
        </CircleContainer>
      </Card>
    </Container>
  );
}

export default App;
