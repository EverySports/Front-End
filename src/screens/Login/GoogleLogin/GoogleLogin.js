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

const _userInfo = {
  idToken:
    'eyJhbGciOiJSUzI1NiIsImtpZCI6IjNmMzMyYjNlOWI5MjhiZmU1MWJjZjRmOGRhNTQzY2M0YmQ5ZDQ3MjQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzOTM3NjM3NDE3NzYtbmM1ODg5MGp2NDE2NmgwMnNlZHEzamYwZTFnMXE0aHYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIzOTM3NjM3NDE3NzYtb2x0YXJxaGU3MGFvZGlmaW1qcGxyMjdlYmdnNG82YTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDMxMDk1MzMxMjUxMTI3NzMyODgiLCJlbWFpbCI6Imp3eTI3NzcyNDE1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiM3hiWFkzQUtJdGdxTTIyUlc4SUhKUSIsIm5vbmNlIjoibTM1TmNjd3dfY1RWczZaZjh5OWhZa1hIc1c1bHh5Y0dnaUdmWHNYcTA1dyIsIm5hbWUiOiLsoJXsm5DsmIEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1yTmtRTE9EcFl2VS9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BTVp1dWNtejN4OWNuVmpZRXdWQmw2YjhoVFc5WWdTMXJnL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiLsm5DsmIEiLCJmYW1pbHlfbmFtZSI6IuyglSIsImxvY2FsZSI6ImtvIiwiaWF0IjoxNTk5NjE1OTc2LCJleHAiOjE1OTk2MTk1NzZ9.QXgeO2hoeOWFZanqRTUTwZfWnF1s8wJIVT0z-PE8IBSotl23ZPEupG71ezujKXxtpO42zS6KLb01S7RvO4WUuP2CPRk8YtXj9oCQcKuBBOkLu-BXjH09jCmxt_sU_g_7h1dA0BPq62N_4xQz_I_7nhet66S-MjUnPelUVJESuwGzhNFoJCTdczcTbzyUtg9rd_Rxm9DJjbHFwZqQIq9wMUfNmr6mv4Qk2W_AZ7seLd8rnB4aOjuTp1dCSXd3wqPGGsXA25v57HyjP8Gh3_IgxQtZvy4NcOC2PhlUjSUgsGZcQdr-roGTk8q9kyw_McxQWHDiZSEyQU-LKa4lQcm4pw',
  scopes: [
    'https://www.googleapis.com/auth/userinfo.email',
    'openid',
    'https://www.googleapis.com/auth/userinfo.profile',
  ],
  serverAuthCode:
    '4/3wHAgpfo9zsJYuDRsic72mm5i8xkyJK8vqrZaI9aNFcWVcYL9GwDaHa-Sg_Yj6KxnlbqltHCjkaJhWWFHC0hLqw',
  user: {
    email: 'jwy27772415@gmail.com',
    familyName: '정',
    givenName: '원영',
    id: '103109533125112773288',
    name: '정원영',
    photo:
      'https://lh4.googleusercontent.com/-rNkQLODpYvU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmz3x9cnVjYEwVBl6b8hTW9YgS1rg/s120/photo.jpg',
  },
};

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
