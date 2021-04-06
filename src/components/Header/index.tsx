import React from 'react';
import { Image } from 'react-native';

import logoHeader from '../../assets/header/header-logo.png';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Image source={logoHeader} />
    </Container>
  );
}

export default Header;
