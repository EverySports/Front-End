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

const PtTeacher = ({navigation, ...props}) => {
  const onPress = () => {
    navigation.navigate('TeacherInfo', {
      title: props.name,
      info: props,
    });
  };
  const {name, sumnum, img} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Image source={img} style={styles.images} />
        <View style={styles.textgroup}>
          <View style={styles.stextBox}>
            <Text>{name} 트레이너</Text>
          </View>
        </View>
        <Text style={styles.ltextBox}>에브리스포츠</Text>
      </View>
      <View style={{padding: 5}}>
        <Text style={(styles.ltextBox, {fontSize: 13})}>
          누적 수강생 수 : {sumnum}명
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: height / 3,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#dee2e6',
    justifyContent: 'space-between',
  },
  images: {
    width: width / 2 - 22,
    height: height / 4.5,
    marginBottom: 5,
  },
  textgroup: {
    flexDirection: 'row',
    paddingLeft: 5,
    justifyContent: 'center',
  },
  stextBox: {
    padding: 3,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f3f5',
    borderRadius: 10,
  },
  ltextBox: {
    padding: 3,
    fontSize: 16,
  },
  reviewGroup: {
    flexDirection: 'row',
  },
  reviewStar: {
    color: '#e67700',
  },
  reviewCount: {
    marginLeft: 5,
    fontSize: 14,
    color: '#495057',
  },
});
export default PtTeacher;
