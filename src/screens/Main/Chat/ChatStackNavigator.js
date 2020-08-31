import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChatContainer from './ChatContainer';
import ChatRoomContainer from './Room/ChatRoomContainer';

const Stack = createStackNavigator();

const SportsStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Chat">
      <Stack.Screen
        name="Chat"
        component={ChatContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomContainer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SportsStackNavigator;
