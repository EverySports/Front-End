import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Error = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="error" style={styles.icon} />
      <Text style={styles.txt}>페이지 에러입니다 ㅠㅠ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  icon: {
    color: '#fa5252',
    fontSize: 50,
    marginRight: 20,
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#495057',
  },
});

export default Error;
