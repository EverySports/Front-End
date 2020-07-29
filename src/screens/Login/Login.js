import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
const Login = ({navigation}) => {
  useEffect(() => {
    navigation.navigate('main');
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>Login</Text>
    </View>
  );
};

export default Login;
