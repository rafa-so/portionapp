import React from 'react';
import { TextProps, View } from 'react-native';

import { Container } from './styles';

interface LabelProps extends TextProps {
  children?: string;
  highlight?: string;
  titlelize?: boolean;
}

const Label: React.FC<LabelProps> = (props) => {
  const { children, titlelize } = props;

  return (
    <View>
      <Container titlelize={titlelize}>
        {children}
      </Container>
    </View>
  );
}

export default Label;