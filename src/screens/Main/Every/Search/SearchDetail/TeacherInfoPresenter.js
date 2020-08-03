import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  ImageBackground,
  Animated,
  Text,
  TouchableOpacity,
} from 'react-native';
import TeacherInfo_About from '../../../../../components/TeacherInfo_About';
import TeacherInfo_ClassList from '../../../../../components/TeacherInfo_ClassList';
import TeacherInfo_ReviewList from '../../../../../components/TeacherInfo_ReviewList';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('window');
const MAX = 500;
const TeacherInfoPresenter = ({navigation, route, info}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const onPress = () => {
    navigation.goBack();
  };

  return (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={info.teacher_Image}></ImageBackground>

      <TouchableOpacity style={styles.btnGoBack} onPress={onPress}>
        <Ionicons style={styles.iconGoBack} name="md-chevron-back" />
      </TouchableOpacity>
      <Animated.View style={styles.headerContainer(scrollY)}>
        <View style={styles.headerContents}>
          <Text style={styles.txtTitle}>{route.params.info.name}</Text>
        </View>
      </Animated.View>

      <Animated.ScrollView
        style={styles.scrollConatiner}
        overScrollMode="never"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}>
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
  headerContainer: (scrollY) => ({
    width: width,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#dee2e6',
    opacity: scrollY.interpolate({
      inputRange: [0, 100, 200, 300, 400],
      outputRange: [0, 0.625, 0.75, 0.875, 1],
      extrapolate: 'clamp',
    }),
    zIndex: 0,
  }),
  headerContents: {
    position: 'absolute',
    bottom: 5,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnGoBack: {
    position: 'absolute',
    top: 45,
    left: 5,
    zIndex: 9,
  },
  iconGoBack: {
    fontSize: 32,
  },
  txtTitle: {
    fontSize: 16,
    fontWeight: '700',
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
    fontWeight: '600',
    color: '#343a40',
    marginLeft: 15,
  },
  txtTeacherName: {
    marginLeft: 10,
    fontSize: 22,
    fontWeight: '700',
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
