import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import OnBoardImage from '../../assets/onboard/second.png'
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
} from '../OnBoard1/styles';

const OnBoard2: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <OnBoardLegend>
          Cuidados de
        </OnBoardLegend>
        <OnBoardTitle>
          Verdade
        </OnBoardTitle>
      </Header>
      <Body>
        <ImageOnBoarding source={OnBoardImage} />
        <OnBoardContet>
          O Portion é uma platadorma para auxílio no controle de dietas de pacientes hospitalizados por causa do Covid-19.
        </OnBoardContet>
        <ButtonContainer>
          <Button onPress={() => {
            navigation.navigate('perfil');
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

export default OnBoard2;