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
const TABLE_BORDER_COLOR = '#dee2e6';
const title = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const [TABLE_ELEMENTS_WIDTH, TABLE_ELEMENTS_HEIGHT] = [
  tWidth / 7 - 3,
  (tHeight - TABLE_HEADE_HEIGHT) / title.length,
];
//#endregion
const Calendar = ({navigation, userSchedule, teacherSchedule, classInfo}) => {
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

  const onPress_navigate = () => {
    navigation.navigate('PaymentDetail', {
      userSchedule: user,
      userAndTeacherSchedule: temp,
      info: classInfo,
    });
  };

  return (
    <>
      <TouchableOpacity style={styles.btnNext} onPress={onPress_navigate}>
        <Text style={styles.txtNext}>선택 완료</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        {temp.map((day, row) => (
          <View key={row} style={styles.elementContainer}>
            {day.map((time, col) => (
              <View style={styles.btnContainer} key={col}>
                <TouchableOpacity
                  style={styles.btnTime(temp[row][col])}
                  row={row}
                  onPress={onPress(row, col)}
                />
              </View>
            ))}
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },

  btnContainer: {
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    width: TABLE_ELEMENTS_WIDTH,
    height: TABLE_ELEMENTS_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: TABLE_BORDER_COLOR,
  },
  btnTime: (clicked) => ({
    width: TABLE_ELEMENTS_WIDTH,
    height: TABLE_ELEMENTS_HEIGHT - 0.5,
    backgroundColor:
      clicked === 1 ? '#ffa8a8' : clicked === 0 ? 'white' : '#adb5bd',
  }),
  btnNext: {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: [{translateY: -70}],
  },
  txtNext: {
    fontSize: 16,
    color: '#4263eb',
    fontWeight: '700',
  },
});

export default Calendar;
