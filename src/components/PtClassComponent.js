import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const CONTAINER_HEIGHT = height / 2.7;

const PtClassComponent = ({navigation, ...props}) => {
  const onPress = () => {
    navigation.navigate('ClassInfo', {
      title: props.name,
      info: props,
    });
  };

  return (
    <TouchableOpacity style={{marginLeft: 13}} onPress={onPress}>
      <Image source={props.img} style={styles.imgProfile} />
      <View style={styles.classInfoContents}>
        <View style={styles.teacherGender}>
          <Text style={styles.txtTeacherGender}>
            {props.teacher_Gender}성 트레이너
          </Text>
        </View>
        <View style={styles.className}>
          <Text style={styles.txtClassName} numberOfLines={2}>
            {props.name}
          </Text>
        </View>
        <View style={styles.sunNum}>
          <Text style={{color: '#343a40'}}>누적 수강생 수 : {props.num}명</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.txtPrice}>{props.price}P</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imgProfile: {
    width: width / 2 - 20,
    height: CONTAINER_HEIGHT / 1.65,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  classInfoContents: {
    width: width / 2 - 20,
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

  teacherGender: {
    padding: 3,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f3f5',
    borderRadius: 10,
  },
  txtTeacherGender: {
    color: '#343a40',
    fontSize: 10,
    fontWeight: 'bold',
  },
  className: {
    width: width / 2 - 22,
    padding: 3,
    height: 40,
  },
  txtClassName: {
    color: '#343a40',
    fontWeight: 'bold',
  },
  sunNum: {
    padding: 5,
    width: width / 2 - 22,
  },
  price: {
    paddingLeft: 5,
    width: width / 2 - 22,
  },
  txtPrice: {
    color: '#343a40',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#ff6b6b',
  },
});

export default PtClassComponent;
