import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Image, View } from 'react-native';

import logoImg from './assets/logo.png';

import Button from './components/Button';

import {
  AppContainer,
  AppContainerText,
  HeaderWelcomeContainer,
  FooterWelcomeContainer,
  WelcomeContainer
} from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0015CF" />
      <AppContainer>
        <WelcomeContainer>
          <HeaderWelcomeContainer>
            <AppContainerText>Portion</AppContainerText>
            <Image source={logoImg} />
          </HeaderWelcomeContainer>
          <FooterWelcomeContainer>
            <Button type="secondary">Sign Up</Button>
            <Button>Login</Button>
          </FooterWelcomeContainer>
        </WelcomeContainer>
      </AppContainer>
    </>
  );
};

export default App;
