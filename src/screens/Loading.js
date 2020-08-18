import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, Animated} from 'react-native';
// import Login from './Login/Login';
import EverySportsLogo from '../assets/img/EverySports.png';

const Loading = ({navigation}) => {
  const [state, setState] = useState({
    animatedDone: false,
    animatedValue: new Animated.Value(0),
  });

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('login');
    }, 0);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.animated}>
        <Image source={EverySportsLogo} style={styles.imgLogo} />
      </View>
      <Text>asdads</Text>
      {/* {state.animatedDone && <Login />} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  animated: {
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{translateY: -200}],
  },
  imgLogo: {
    width: 300,
    height: 170,
  },
});

export default Loading;
