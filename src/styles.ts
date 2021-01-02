import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const AppContainer = styled(LinearGradient)`
  flex: 1;
`;

export const WelcomeContainer = styled.View`
  flex:1;
  justify-content: space-between;
  align-items: center;
  padding: 80px 0 40px 0;
`;

export const HeaderWelcomeContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const FooterWelcomeContainer = styled.View`
  height: 19%;
  justify-content: space-between;
`;

export const AppContainerText = styled.Text`
  font-family: "SourceSerifPro-SemiBold";
  font-size: 72px;
  color: #0015CF;
`;
