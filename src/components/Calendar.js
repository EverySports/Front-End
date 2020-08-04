import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const [tWidth, tHeight] = [width * 0.95, height * 0.75];
const TABLE_HEADE_HEIGHT = 40;
const TABLE_BORDER_COLOR = '#868e96';
const time = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const [TABLE_ELEMENTS_WIDTH, TABLE_ELEMENTS_HEIGHT] = [
  tWidth / 7 - 3,
  (tHeight - TABLE_HEADE_HEIGHT) / time.length,
];

const Calendar = ({day, ...props}) => {
  console.log(props.key);
  return (
    <View style={styles.container}>
      {day.map((time, key) => (
        <View key={key} style={styles.elementContainer}>
          <TouchableOpacity style={styles.btnElement}>
            <View style={styles.element(time)}></View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  elementContainer: {
    // borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    width: TABLE_ELEMENTS_WIDTH,
    height: TABLE_ELEMENTS_HEIGHT,
    borderColor: TABLE_BORDER_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnElement: {
    // padding: 1,
  },
  element: (time) => ({
    width: TABLE_ELEMENTS_WIDTH - 1,
    height: TABLE_ELEMENTS_HEIGHT - 1,
    backgroundColor: time % 2 === 0 ? '#ffa8a8' : 'white',
  }),
});

export default Calendar;
