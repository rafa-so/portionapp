import React from 'react';
import { StatusBar, Image } from 'react-native';

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
        <Button />
        {/* <Button /> */}
      </AppContainer>
    </>
  );
};

export default App;
