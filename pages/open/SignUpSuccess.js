import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Form, Input, Button } from '../../components/Form';

class SignUpSuccess extends React.Component {
  static navigationOptions = {
    title: 'Sign Up success',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up sucessful! Do the rest of the navigation from here</Text>
        <Button text="Sign in" action="navigate" to="SignIn" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default SignUpSuccess;
