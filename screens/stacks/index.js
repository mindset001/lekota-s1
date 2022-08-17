import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Landing from '../landing/Landing';
import Authentication from '../auth';
import MainScreen from '../main';
import {useSelector, useDispatch} from 'react-redux';
import {updateFirstLaunch} from '../../features/user/userSlice';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Stacks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => dispatch(updateFirstLaunch(false)), 3000);
  }, []);
  const {accessToken, firstLaunch} = useSelector(state => state.user);
  console.log(accessToken, firstLaunch);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {firstLaunch && <Stack.Screen name="Landing" component={Landing} />}

      {/* {state?.isLoading ? (
              <Stack.Screen name="Landing" component={Landing} />
              ) : state?.user ?  ? state?.user == null : (
              <Stack.Screen name="Authentication" component={Authentication} />
              ): null} */}
      {accessToken === '' && (
        <Stack.Screen name="Authentication" component={Authentication} />
      )}
      {accessToken !== '' && (
        <Stack.Screen name="Dashboard" component={MainScreen} />
      )}
    </Stack.Navigator>
  );
};

export default Stacks;
