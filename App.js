/**
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  LogBox,
} from 'react-native';
import {fonts} from './utils/assets';

import {StyleText} from './styles/styledUtils';
import {NavigationContainer} from '@react-navigation/native';
import Authentication from './screens/auth/index';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Landing from './screens/landing/Landing';
import MainScreen from './screens/main';
import {store} from './app/store';
import {Provider as ReduxProvider} from 'react-redux';
import Stacks from './screens/stacks';

export const AuthContext = React.createContext();

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(["[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!"]);
  }, []);

  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stacks />
        </NavigationContainer>
      </SafeAreaProvider>
    </ReduxProvider>
  );
};

export default App;
