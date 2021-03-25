import React from 'react';
// import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import OnBoardImage from '../../assets/onboard/first.png'

import Button from '../../components/Button';

import {
  Container,
  Header,
  OnBoardLegend,
  OnBoardTitle,
  Body,
  OnBoardContet,
  SkipOnBoard,
  ButtonContainer,
  ImageOnBoarding
} from './styles';

const OnBoard1: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <OnBoardLegend>
          Bem vindo ao
        </OnBoardLegend>
        <OnBoardTitle>
          Portion
        </OnBoardTitle>
      </Header>
      <Body>
        <ImageOnBoarding source={OnBoardImage} />
        <OnBoardContet>
          Dentro da plaforma você poderá, como profissional, adicionar pacientes e monitorar seu consumo diário de comida.
        </OnBoardContet>
        <ButtonContainer>
          <Button onPress={() => {
            navigation.navigate('OnBoard2');
          }}>
            Próximo
          </Button>
        </ButtonContainer>
        <SkipOnBoard>
          Skip >>
        </SkipOnBoard>
      </Body>

    </Container>
  );
}

export default OnBoard1;