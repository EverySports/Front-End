import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {GoogleSignin} from '@react-native-community/google-signin';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as util from './google_utils';
import * as initScreen from '../LoginStackNavigator';
import axios from 'axios';
import GoogleSignup from './GoogleSignup';

// 1. 로그인 버튼 클릭
// 2. 구글아이디 입력
// 3. 프론트 -> 백  정보 전송 (ex  토큰)
// 4. 백 -> 프론트 response
//       만약 비회원이라면 (백 : 토큰을 통해 얻은 값과 비회원임을 알리는 리스폰을 프론트로 전송)
//       만약 회원이라면 (백 : 로그인 사용자 정보를 프론트로 전송)
//  4.1 회원가입 진행
//  4.2 회원가입을 위한 정보 프론트 -> 백 전송
//  4.3 백에서 유저 정보 저장
// 5. 백 : 로그인 사용자 정보를 프론트로 전송, 프론트 : global state에 로그인 유저 정보 저장
// 6. navigate main screens

export default function GoogleLogin({navigation}) {
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
      //구글 로그인 정보
      const info = await GoogleSignin.signIn();
      //백엔드에 member조회 요청
      const {data} = await axios.get(
        // `http://localhost/eUsers/?id=${info.user.id}`,
        `http://localhost/eUsers/?id=${info.user.idx}`,
      );
      console.log('Data : ', data);
      console.log('Data : ', !data);
      const [isMember, userInfo, loggedIn] =
        data !== false ? ['member', data, true] : ['non_member', info, false];

      setState({
        ...state,
        isMember: isMember,
        userInfo: userInfo,
        loggedIn: loggedIn,
      });
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
        <ActivityIndicator style={{marginTop: 20}} size="large" />
      )}
      {/* 로그인 확인 + 비회원 유저 + 에러 없음 */}
      {!state.loggedIn && state.isMember === 'non_member' && !state.error && (
        <GoogleSignup navigation={navigation} state={state} />
      )}
      {/* 로그인 확인 + 에러 없음  -> 에브리 메인 페이지로 이동 */}
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
    // alignItems: 'center',
    // justifyContent: 'center',
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
