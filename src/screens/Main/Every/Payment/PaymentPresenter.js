import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Calendar from '../../../../components/Calendar';

const scheduleParser = (input) => {
  const ans = [];
  const _schedule = input.split('').map((value) => parseInt(value, 10));
  for (var i = 0; i < 7; i++) {
    ans.push(_schedule.slice(i * 15, (i + 1) * 15));
  }
  return ans;
};
//#region Def constant
const {width, height} = Dimensions.get('window');
const [tWidth, tHeight] = [width * 0.95, height * 0.75];
const TABLE_HEADE_HEIGHT = 40;
const TABLE_BORDER_COLOR = '#868e96';
const day = ['월', '화', '수', '목', '금', '토', '일'];
const time = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const [TABLE_ELEMENTS_WIDTH, TABLE_ELEMENTS_HEIGHT] = [
  tWidth / 7 - 3,
  (tHeight - TABLE_HEADE_HEIGHT) / time.length,
];
//#endregion

const PaymentPresenter = ({schedule}) => {
  const {userSchedule, teacherSchedule} = schedule;

  const [_userSchedule, _teacherSchedule] = [
    scheduleParser(userSchedule),
    scheduleParser(teacherSchedule),
  ];

  return (
    <>
      <View style={styles.container}>
        <View style={styles.table}>
          <View style={styles.thead}>
            {day.map((val, idx) => (
              <View key={idx} style={styles.day}>
                <Text>{val}</Text>
              </View>
            ))}
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.timeContaioner}>
              {time.map((val, key) => (
                <View key={key} style={styles.time}>
                  <Text>{val}</Text>
                </View>
              ))}
            </View>
            <Calendar
              userSchedule={_userSchedule}
              teacherSchedule={_teacherSchedule}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  table: {
    marginTop: 100,
    borderWidth: 1,
    width: tWidth + 1,
    height: tHeight + 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: TABLE_BORDER_COLOR,
  },
  thead: {
    borderBottomWidth: 1,
    width: tWidth - 1,
    height: TABLE_HEADE_HEIGHT,
    borderColor: TABLE_BORDER_COLOR,
    flexDirection: 'row',
    paddingLeft: 20,
  },
  day: {
    justifyContent: 'center',
    alignItems: 'center',
    width: TABLE_ELEMENTS_WIDTH,
    height: TABLE_HEADE_HEIGHT - 1,
    borderColor: TABLE_BORDER_COLOR,
    // borderLeftWidth: 1,
  },
  timeContaioner: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: TABLE_BORDER_COLOR,
    width: 20,
    // transform: [{translateY: -1}],
  },
  time: {
    alignItems: 'center',
    height: TABLE_ELEMENTS_HEIGHT,
    paddingTop: 2,
  },
  element: {
    width: TABLE_ELEMENTS_WIDTH,
    height: TABLE_ELEMENTS_HEIGHT,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: TABLE_BORDER_COLOR,
  },
  tableComponentsContaioner: {
    flexDirection: 'row',
  },
});

export default PaymentPresenter;
