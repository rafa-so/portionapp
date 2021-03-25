import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import WelCome from '../pages/Welcome';
import OnBoard1 from '../pages/OnBoard1';
import OnBoard2 from '../pages/OnBoard2';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "transparent"
        }
      }}
      initialRouteName="Welcome"
    >
      <Auth.Screen name="Welcome" component={WelCome} />
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="OnBoard1" component={OnBoard1} />
      <Auth.Screen name="OnBoard2" component={OnBoard2} />
    </Auth.Navigator>
  );
}

export default AuthRoutes;