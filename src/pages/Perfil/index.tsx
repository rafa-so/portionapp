import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FlatList } from 'react-native';

import {
  Container,
  ContainerContent,
  ListItemDialog
} from './styles';

import Welcome from './Welcome';

import {
  Header,
  Menu,
  Panel,
  Label
} from '../../components';

const Perfil: React.FC = () => {
  const dialogs = [
    {
      id: '1',
      element: <Panel
        children={
          <>
            <Label highlight=" paciente">Ultimo</Label>
            <Label>Maria das Dores Costa da Silva 01</Label>
          </>
        }
        icon={
          <Icon name="arrow-right" size={20} color="#878ECD" />
        }
      />
    },
    {
      id: '2',
      element: <Panel
        children={
          <>
            <Label highlight=" paciente">Ultimo</Label>
            <Label>Maria das Dores Costa da Silva 02</Label>
          </>
        }
        icon={
          <Icon name="arrow-right" size={20} color="#878ECD" />
        }
      />
    },
    {
      id: '3',
      element: <Panel
        children={
          <>
            <Label highlight=" paciente">Ultimo</Label>
            <Label>Maria das Dores Costa da Silva 03</Label>
          </>
        }
        icon={
          <Icon name="arrow-right" size={20} color="#878ECD" />
        }
      />
    }
  ]

  return (
    <Container>
      <Header />
      <ContainerContent>
        <Welcome />
        <FlatList
          data={dialogs}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <ListItemDialog>
                {item.element}
              </ListItemDialog>
            );
          }}
        />
      </ContainerContent>
      <Menu />
    </Container>
  );
}

export default Perfil;