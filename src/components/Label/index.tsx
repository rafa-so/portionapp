import React from 'react';
import { TextProps, View } from 'react-native';

import { Container, Highlight } from './styles';

interface LabelProps extends TextProps {
  children?: string;
  highlight?: string;
  titlelize?: boolean;
}

const Label: React.FC<LabelProps> = (props) => {
  const { highlight, children, titlelize } = props;

  return (
    <View>
      <Container titlelize={titlelize}>
        {children}

        {
          highlight &&
          <Highlight>
            {highlight}
          </Highlight>
        }
      </Container>
    </View>
  );
}

export default Label;