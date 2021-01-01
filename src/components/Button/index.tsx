import React from 'react';

import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, TextContainer } from "./styles";

interface ButtonProps extends RectButtonProperties {
  children: string;
  type?: 'secondary'
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'primary',
  ...rest
}) => {
  return (
    <>
      <Container
        type={type}
        onPress={() => { }}
        {...rest}
      >
        <TextContainer
          type={type}
        >
          {children}
        </TextContainer>
      </Container>
    </>
  );
}

export default Button;