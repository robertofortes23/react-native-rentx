import React from "react";
import { StatusBar } from "react-native";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import { Container, Header, CarImages } from "./styles";

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
    </Container>
  );
};
