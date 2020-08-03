import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const row = width / 1.25 / 7;
const col = height / 1.75 / 7;

const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const THead = () => {
  return (
    <View
      style={{
        width: row,
        height: 50,
        backgroundColor: 'tomato',
      }}>
      <Text></Text>
    </View>
  );
};

const PaymentPresenter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <View style={styles.theader}>
          {day.map((d, idx) => (
            <View key={idx} style={styles.day}>
              <Text style={styles.txtDay}>{d}</Text>
            </View>
          ))}
        </View>
      </View>
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
  calendarContainer: {
    borderWidth: 1,
    borderColor: '#495057',
    width: width / 1.25 + 2,
    height: height / 1.75,
  },
  theader: {
    flexDirection: 'row',

    backgroundColor: '#fa5252',
  },
  day: {
    width: row,
    height: 40,
    borderWidth: 1,
    borderColor: '#dee2e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtDay: {
    color: '#ffffff',
    fontWeight: '700',
  },
});

export default PaymentPresenter;
