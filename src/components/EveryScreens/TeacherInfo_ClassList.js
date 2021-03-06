import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import TeacherInfo_ClassListItem from './TeacherInfo_ClassListItem';

const TeaherInfo_TeacherHasNotAnotherClass = () => {
  return (
    <View>
      <Text>트레이너님이 에브리스포츠 클래스는 아직 준비되어있지 않아요 !</Text>
    </View>
  );
};

const TeacherInfo_ClassList = ({info}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>개설 클래스</Text>
      <View style={styles.contentsContainer}>
        {/* <TeaherInfo_TeacherHasNotAnotherClass /> */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.teacherNameContainer}>
            {info.map((li) => (
              <TeacherInfo_ClassListItem key={li.class_ID} info={li} />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderColor: '#dee2e6',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    color: '#ff6b6b',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  contentsContainer: {},
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
export default TeacherInfo_ClassList;
