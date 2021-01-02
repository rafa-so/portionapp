import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0015CF" />
      <LinearGradient colors={['#E8F1FF', '#FFFFFF']} style={{ flex: 1 }}>
        <Routes />
      </LinearGradient>
    </NavigationContainer>
  );
};

export default App;
