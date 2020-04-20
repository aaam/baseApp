import React from 'react';
import { View } from 'react-native';

import { Button } from '../../components/Form';

function OpenHome() {
  return (
    <View>
      <Button text="Sign in" action="navigate" to="SignIn" />
      <Button text="Sign up" action="navigate" to="SignUp" />
      <Button text="Forgot password" action="navigate" to="ForgotPassword" />
    </View>
  );
}

export default OpenHome;
