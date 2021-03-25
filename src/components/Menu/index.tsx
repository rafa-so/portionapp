import React from 'react';
import { View, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  MenuItems
} from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <MenuItems>
        <Icon name="plus-square" size={30} color="#878ECD" />
        <Icon name="user-friends" size={30} color="#878ECD" />
        <Text>Menu</Text>
      </MenuItems>
    </Container>
  )
}

export default Menu;