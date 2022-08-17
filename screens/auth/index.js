import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import Landing from '../landing/Landing';

const AuthenticationStack = createStackNavigator();
const Authentication = () => {
  // const [state] = React.useContext(AuthContext);
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthenticationStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        // options={{
        // animationTypeForReplace: state.isSignout ? 'pop' : 'push',
        // }}
      />
      <AuthenticationStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
      />
    </AuthenticationStack.Navigator>
  );
};

export default Authentication;
