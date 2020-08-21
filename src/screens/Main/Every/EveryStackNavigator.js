import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EveryContainer from './EveryContainer';
import Search from './Search/Search';
import ClassInfoContainer from './Search/SearchDetail/ClassInfoContainer';
import TeacherInfoContainer from './Search/SearchDetail/TeacherInfoContainer';
import PaymentContainer from './Payment/PaymentContainer';
import PaymemtDetailContainer from './Payment/PaymemtDetailContainer';
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
        options={({route}) => ({
          title: '',
          headerTransparent: true,
          headerTintColor: '#495057',
        })}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentContainer}
        options={({route}) => ({
          title: '수강신청',
          headerTransparent: true,
          headerTintColor: '#495057',
        })}
      />
      <Stack.Screen
        name="PaymentDetail"
        component={PaymemtDetailContainer}
        options={({route}) => ({
          title: '수강신청 확인',
          headerTintColor: '#495057',
        })}
      />
    </Stack.Navigator>
  );
};

export default EveryStackNavigator;
