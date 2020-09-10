import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import PtTeacher from '../../../../components/EveryScreens/PtTeacher';

const SearchTeacherPresenter = ({navigation, teacherList, currentCategory}) => {
  return (
    <ScrollView>
      <View style={styles.sectionContainer}>
        {teacherList.map((teacher) => (
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
        ))}
      </View>
      <View style={{height: 50}}></View>
    </ScrollView>
  );
};

export default SearchTeacherPresenter;

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});
