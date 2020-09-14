import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginContainer from './LoginContainer';
import GoogleLogin from './GoogleLogin/GoogleLogin';
import GoogleSignUpConfirm from './GoogleLogin/GoogleSignUpConfirm';
import AfterSignUp from './AfterSignUp/AfterSignUp';
import GlobalUserInfoSetting from './AfterSignUp/GlobalUserInfoSetting';
const Stack = createStackNavigator();
let _navigation;

export default function LoginStackNavigator({navigation}) {
  _navigation = navigation;
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
        <Stack.Screen
          name="confirm"
          component={GoogleSignUpConfirm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="after_signup"
          component={AfterSignUp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="userSetting"
          component={GlobalUserInfoSetting}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const goToMain = () => {
  _navigation.navigate('main');
};
