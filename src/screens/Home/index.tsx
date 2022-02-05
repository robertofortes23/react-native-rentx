import React from "react";
import { View, Text, StatusBar } from "react-native";

import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";

import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";

const carData = {
  brand: "AUDI",
  name: "RS 5 Coupé",
  rent: {
    period: "Ao dia",
    price: "120",
  },
  thumbnail: "https://cdn.picpng.com/audi/audi-red-a5-28597.png",
};

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
      />
    </Container>
  );
}
