import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
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
const TABLE_BORDER_COLOR = '#dee2e6';
const day = ['월', '화', '수', '목', '금', '토', '일'];
const time = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const [TABLE_ELEMENTS_WIDTH, TABLE_ELEMENTS_HEIGHT] = [
  tWidth / 7 - 3,
  (tHeight - TABLE_HEADE_HEIGHT) / time.length,
];
//#endregion

const PaymentPresenter = ({navigation, schedule, classInfo}) => {
  const {userSchedule, teacherSchedule} = schedule;
  const [_userSchedule, _teacherSchedule] = [
    scheduleParser(userSchedule),
    scheduleParser(teacherSchedule).map((row) => row.map((value) => value * 2)),
  ];
  const [temp, setTemp] = useState(_teacherSchedule);
  const [user, setUser] = useState(_userSchedule);

  const onPress_navigate = () => {
    navigation.navigate('PaymentDetail', {
      userSchedule: user,
      userAndTeacherSchedule: temp,
      info: classInfo,
    });
  };

  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', bottom: 10}}>
        <View style={styles.nextButtonWrap}>
          <TouchableOpacity onPress={onPress_navigate}>
            <Text style={styles.txtNext}>시간 선택 완료</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.table}>
          <View style={styles.thead}>
            {day.map((val, key) => (
              <View key={key} style={styles.day}>
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
              navigation={navigation}
              userSchedule={_userSchedule}
              teacherSchedule={_teacherSchedule}
              classInfo={classInfo}
              user={user}
              setUser={setUser}
              temp={temp}
              setTemp={setTemp}
            />
          </View>
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

  nextButtonWrap: {
    alignItems: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
  },
  txtNext: {
    color: '#4263eb',
    fontWeight: 'bold',
  },

  table: {
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
  },
  timeContaioner: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: TABLE_BORDER_COLOR,
    width: 20,
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
