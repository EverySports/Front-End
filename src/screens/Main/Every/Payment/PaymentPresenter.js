import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const PaymentPresenter = ({schedule}) => {
  const {userSchedule, teacherSchedule} = schedule;
  return (
    <View style={styles.container}>
      <Text>{userSchedule}</Text>
      <Text>asd</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default PaymentPresenter;
