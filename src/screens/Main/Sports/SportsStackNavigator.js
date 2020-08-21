import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SportsContainer from './SportsContainer';
import AITrainingContentsContainer from './Training/AITrainingContentsContainer';
const Stack = createStackNavigator();

const SportsStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Sports">
      <Stack.Screen
        name="운동"
        component={SportsContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AISports"
        component={AITrainingContentsContainer}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
};

export default SportsStackNavigator;
