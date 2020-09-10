import React from 'react';
import {View, Dimensions} from 'react-native';
import {DotIndicator} from 'react-native-indicators';
const {height} = Dimensions.get('window');
const Loader = () => {
  return (
    <View
      style={{
        height: height - 200,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <DotIndicator color="#adb5bd" />
    </View>
  );
};

export default Loader;
