import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, Animated} from 'react-native';
// import Login from './Login/Login';
import EverySportsLogo from '../assets/img/EverySports.png';
import AnimatedSplash from 'react-native-animated-splash-screen';
const Loading = ({navigation}) => {
  const [loaded, setLoaded] = useState(false);
  const [state, setState] = useState({
    animatedDone: false,
    animatedValue: new Animated.Value(0),
  });

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  return (
    // <View style={styles.container}>
    //   <View style={styles.animated}>
    //     <Image source={EverySportsLogo} style={styles.imgLogo} />
    //   </View>
    //   <Text>asdads</Text>
    //   {/* {state.animatedDone && <Login />} */}
    // </View>
    <AnimatedSplash
      translucent={true}
      isLoaded={loaded}
      logoImage={EverySportsLogo}
      backgroundColor={'#262626'}
      logoHeight={300}
      logoWidth={300}
    />
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
