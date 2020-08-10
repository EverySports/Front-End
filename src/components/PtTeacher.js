import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const CONTAINER_WIDTH = width / 2 - 20;
const CONTAINER_HEIGHT = height / 2.7;
const PtTeacher = ({navigation, ...props}) => {
  const onPress = () => {
    navigation.navigate('TeacherInfo', {
      title: props.name,
      info: props,
    });
  };
  const {name, sumnum, img} = props;
  return (
    <TouchableOpacity style={{marginLeft: 13}} onPress={onPress}>
      <Image source={img} style={styles.imgProfile} />
      <View style={styles.classInfoContents}>
        <View style={styles.teacherName}>
          <Text style={styles.txtTeacherName}>{name} 트레이너</Text>
        </View>
        <View style={styles.contents}>
          <Text style={{}}>에브리스포츠</Text>
        </View>
        <View style={styles.contents}>
          <Text style={styles.txtSumNum}>보유 회원 수 : {sumnum}명</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: CONTAINER_WIDTH,
    height: CONTAINER_HEIGHT,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    borderRadius: 4,
    borderColor: '#dee2e6',
  },
  imgProfile: {
    width: CONTAINER_WIDTH,
    height: CONTAINER_HEIGHT / 1.65,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  classInfoContents: {
    width: CONTAINER_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    padding: 5,
    borderColor: '#adb5bd',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderTopWidth: 0,
  },

  teacherName: {
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  txtTeacherName: {
    color: '#343a40',
    fontSize: 14,
    fontWeight: 'bold',
  },
  contents: {
    width: CONTAINER_WIDTH,
    marginBottom: 3,
    paddingLeft: 5,
    paddingTop: 3,
  },
  txtSumNum: {
    color: '#495057',
    fontWeight: 'bold',
  },
});
export default PtTeacher;
