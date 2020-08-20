import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Moment from 'moment';

const {width, height} = Dimensions.get('window');
const HEADER_HEIGHT = height / 2;
const backgroundGradientColors = ['#2F80ED', '#56CCF2', '#fff'];
const day = ['월', '화', '수', '목', '금', '토', '일'];

const SportsPresenter = ({navigation, schedule}) => {
  const date = Moment(new Date()).format('M월 D일');
  return (
    <View style={{backgroundColor: '#fff'}}>
      <LinearGradient colors={backgroundGradientColors} style={styles.header}>
        <SafeAreaView>
          <ScrollView>
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
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentsContainer}>
          <View
            style={{
              width: 300,
              height: 300,
              borderWidth: 1,
            }}>
            <Text>Scroll View</Text>
          </View>
          <View
            style={{
              width: 300,
              height: 300,
              borderWidth: 1,
            }}>
            <Text>Scroll View</Text>
          </View>
          <View
            style={{
              width: 300,
              height: 300,
              borderWidth: 1,
            }}>
            <Text>Scroll View</Text>
          </View>
          <View
            style={{
              width: 300,
              height: 300,
              borderWidth: 1,
            }}>
            <Text>Scroll View</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    height: height / 2,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    borderRadius: 10,
    width: 300,
    height: height / 4,
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

  ////////////////////////////////////
  contentsContainer: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: HEADER_HEIGHT,
    width: width,
    paddingTop: 15,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
});

export default SportsPresenter;
