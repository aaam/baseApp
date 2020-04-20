import React from 'react';
import { useForm } from 'react-hook-form';

import { Auth } from '@aws-amplify/auth';
import { RequiredInput, Button } from '../../components/Form';

function ChangePasswordPage({ navigator }) {
  const { handleSubmit, control, errors } = useForm();

  function changePassword(values) {
    Auth.currentAuthenticatedUser()
      .then(user =>
        Auth.changePassword(user, values.oldPassword, values.newPassword)
      )
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  return (
    <>
      <RequiredInput
        label="Password"
        name="oldpassword"
        control={control}
        errors={errors.oldPassword}
        secureTextEntry="true"
        placeholder="Password"
      />
      <RequiredInput
        label="Password"
        name="newpassword"
        control={control}
        errors={errors.newPassword}
        secureTextEntry="true"
        placeholder="Password"
      />

      <Button title="Submit" onPress={handleSubmit(changePassword)} />
    </>
  );
}

export default ChangePasswordPage;
