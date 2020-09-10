import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Loader from './Loader';
const Loading = () => {
  return (
    <View style={styles.container}>
      <Loader />
      <Text style={styles.txt}>로딩 중 입니다!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    color: '#fa5252',
    fontSize: 32,
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#495057',
  },
});

export default Loading;
