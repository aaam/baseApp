import React from 'react';
import { Auth } from '@aws-amplify/auth';

import { useForm } from 'react-hook-form';
import { EmailInput, Input, Button } from '../../components/Form';

function SignUpPage({ navigation }) {
  const { handleSubmit, control, errors } = useForm();
  function signUp(data) {
    const { password } = data;
    const { username } = data;
    const email = username;

    try {
      Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
          // other custom attributes
        },
        validationData: [], // optional
      });
      navigation.navigate('SignUpSuccess');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
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
      <Button text="Submit" onPress={handleSubmit(signUp)} />
    </>
  );
}

export default SignUpPage;
