import React from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import DataContainer from './DataContainer';

const Stack = createStackNavigator();

const DataStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="data">
      <Stack.Screen
        name="data"
        component={DataContainer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default DataStackNavigator;
