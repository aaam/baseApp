import { Auth } from '@aws-amplify/auth';
import { CognitoUser } from 'amazon-cognito-identity-js';

import React from 'react';
import { useToast } from '../../components/Toast/ToastProvider';

function DeleteUser({ navigation }) {
  const { addToast } = useToast();

  Auth.currentAuthenticatedUser()
    .then(
      (user: CognitoUser) =>
        new Promise((resolve, reject) => {
          user.deleteUser(error => {
            if (error) {
              return reject(error);
            }
            addToast('The user is deleted!');

            resolve();
          });
        })
    )
    .catch(onError);

  return <></>;
}

export default DeleteUser;
