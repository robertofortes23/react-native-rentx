import React from "react";
import { StatusBar } from "react-native";

import { BackButton } from "../../components/BackButton";

import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

import {
  Container,
  Header,
  SliderContent,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessorys,
  Footer,
} from "./styles";

export const CarDetails: React.FC = () => {
  const imageUrl =
    "https://www.freeiconspng.com/uploads/audi-png-transparent-png-12.png";
  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <Content>
        <Details>
          <Description>
            <Brand>{"Lamborguini"}</Brand>
            <Name>{"Huracan"}</Name>
          </Description>

          <Rent>
            <Period>{"Ao dia"}</Period>
            <Price>{"R$ 580"}</Price>
          </Rent>
        </Details>

        <About>
          {
            "Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar."
          }
        </About>
      </Content>
    </Container>
  );
};
