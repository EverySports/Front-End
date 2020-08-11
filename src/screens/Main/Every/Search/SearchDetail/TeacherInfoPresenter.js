import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, Dimensions, Image, Animated} from 'react-native';
import TeacherInfo_About from '../../../../../components/TeacherInfo_About';
import TeacherInfo_ClassList from '../../../../../components/TeacherInfo_ClassList';
import TeacherInfo_ReviewList from '../../../../../components/TeacherInfo_ReviewList';

const {width, height} = Dimensions.get('window');

const TeacherInfoPresenter = ({navigation, route, info}) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <>
      <Image style={styles.imageBackground} source={info.teacher_Image} />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        // onScroll={Animated.event(
        //   [{nativeEvent: {contentOffset: {y: scrollY}}}],
        //   {useNativeDriver: true},
        // )}
        // scrollEventThrottle={16}
      >
        <View style={styles.contentsContainer}>
          <View style={styles.topTabBar}></View>
          <View>
            <TeacherInfo_About info={info} />
            <TeacherInfo_ClassList
              navigation={navigation}
              info={info.class_list}
            />
            <TeacherInfo_ReviewList info={info.review_list} />
          </View>
        </View>
      </Animated.ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    position: 'absolute',
    width: width,
    height: height,
    flex: 1,
  },

  headerContents: {
    position: 'absolute',
    bottom: 5,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentsContainer: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: (height * 2) / 4,
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
  topTabBar: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#fa5252',
    width: 150,
    height: 10,
    marginLeft: width / 2 - 75,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  teacherNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  txtTeacher: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343a40',
    marginLeft: 15,
  },
  txtTeacherName: {
    marginLeft: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#343a40',
  },
  teacherContentContainer: {
    padding: 10,
  },
  txtContent: {
    fontSize: 16,
  },
});

export default TeacherInfoPresenter;
