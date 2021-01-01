import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Image, View } from 'react-native';

import logoImg from './assets/logo.png';

import Button from './components/Button';

import {
  AppContainer,
  AppContainerText
} from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0015CF" />
      <AppContainer>
        <AppContainerText>Portion</AppContainerText>
        <Image source={logoImg} />
        <Button type="secondary">Sign Up</Button>
        <Button>Login</Button>
      </AppContainer>
    </>
  );
};

export default App;
