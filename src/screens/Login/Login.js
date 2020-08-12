import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
const Login = ({navigation}) => {
  const [user, setUser] = useState({
    loggedIn: false,
    userInfo: null,
    error: null,
  });
  const {userInfo} = user;

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '393763741776-oltarqhe70aodifimjplr27ebgg4o6a2.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceConsentPrompt: true,
    });
  }, []);

  const onLogin_Google = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser({
        ...user,
        loggedIn: true,
        userInfo: userInfo,
      });
    } catch (e) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User SIGN_IN_CANCELLED. Error Code : ', error.code);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('User IN_PROGRESS. Error Code : ', error.code);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(
          'User PLAY_SERVICES_NOT_AVAILABLE. Error Code : ',
          error.code,
        );
      } else {
        console.log('DEVELOPER ERROR. Error Code : ', error.code);
      }
    }
  };

  const onSignOut_Google = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser({
        ...user,
        userInfo: null,
        loggedIn: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <GoogleSigninButton
        style={{
          width: 198,
          height: 48,
        }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={onLogin_Google}
      />
      <TouchableOpacity
        onPress={() => {
          console.log(user);
        }}>
        <Text>사용자 정보 콘솔 출력</Text>
      </TouchableOpacity>

      {user.loggedIn && (
        <TouchableOpacity onPress={onSignOut_Google}>
          <Text>로그아웃 하기</Text>
        </TouchableOpacity>
      )}

      {user.loggedIn ? <Text>현재 상태 : 로그인</Text> : <Text>로그아웃</Text>}
    </View>
  );
};

export default Login;

// import React, {useEffect} from 'react';
// import {View, Text} from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';
// import {getUserInfo} from '../../modules/user';

// const Login = ({navigation}) => {
//   const {loading, data, error} = useSelector((state) => state.user.userInfo);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getUserInfo());
//     navigation.navigate('main');
//   }, []);

//   if (loading)
//     return (
//       <View>
//         <Text>로딩중</Text>
//       </View>
//     );
//   if (error)
//     return (
//       <View>
//         <Text>에러</Text>
//       </View>
//     );
//   if (!data) return null;

//   return (
//     <View style={{flex: 1, justifyContent: 'center'}}>
//       <Text>Login</Text>
//     </View>
//   );
// };

// export default Login;
