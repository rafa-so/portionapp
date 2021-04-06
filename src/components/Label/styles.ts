import styled, { css } from 'styled-components/native';

import { colors } from '../Styles/variables';

interface ContainerProps {
  titlelize?: boolean;
}

export const Container = styled.Text<ContainerProps>`
  font-family: "SourceSerifPro-SemiBold";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  color: ${colors.blue_light};

  ${props => props.titlelize && css`
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 38px;
    color: ${colors.dark_blue}
  ` }
`;