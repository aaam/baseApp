import * as React from 'react';
import { Hub } from 'aws-amplify';
import { createStackNavigator } from '@react-navigation/stack';
import OpenHome from '../pages/open/OpenHome';
import SignIn from '../pages/open/SignIn';
import SignUp from '../pages/open/SignUp';
import ForgotPassword from '../pages/open/ForgotPassword';
import SignUpSuccess from '../pages/open/SignUpSuccess';
import Home from '../pages/closed/Home';
import SignOutPage from '../pages/closed/SignOut';

const Stack = createStackNavigator();

class Navigator extends React.Component {
  render() {
    console.log(this.props.appState);
    return (
      <Stack.Navigator>
        <Stack.Screen name="OpenHome" component={OpenHome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="SignUpSuccess" component={SignUpSuccess} />

        <Stack.Screen name="ClosedHome" component={Home} />
        <Stack.Screen name="SignOutPage" component={SignOutPage} />
      </Stack.Navigator>
    );
  }
}

export default Navigator;
