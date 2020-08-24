import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChatContainer from './ChatContainer';
const Stack = createStackNavigator();

const SportsStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Chat">
      <Stack.Screen
        name="Chat"
        component={ChatContainer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SportsStackNavigator;
