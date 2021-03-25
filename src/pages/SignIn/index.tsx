import React, { useRef, useCallback } from 'react';
import {
  Image,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Header,
  Title,
  Body,
  FormContainer,
  ForgotPasswordText,
  ForgotPasswordLink,
  ForgotPasswordContainer
} from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const submit = useCallback((data: object) => {
    console.log("submit", data);
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Container>
        <Header>
          <Title>Portion</Title>
          <Image source={logoImg} />
        </Header>
        <Body>
          <FormContainer
            ref={formRef}
            onSubmit={submit}
          >
            <View>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                name="username"
                placeholder="username"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordRef.current?.focus();
                }}
              />
              <Input
                ref={passwordRef}
                autoCorrect={false}
                secureTextEntry
                name="password"
                placeholder="password"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
              <ForgotPasswordContainer>
                <ForgotPasswordText>
                  Forgot your <ForgotPasswordLink>pasword?</ForgotPasswordLink>
                </ForgotPasswordText>
              </ForgotPasswordContainer>
            </View>

            <Button onPress={() => {
              // formRef.current?.submitForm();
              navigation.navigate('OnBoard1');
            }}>
              Log In
            </Button>

          </FormContainer>
        </Body>
      </Container>
    </KeyboardAvoidingView>
  );
}

export default SignIn;
