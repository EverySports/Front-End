import React from 'react';
import {StyleSheet, View, Text, ScrollView, Dimensions} from 'react-native';
import PtTeacher from '../../../../components/PtTeacher';

const {width, height} = Dimensions.get('window');

const SearchTeacherPresenter = ({navigation, teacherList, currentCategory}) => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.sectionContainer}>
        {teacherList.map((teacher) => (
          <View style={styles.classBox}>
            <PtTeacher
              key={teacher.teacher_ID}
              id={teacher.teacher_ID}
              name={teacher.teacher_Name}
              sumnum={teacher.class_SumNum}
              price={teacher.class_Price}
              img={teacher.teacher_Image}
              navigation={navigation}
              category={currentCategory}
            />
          </View>
        ))}
      </View>
      <View style={{height: 50}}></View>
    </ScrollView>
  );
};

export default SearchTeacherPresenter;

const styles = StyleSheet.create({
  scrollContainer: {},
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  classBox: {},
});
