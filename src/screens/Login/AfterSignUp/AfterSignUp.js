import React, {useEffect, useRef} from 'react';
import {StyleSheet, SafeAreaView, Text, Animated} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Img from '../../../assets/img/splash.png';

const AfterSignUp = ({route, navigation}) => {
  const animated = useRef(new Animated.Value(0)).current;
  const userName = route.params?.userName ?? null;
  const postData = route.params?.postData ?? null;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  const _interpolate = animated.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [-20, -10, 0],
    extrapolate: 'clamp',
  });

  const onPress = () => {
    navigation.navigate('userSetting', {
      postData,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        source={Img}
        style={[
          styles.img,
          {
            opacity: animated,
            transform: [{translateY: _interpolate}],
          },
        ]}
      />
      <Text style={styles.txt}>{userName}님! EverySports를</Text>
      <Text style={styles.txt}>시작할 준비가 되었습니다</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <AntDesign style={styles.icon} name="arrowright" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3bc9db',
  },
  img: {
    width: 300,
    height: 300,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#495057',
    marginBottom: 9,
  },
  icon: {
    fontSize: 60,
    color: '#fff',
  },
});

export default AfterSignUp;
