import styled, { css } from 'styled-components/native';

import { BaseButtonProperties } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';

interface buttonProps extends BaseButtonProperties {
  type?: 'secondary';
}

interface textButtonProps extends TextInput {
  type?: 'secondary'
}

export const Container = styled.TouchableOpacity<buttonProps>`
  border-radius: 30px;
  width: 330px;
  height: 48px;
  background: #0015CF;

  justify-content: center;
  align-items: center;

  /* margin-bottom: 10px; */

  ${props => props.type === 'secondary' && css`
    background: #fff;
    border-style: solid;
    border-color: #B4A8FB;
    border-width: 1px;
  ` }
`;

export const TextContainer = styled.Text<textButtonProps>`
  color: #fff;
  font-family: "SourceSansPro-SemiBold";
  font-size: 18px;

  ${props => props.type === 'secondary' && css`
    color: #0015CF;
  ` }
`; 