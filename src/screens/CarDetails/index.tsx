import React from "react";
import { StatusBar } from "react-native";

import { BackButton } from "../../components/BackButton";

import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";

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
  Accessories,
} from "./styles";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Acessory";

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

        <Accessories>
          <Accessory icon={speedSvg} name="380 km/h" />
          <Accessory icon={accelerationSvg} name="3.2s" />
          <Accessory icon={forceSvg} name="800 HP" />
          <Accessory icon={gasolineSvg} name="Gasolina" />
          <Accessory icon={exchangeSvg} name="Auto" />
          <Accessory icon={peopleSvg} name="2 pessoas" />
        </Accessories>

        <About>
          {
            "Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar."
          }
        </About>
      </Content>
    </Container>
  );
};
