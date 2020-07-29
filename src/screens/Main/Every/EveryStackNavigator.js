import React from 'react';
import {BlurView} from '@react-native-community/blur';
import {Platform, View} from 'react-native';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import EveryContainer from './EveryContainer';
import Search from './Search/Search';
import ClassInfoContainer from './Search/SearchDetail/ClassInfoContainer';
import TeacherInfoContainer from './Search/SearchDetail/TeacherInfoContainer';
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
      <Stack.Screen
        name="TeacherInfo"
        component={TeacherInfoContainer}
        options={
          (({route}) => ({title: route.params.title}),
          {
            headerTransparent: {
              position: 'absolute',
              backgroundColor: 'transparent',
              zIndex: 100,
              top: 0,
              left: 0,
              right: 0,
            },
          })
        }
      />
    </Stack.Navigator>
  );
};

export default EveryStackNavigator;
