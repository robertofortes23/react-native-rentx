import React from "react";
import { StatusBar } from "react-native";

import { BackButton } from "../../components/BackButton";
import { Feather } from "@expo/vector-icons";

import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";

import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Acessory";
import { Button } from "../../components/Button";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

export const SchedulingDetails: React.FC = () => {
  const theme = useTheme();

  const imageUrl = [
    "https://www.freeiconspng.com/uploads/audi-png-transparent-png-12.png",
    "https://www.freeiconspng.com/uploads/audi-png-transparent-png-12.png",
  ];
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={imageUrl} />
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

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>"DateValue"</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>"DateValue"</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$0000 diárias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ 0000000</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" enabled={true} />
      </Footer>
    </Container>
  );
};
