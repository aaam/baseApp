import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Auth } from '@aws-amplify/auth';
import { EmailInput, Button } from '../../components/Form';

function ForgotPasswordPage() {
  const { handleSubmit, control, errors } = useForm();

  function forgotPassword(values) {
    Auth.forgotPassword(values.username)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  return (
    <>
      <EmailInput
        name="username"
        control={control}
        autoCapitalize="none"
        label="E-mail adres"
        placeholder="Enter email"
        errors={errors.username}
      />

      <Button title="Submit" onPress={handleSubmit(forgotPassword)} />
    </>
  );
}

export default ForgotPasswordPage;
