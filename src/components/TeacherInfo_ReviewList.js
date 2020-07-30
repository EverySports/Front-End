import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import TeacherInfo_ReviewItem from './TeacherInfo_ReviewItem';
const TeacherInfo_ReviewList = ({info}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>강사 후기</Text>
      <View style={styles.contentsContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {info.map((li) => (
            <TeacherInfo_ReviewItem key={li.user_ID} info={li} />
          ))}
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
    fontWeight: '800',
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
export default TeacherInfo_ReviewList;
