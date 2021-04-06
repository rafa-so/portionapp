import React from 'react';
import { View, Text } from 'react-native';

import Label from '../../components/Label';

import { ContainerWelcome } from './styles';

const Welcome: React.FC = () => {
  return (
    <ContainerWelcome>
      <Label>
        Bem-vindo(a),
      </Label>
      <Label titlelize>
        Dra. Joana
      </Label>
    </ContainerWelcome>
  );
}

export default Welcome;