import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const ClassInfo_TrainerInfo = ({navigation, info}) => {
  const onPress = () => {
    navigation.navigate('TeacherInfo', {
      teacherId: info.teacher_ID,
      title: info.teacher_Name,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>강사소개</Text>
      <View style={styles.contentsContainer}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.profileWrap}>
            <Image source={info.teacher_Image} style={styles.profileImage} />
          </View>
          <View style={styles.teacherWrap}>
            <Text style={styles.teacher}>트레이너</Text>
            <Text style={styles.teacherName}>{info.teacher_Name}</Text>
          </View>
        </View>
        <Text style={styles.teacherContent}>{info.teacher_Content}</Text>
        <TouchableOpacity style={styles.teacherInfoLinkWrap} onPress={onPress}>
          <Feather style={styles.teacherInfoLink} name="link" />
          <Text style={styles.teacherInfoLink}>트레이너 프로필 보기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#dee2e6',
    borderBottomWidth: 2,
  },
  title: {
    color: '#20c997',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '800',
    marginBottom: 15,
  },
  contentsContainer: {
    marginLeft: 20,
  },
  profileWrap: {
    borderWidth: 1,
    padding: 0.5,
    borderRadius: 100,
    borderColor: '#ced4da',
  },
  profileImage: {
    width: 126,
    height: 126,
    borderRadius: 63,
  },
  teacherWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teacher: {
    fontSize: 16,
    marginRight: 5,
    color: '#343a40',
    fontWeight: '600',
  },
  teacherName: {
    paddingTop: 18,
    paddingBottom: 18,
    fontWeight: '600',
    fontSize: 18,
    color: '#343a40',
  },
  teacherContent: {
    fontSize: 16,
    color: '#343a40',
  },
  teacherInfoLinkWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  teacherInfoLink: {
    color: '#4263eb',
    fontWeight: '700',
    marginRight: 3,
  },
});

export default ClassInfo_TrainerInfo;
