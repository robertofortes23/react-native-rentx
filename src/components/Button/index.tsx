import React from "react";
import { useTheme } from "styled-components";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  color?: string;
}

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <Container
      color={color ? color : theme.colors.main}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled === false ? 0.5 : 1 }}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  );
}
