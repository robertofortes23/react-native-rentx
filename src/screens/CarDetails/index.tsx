import React from "react";
import { StatusBar } from "react-native";

import { BackButton } from "../../components/BackButton";

import {
  Container,
  Header,
  Content,
  CarImages,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
} from "./styles";
import { ImageSlider } from "../../components/ImageSlider";

export const CarDetails: React.FC = () => {
  const imageUrl =
    "https://www.freeiconspng.com/uploads/audi-png-transparent-png-12.png";
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={[imageUrl]} />
      </CarImages>

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
