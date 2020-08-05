import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
//#region of constant
const {width, height} = Dimensions.get('window');
const [tWidth, tHeight] = [width * 0.95, height * 0.75];
const TABLE_HEADE_HEIGHT = 40;
const TABLE_BORDER_COLOR = '#868e96';
const title = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const [TABLE_ELEMENTS_WIDTH, TABLE_ELEMENTS_HEIGHT] = [
  tWidth / 7 - 3,
  (tHeight - TABLE_HEADE_HEIGHT) / title.length,
];
//#endregion
const Calendar = ({userSchedule, teacherSchedule}) => {
  const [temp, setTemp] = useState(
    teacherSchedule.map((row) => row.map((value) => value * 2)),
  );
  const [user, setUser] = useState(userSchedule);

  const onPress = (row, col) => (e) => {
    if (temp[row][col] === 2) {
      Alert.alert('선택불가능한 시간대 입니다.');
      return;
    }
    const [newTemp, newUser] = [[...temp], [...user]];
    newTemp[row][col] = (newTemp[row][col] + 1) % 2;
    newUser[row][col] = (newUser[row][col] + 1) % 2;
    setTemp(newTemp);
    setUser(newUser);
  };
  return (
    <View style={styles.container}>
      {temp.map((day, row) => (
        <View key={row} style={styles.elementContainer}>
          {day.map((time, col) => (
            <TouchableOpacity
              style={styles.btnTime(temp[row][col])}
              key={col}
              row={row}
              onPress={onPress(row, col)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnTime: (value) => ({
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    width: TABLE_ELEMENTS_WIDTH,
    height: TABLE_ELEMENTS_HEIGHT,
    borderColor: TABLE_BORDER_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      value === 1 ? '#ffa8a8' : value === 0 ? 'white' : '#adb5bd',
  }),
});

export default Calendar;
