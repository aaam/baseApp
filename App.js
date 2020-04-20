import React, { useState, useEffect } from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Amplify, { Hub } from '@aws-amplify/core';
import { Auth } from '@aws-amplify/auth';
import awsconfig from './aws-exports';

import OpenNavigation from './navigation/OpenNavigation';
import ClosedNavigation from './navigation/ClosedNavigation';
import ToastProvider from './components/Toast/ToastProvider';

Amplify.configure(awsconfig);

export default function App() {
  const [appState, setAppstate] = useState('openApp');

  async function checkAuth() {
    try {
      await Auth.currentAuthenticatedUser();
      setAppstate('closedApp');
    } catch (err) {
      console.log('user not signed in yet');
    }
  }

  checkAuth();

  useEffect(() => {
    Hub.listen('auth', data => {
      const { payload } = data;
      if (payload.event === 'signIn') {
        console.log('a user has signed in!');
        setAppstate('closedApp');
      }
      if (payload.event === 'signOut') {
        console.log('a user has signed out!');
        setAppstate('openApp');
      }
    });
  }, []);

  return (
    <ToastProvider>
      <NavigationContainer>
        {appState === 'openApp' && <OpenNavigation />}
        {appState === 'closedApp' && <ClosedNavigation />}
      </NavigationContainer>
    </ToastProvider>
  );
}
