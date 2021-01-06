import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';

import {
  AppContainerText,
  HeaderWelcomeContainer,
  FooterWelcomeContainer,
  WelcomeContainer
} from './styles';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <WelcomeContainer>
        <HeaderWelcomeContainer>
          <AppContainerText>Portion</AppContainerText>
          <Image source={logoImg} />
        </HeaderWelcomeContainer>
        <FooterWelcomeContainer>
          <Button
            type="secondary"
            onPress={() => { navigation.navigate("SignUp") }}
          >
            Sign Up
          </Button>
          <Button
            onPress={() => { navigation.navigate("SignIn") }}
          >
            Login
          </Button>
        </FooterWelcomeContainer>
      </WelcomeContainer>
    </>
  );
}

export default Welcome;