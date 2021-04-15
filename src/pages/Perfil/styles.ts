import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ContainerContent = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items:center;
  height: 100%;
  padding: 5% 5% 0 5%;
  flex-basis:0;
`;

export const ListItemDialog = styled.View`
  align-items: center;
  flex-grow: 1;
  margin: 5px 0;
`;

export const ContainerWelcome = styled.View`
  width: 100%;
  justify-content: flex-start;
`;