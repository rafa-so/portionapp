import styled from 'styled-components/native';
import { Form } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 80px 0 40px 0;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: "SourceSerifPro-SemiBold";
  font-size: 72px;
  color: #0015CF;
`;

export const Body = styled.View`
  flex: 1;
  margin: 120px 0 5px 0;
`;

export const FormContainer = styled(Form)`
  flex: 1;
  justify-content: space-between;
`;

export const ForgotPasswordContainer = styled.View`
  width: 98%;
  align-items: flex-end;
`;

export const ForgotPasswordText = styled.Text`
  font-family: 'SourceSerifPro-Regular';
  font-size: 12px;
  color: #000;
`;

export const ForgotPasswordLink = styled.Text`
  font-family: 'SourceSerifPro-Regular';
  font-size: 12px;
  color: #0015CF;
`;