import React from 'react';
import {View, ActivityIndicator, Dimensions} from 'react-native';
import {DotIndicator} from 'react-native-indicators';
const {height} = Dimensions.get('window');

// import //   BallIndicator,
// //   BarIndicator,
// // DotIndicator,
// //   MaterialIndicator,
// //   PacmanIndicator,
// //   PulseIndicator,
// //   SkypeIndicator,
// //   UIActivityIndicator,
// //   WaveIndicator,
// 'react-native-indicators';

const Loader = () => {
  return (
    <View
      style={{
        height: height - 200,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <ActivityIndicator size="large" color="#38d9a9" /> */}
      <DotIndicator color="#adb5bd" />
    </View>
  );
};

export default Loader;
