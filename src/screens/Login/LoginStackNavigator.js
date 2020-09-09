import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginContainer from './LoginContainer';
import GoogleLogin from './GoogleLogin/GoogleLogin';
const Stack = createStackNavigator();
var navi;
export default function LoginStackNavigator({navigation}) {
  navi = navigation;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="로그인 홈"
          component={LoginContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="google_login"
          component={GoogleLogin}
          options={{
            title: 'Google로 시작하기',
            headerTitleStyle: {
              color: '#343a40',
            },
            headerBackTitleStyle: {
              color: '#495057',
            },
            headerTintColor: '#495057',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const goToMain = () => {
  navi.navigate('main');
};
