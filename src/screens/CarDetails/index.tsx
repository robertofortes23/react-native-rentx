import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

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
  Footer,
} from "./styles";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Acessory";
import { Button } from "../../components/Button";
import { CarDTO } from "../../dtos/CarDTO";

interface Params {
  car: CarDTO;
}

export const CarDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental() {
    navigation.navigate("Scheduling");
  }

  function handleBack() {
    navigation.goBack();
  }

  const imageUrl =
    "https://www.freeiconspng.com/uploads/audi-png-transparent-png-12.png";
  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos as []} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              icon={speedSvg}
              name={accessory.name}
            />
          ))}
        </Accessories>

        <About>{car.about}</About>
      </Content>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          enabled={true}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
};
