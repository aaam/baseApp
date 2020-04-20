import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/closed/Home';

import ChangePasswordPage from '../pages/closed/ChangePassword';
import SignOutPage from '../pages/closed/SignOut';
import DeleteUser from '../pages/closed/DeleteUser';

const Stack = createStackNavigator();

function ClosedNavigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordPage} />
      <Stack.Screen name="SignOut" component={SignOutPage} />
      <Stack.Screen name="DeleteUser" component={DeleteUser} />
    </Stack.Navigator>
  );
}

export default ClosedNavigation;
