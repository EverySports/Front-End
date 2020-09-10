import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

//#region Def constant
const {width, height} = Dimensions.get('window');
const [tWidth, tHeight] = [(width * 0.95) / 1.05, (height * 0.75) / 1.3];
const TABLE_HEADE_HEIGHT = 30;
const TABLE_BORDER_COLOR = '#e9ecef';
const day = ['월', '화', '수', '목', '금', '토', '일'];
const time = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const [TABLE_ELEMENTS_WIDTH, TABLE_ELEMENTS_HEIGHT] = [
  tWidth / 7 - 3,
  (tHeight - TABLE_HEADE_HEIGHT) / time.length,
];
//#endregion

const USER_COLOR = '#74c0fc';
const TEACHER_COLOR = '#adb5bd';

const SimpleCalendar = ({schedule}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>트레이닝 시간표를 다시 확인해 주세요</Text>
      <View style={styles.guideContainer}>
        <View style={styles.colorsGuide}>
          <View style={styles.colors(USER_COLOR)} />
          <Text> : 선택 된 시간{'        '} </Text>
        </View>
        <View style={styles.colorsGuide}>
          <View style={styles.colors(TEACHER_COLOR)} />
          <Text> : 선택 불가능 시간</Text>
        </View>
      </View>
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
          {schedule.map((row, index) => (
            <View key={index}>
              {row.map((col, _index) => (
                <View key={_index} style={styles.timeElement(col)}></View>
              ))}
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
    backgroundColor: 'white',
  },
  txtTitle: {
    fontWeight: '600',
    fontSize: 16,
    paddingBottom: 10,
  },
  guideContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  colorsGuide: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  colors: (color) => ({
    backgroundColor: color,
    width: 20,
    height: 20,
    borderRadius: 4,
  }),

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

  tableComponentsContaioner: {
    flexDirection: 'row',
  },
  timeElement: (col) => ({
    width: TABLE_ELEMENTS_WIDTH,
    height: TABLE_ELEMENTS_HEIGHT,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: TABLE_BORDER_COLOR,
    backgroundColor:
      col === 2 ? TEACHER_COLOR : col === 1 ? USER_COLOR : 'white',
  }),
});

export default SimpleCalendar;
