import React from 'react';
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native';

const {width} = Dimensions.get('window');

const TeacherInfo_ClassListItem = ({info}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imgClassImage} source={info.class_Image} />
      <View style={styles.classInfoContainer}>
        <Text style={styles.txtclassName}>{info.class_Name}</Text>
        <View>
          <Text style={styles.txtclassNum}>
            누적 수강생 수 : {info.class_Num}명
          </Text>
          <Text style={styles.txtclassPrice}>수강료 : {info.class_Price}P</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: width / 1.75,
    height: 250,
    marginRight: 20,
    borderRadius: 4,
    borderColor: '#ced4da',
  },
  imgClassImage: {
    width: width / 1.75 - 2,
    height: 150,
    borderRadius: 2,
  },
  classInfoContainer: {
    justifyContent: 'space-between',
    height: 100,
    paddingBottom: 5,
  },
  txtclassName: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 16,
    color: '#343a40',
    fontWeight: 'bold',
  },
  txtclassNum: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 14,
    color: '#343a40',
  },
  txtclassPrice: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 14,
    color: '#f03e3e',
    fontWeight: 'bold',
  },
});

export default TeacherInfo_ClassListItem;
