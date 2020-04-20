import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/open/OpenHome';
import SignIn from '../pages/open/SignIn';
import SignUp from '../pages/open/SignUp';
import ForgotPassword from '../pages/open/ForgotPassword';
import SignUpSuccess from '../pages/open/SignUpSuccess';

const Stack = createStackNavigator();

function OpenNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="SignUpSuccess" component={SignUpSuccess} />
    </Stack.Navigator>
  );
}

export default OpenNavigation;
