import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, ActivityIndicator} from 'react-native';
import {GoogleSignin} from '@react-native-community/google-signin';
import * as util from './google_utils';
import * as initScreen from '../LoginStackNavigator';
import axios from 'axios';
import GoogleSignup from './GoogleSignup';
import {useSelector, useDispatch} from 'react-redux';
import {setUserInfo} from '../../../modules/user';
export default function GoogleLogin({navigation}) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    loggedIn: false,
    isMember: null,
    error: null,
    userInfo: null,
  });

  useEffect(() => {
    util.init();
    googleSignIn();
  }, []);

  async function googleSignIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const info = await GoogleSignin.signIn();
      const {data} = await axios.get(
        `http://localhost/eUsers/?user_ID=${info.user.id}`,
      );
      const [isMember, userInfo, loggedIn] =
        data.length !== 0
          ? ['member', data, true]
          : ['non_member', info, false];
      setState({
        ...state,
        isMember: isMember,
        userInfo: userInfo,
        loggedIn: loggedIn,
      });
      dispatch(setUserInfo(data[0]));
    } catch (err) {
      console.log(err);
    }
  }

  const goBack = () => {
    util.signOut;
    setState({
      ...state,
      userInfo: null,
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 로그인확인 */}
      {!state.loggedIn && state.isMember === null && (
        <ActivityIndicator style={{marginTop: 50}} size="large" />
      )}
      {/* 로그인 확인 + 비회원 유저 + 에러 없음 */}
      {!state.loggedIn && state.isMember === 'non_member' && !state.error && (
        <GoogleSignup navigation={navigation} state={state} />
      )}

      {/* 로그인 확인 + 에러 없음 -> 에브리 메인 페이지로 이동 */}
      {state.loggedIn &&
        state.isMember === 'member' &&
        !state.error &&
        initScreen.goToMain()}
      {state.error && goBack()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  icon: {
    marginRight: 10,
    color: '#343a40',
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#343a40',
  },
});
