import React from 'react';
import {StyleSheet, View, Text, ScrollView, Dimensions} from 'react-native';
import PtTeacher from '../../../../components/PtTeacher';

const {width, height} = Dimensions.get('window');

const SearchTeacherPresenter = ({navigation, teacherList}) => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.sectionContainer}>
        {teacherList.map((teacher) => (
          <View style={styles.classBox}>
            <PtTeacher
              key={teacher.teacher_ID}
              name={teacher.teacher_Name}
              sumnum={teacher.class_SumNum}
              price={teacher.class_Price}
              img={teacher.teacher_Image}
              navigation={navigation}
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
  classBox: {
    width: width / 2 - 20,
    height: height / 3,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#dee2e6',
  },
  boxContainer: {
    width: width / 2 - 20,
    height: height / 2.5,

    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    borderWidth: 1,
    backgroundColor: 'gold',
  },
});
