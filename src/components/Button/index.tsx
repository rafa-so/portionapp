import React from 'react';

import { Container, TextContainer } from "./styles";

interface ButtonProps {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <>
      <Container onPress={() => { }}>
        <TextContainer>
          {children}
        </TextContainer>
      </Container>
    </>
  );
}

export default Button;