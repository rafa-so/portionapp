import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  ContainerContent
} from './styles';

import Welcome from './Welcome';

import {
  Header,
  Menu,
  Panel,
  Label
} from '../../components';

const Perfil: React.FC = () => {
  return (
    <Container>
      <Header />
      <ContainerContent>
        <Welcome />
        <Panel
          children={
            <>
              <Label highlight=" paciente">Ultimo</Label>
              <Label>Maria das Dores Costa da Silva</Label>
            </>
          }
          icon={
            <Icon name="arrow-right" size={20} color="#878ECD" />
          }
        />
      </ContainerContent>
      <Menu />
    </Container>
  );
}

export default Perfil;