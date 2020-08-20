import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LivePT from '../../../components/SportsScreens/LivePT';
import MyCalendar from '../../../components/SportsScreens/MyCalendar';
import AIHomework from '../../../components/SportsScreens/AIHomework';
import AISports from '../../../components/SportsScreens/AISports';

const {width, height} = Dimensions.get('window');
const colors = ['#2F80ED', '#56CCF2', '#fff'];

const SportsPresenter = ({navigation, schedule}) => {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <LinearGradient colors={colors} style={styles.header} />
      <ScrollView>
        <SafeAreaView>
          <MyCalendar schedule={schedule} />
        </SafeAreaView>
        <ScrollView style={{marginTop: 0}}>
          <View style={styles.contentsContainer}>
            <LivePT navigation={navigation} />
            <AIHomework navigation={navigation} />
            <AISports navigation={navigation} />
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    height: (height * 2) / 4,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentsContainer: {
    width: width,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    marginTop: 20,
    paddingTop: 5,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    alignItems: 'center',
  },
});

export default SportsPresenter;
