import React from 'react';
import {Platform, View} from 'react-native';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import EveryContainer from './EveryContainer';
import Search from './Search/Search';
import ClassInfoContainer from './Search/SearchDetail/ClassInfoContainer';
import TeacherInfoContainer from './Search/SearchDetail/TeacherInfoContainer';
const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

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
      <Stack.Screen
        name="TeacherInfo"
        component={TeacherInfoContainer}
        options={({route}) => ({
          title: route.params.title,
          headerTransparent: true,
          headerTintColor: 'black',
          headerStyle: {
            opacity: 0.5,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default EveryStackNavigator;
