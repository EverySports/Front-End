import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ClassInfo_Consulting = ({info}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>문의</Text>
      <View style={styles.contentsContainer}>
        <View style={styles.consultingContainer}>
          <Image source={info.teacher_Image} style={styles.profileImage} />
          <View style={styles.paperContainer}>
            <View style={styles.txtGroup}>
              <Text style={styles.txtTrainer}> 트레이너</Text>
              <Text style={styles.txtTeacherName}>{info.teacher_Name}</Text>
            </View>
            <TouchableOpacity style={styles.btnConsult}>
              <Text style={styles.txtConsult}>에브리스포츠 채팅 문의하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#f1f3f5',
    borderBottomWidth: 2,
  },
  title: {
    color: '#20c997',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  contentsContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  consultingContainer: {
    borderRadius: 8,
    flexDirection: 'row',
    borderColor: 'black',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: '#ffffff',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileImage: {
    width: 126,
    height: 126,
    borderRadius: 4,
  },
  paperContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-around',
    marginLeft: 20,
  },
  btnConsult: {
    borderRadius: 4,
    backgroundColor: '#38d9a9',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  txtGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  txtTeacherName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#343a40',
  },
  txtTrainer: {
    fontWeight: '600',
    color: '#343a40',
    marginRight: 10,
  },
  txtConsult: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 16,
  },
});

export default ClassInfo_Consulting;
