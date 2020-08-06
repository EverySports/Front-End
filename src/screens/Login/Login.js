import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getUserInfo} from '../../modules/user';

const Login = ({navigation}) => {
  const {loading, data, error} = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
    navigation.navigate('main');
  }, []);

  if (loading)
    return (
      <View>
        <Text>로딩중</Text>
      </View>
    );
  if (error)
    return (
      <View>
        <Text>에러</Text>
      </View>
    );
  if (!data) return null;

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>Login</Text>
    </View>
  );
};

export default Login;
