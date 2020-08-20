import React from 'react';
import {StyleSheet, View, Text, ScrollView, Dimensions} from 'react-native';
import Moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');
const day = ['월', '화', '수', '목', '금', '토', '일'];

const MyCalendar = ({schedule}) => {
  const date = Moment(new Date()).format('M월 D일');

  return (
    <View>
      <View style={styles.title}>
        <AntDesign name="calendar" style={styles.icon} />
        <Text style={styles.txtContainerHeader}>나의 운동 일정</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.calendarContainer}>
        {day.map((day, key) => (
          <View key={key} style={styles.calendar}>
            <View style={styles.calendarTitle}>
              <Text style={styles.txtDate}>{day}</Text>
              <Text style={styles.txtDate}>{date}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: 18,
  },

  txtContainerHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    marginLeft: 5,
    marginTop: 10,
  },
  calendarContainer: {
    paddingLeft: 10,
  },
  calendar: {
    borderRadius: 5,
    width: 300,
    height: height / 7,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 5,
    elevation: 5,
  },

  calendarTitle: {
    width: 280,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  txtDate: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#2F80ED',
  },
});

export default MyCalendar;
