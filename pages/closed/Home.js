import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Auth } from '@aws-amplify/auth';
import { Button } from '../../components/Form';

function Home({ navigation }) {
  const [currentUser, setCurrentUser] = useState(true);
  useEffect(() => {
    try {
      const user = Auth.currentUserInfo();
      setCurrentUser(user);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <View>
      <Button text="Change password" action="navigate" to="ChangePassword" />
      <Button text="Sign out" action="navigate" to="SignOut" />
      <Button text="Delete user" action="navigate" to="DeleteUser" />
    </View>
  );
}

export default Home;
