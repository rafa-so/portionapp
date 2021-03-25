import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: transparent;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;

  margin: 50px 0;
`;

export const OnBoardLegend = styled.Text`
  font-style: normal;
  font-family: 'SourceSansPro-Regular';
  font-size: 18px;
  line-height: 19px;
  color: #2D6FA5;
`;

export const OnBoardTitle = styled.Text`
  font-family: "SourceSerifPro-SemiBold";
  font-size: 48px;
  color: #0015CF;
  line-height: 50px;
`;

export const Body = styled.View`
  padding: 0;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

export const OnBoardContet = styled.Text`
  width: 310px;
  height: 48px;
  font-family: 'SourceSansPro-Regular';
  font-style: normal;
  font-size: 16px;
  line-height: 17px;

  /* margin: 40px 0 70px 0; */

  color: #0015CF;
`;

export const SkipOnBoard = styled.Text`
  font-family: 'SourceSansPro-Regular';
  font-size: 18px;
  line-height: 23px;
  font-style: normal;

  color: #878ECD;
  text-decoration: underline;
`;

export const ButtonContainer = styled.View`
  margin: 10% 0 0 0;
`;

export const ImageOnBoarding = styled.Image`
  height: 286px;
`;