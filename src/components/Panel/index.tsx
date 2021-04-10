import React from 'react';

import {
  Container,
  Content,
  IconContent
} from './styles';

interface PanelProps {
  children: Element;
  icon?: Element;
}

const Panel: React.FC<PanelProps> = ({ children, icon }) => {
  return (
    <Container>
      <Content>
        {children}
      </Content>
      { icon &&
        <IconContent>
          {icon}
        </IconContent>
      }
    </Container>
  );
}

export default Panel;