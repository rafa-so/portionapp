import React from 'react';
import { View, Text } from 'react-native';

import {
  Container,
  ContainerContent
} from './styles';

import Welcome from './Welcome';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

const Perfil: React.FC = () => {
  return (
    <Container>
      <Header />
      <ContainerContent>
        <Welcome />
      </ContainerContent>
      <Menu />
    </Container>
  );
}

export default Perfil;