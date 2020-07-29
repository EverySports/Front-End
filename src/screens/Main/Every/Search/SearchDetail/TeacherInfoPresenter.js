import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');

const TeacherInfoPresenter = ({navigation, info}) => {
  const colors = ['#BBD2C5', '#536976', '#292E49'];
  return (
    <ScrollView style={styles.scrollviewContainer}>
      <LinearGradient colors={colors} style={styles.headerContainer}>
        <Image style={styles.teacherImage} source={info.teacher_Image} />
        <Text style={styles.txtTeacherName}>{info.teacher_Name}</Text>
      </LinearGradient>
      <View></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollviewContainer: {
    flex: 1,
  },
  headerContainer: {
    height: height / 2,
    paddingLeft: 20,
    paddingTop: 20,
  },
  teacherImage: {
    marginTop: Platform.os === 'ios' ? 60 : 80,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  txtTeacherName: {
    color: 'white',
    fontSize: 26,
    fontWeight: '800',
  },
});

export default TeacherInfoPresenter;
