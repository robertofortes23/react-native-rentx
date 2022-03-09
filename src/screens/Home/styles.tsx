import { FlatList } from "react-native";
import { CarDTO } from "../../dtos/CarDTO";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;

  background-color: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;
  padding: 32px 24px;
`;

export const HeaderContent = styled.View`
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const CarList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 24,
    paddingBottom: 8,
  },
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
` as React.ComponentType as new <DataListProps>() => FlatList<DataListProps>;
