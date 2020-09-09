import React from 'react';
import {SafeAreaView, StyleSheet, Text, Image} from 'react-native';
import {GoogleSigninButton} from '@react-native-community/google-signin';
// import EverySportsLogo from '../../assets/img/EverySports.png';
import EverySportsLogo from '../../assets/img/splash.png';

export default function LoginPresenter({navigation}) {
  const onPress = (key) => (e) => {
    navigation.navigate(key);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.imgLogo} source={EverySportsLogo} />
      <Text style={styles.txtGuide}>로그인 후 서비스 이용이 가능합니다</Text>
      {/* Auth Login */}
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={onPress('google_login')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imgLogo: {
    width: 300,
    height: 300,
  },
  txtGuide: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#495057',
    marginBottom: 10,
  },
});
