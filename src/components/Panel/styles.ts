import styled from 'styled-components/native';

import { colors } from '../../components/Styles/variables';

export const Container = styled.View`
  flex-direction: row;
  background: ${colors.white};
  width: 100%;
  min-height: 79px;
  border-bottom-right-radius: 30px;
  padding: 10px;
`;

export const Content = styled.View`
  width: 92%;
  justify-content: center;
  /* border: 1px solid red; */
`;

export const IconContent = styled.View`
  /* border: 1px solid blue; */
  justify-content: flex-end;
`;