import React from 'react';
import { View } from 'react-native';
import { Auth } from '@aws-amplify/auth';

import { useForm } from 'react-hook-form';
import { EmailInput, Button, Input } from '../../components/Form';

import { useToast } from '../../components/Toast/ToastProvider';

function SignInPage({ navigation }) {
  const { handleSubmit, control, errors } = useForm();
  const { addToast } = useToast();

  async function signIn(data) {
    try {
      await Auth.signIn(data.username, data.password);
      console.log('successfully signed in');
      addToast('You are succesfully signed in');
    } catch (err) {
      if (err.code === 'UserNotConfirmedException') {
        addToast('You are not confirmed yet');
        // The error happens if the user didn't finish the confirmation step when signing up
        // In this case you need to resend the code and confirm the user
        // About how to resend the code and confirm the user, please check the signUp part
        console.log(err);
      } else if (err.code === 'PasswordResetRequiredException') {
        addToast(
          'Your password is reset, you need to change it.. call the forgot password screen'
        );
        // The error happens when the password is reset in the Cognito console
        // In this case you need to call forgotPassword to reset the password
        // Please check the Forgot Password part.
        console.log(err);
      } else if (err.code === 'NotAuthorizedException') {
        addToast('Your password is incorrect');
        // The error happens when the incorrect password is provided
        console.log(err);
      } else if (err.code === 'UserNotFoundException') {
        addToast('This username does not excist');
        // The error happens when the supplied username/email does not exist in the Cognito user pool
        console.log(err);
      } else {
        console.log(err);
      }
    }
  }

  return (
    <View>
      <EmailInput
        name="username"
        control={control}
        autoCapitalize="none"
        label="E-mail adress"
        placeholder="Enter email"
        errors={errors.username}
      />
      <Input
        name="password"
        control={control}
        label="Password"
        secureTextEntry
        errors={errors.password}
        placeholder="Enter password"
      />
      <Button text="Submit" onPress={handleSubmit(signIn)} />
      <Button text="Forgot password" action="navigate" to="ForgotPassword" />
    </View>
  );
}

export default SignInPage;
