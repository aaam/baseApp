import { Auth } from '@aws-amplify/auth';
import React from 'react';
import { useToast } from '../../components/Toast/ToastProvider';

function SignOutPage({ navigation }) {
  const { addToast } = useToast();
  Auth.signOut({ global: true })
    .then(data => {
      console.log(data);
      addToast('You have signed out!');
    })
    .catch(err => console.log(err));

  return <></>;
}

export default SignOutPage;
