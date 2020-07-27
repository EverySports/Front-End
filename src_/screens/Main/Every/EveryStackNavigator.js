import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EveryContainer from './EveryContainer';
import Search from './Search/Search';
import ClassInfoContainer from './Search/SearchDetail/ClassInfoContainer';

const Stack = createStackNavigator();

const EveryStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Every">
      <Stack.Screen
        name="에브리"
        component={EveryContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={({route}) => ({title: route.params.title})}
      />
      <Stack.Screen
        name="ClassInfo"
        component={ClassInfoContainer}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
};

export default EveryStackNavigator;
