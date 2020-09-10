import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
const TeacherInfo_About = ({info}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>강사소개</Text>
      <View style={styles.contentsContainer}>
        <View style={styles.teacherAboutTitleContainer}>
          <View>
            <Text style={styles.txtTeacher}>트레이너</Text>
            <Text style={styles.txtTeacherName}>{info.teacher_Name}</Text>
          </View>
          <Image style={styles.imgTeacherImage} source={info.teacher_Image} />
        </View>
        <View style={styles.teacherContentContainer}>
          <Text style={styles.txtContent}>{info.teacher_Content}</Text>
        </View>
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

  imgTeacherImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  teacherAboutTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  txtTeacher: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343a40',
    marginLeft: 15,
    paddingBottom: 10,
  },
  txtTeacherName: {
    marginLeft: 50,
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
export default TeacherInfo_About;
