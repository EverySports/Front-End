import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SportsContainer from './SportsContainer';
const Stack = createStackNavigator();

const SportsStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Sports">
      <Stack.Screen
        name="Sports"
        component={SportsContainer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SportsStackNavigator;
