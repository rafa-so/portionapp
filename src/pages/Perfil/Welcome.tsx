import React from 'react';
import { View, Text } from 'react-native';

import Label from '../../components/Label';

const Welcome: React.FC = () => {
  return (
    <View>
      <Label>
        Bem-vindo(a),
      </Label>
      <Label titlelize>
        Dra. Joana
      </Label>
    </View>
  );
}

export default Welcome;