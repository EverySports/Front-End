import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

// key = {listItem.class_ID}
// name = {listItem.class_Name}
// num  = {listItem.class_Num}
// img = {listItem.class_Image}
// price = {listItem.class_Price}
// teacher_Gender = {listItem.teacher_Gender}

const PtClassComponent = ({navigation, ...props}) => {
  const onPress = () => {
    navigation.navigate('ClassInfo', {
      title: props.name,
      info: props,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Image source={props.img} style={styles.images} />
        <View style={styles.textgroup}>
          <View style={styles.stextBox}>
            <Text>{props.teacher_Gender}성 트레이너</Text>
          </View>
        </View>
        <Text style={styles.ltextBox}>{props.name}</Text>
      </View>
      <View style={{padding: 5}}>
        <Text style={(styles.ltextBox, {fontSize: 13})}>
          누적 수강생 수 : {props.num}명
        </Text>
        <Text style={(styles.ltextBox, {fontSize: 22, fontWeight: '600'})}>
          {props.price}P
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: width / 2 - 20,
    height: height / 2.7,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#dee2e6',
  },
  images: {
    width: width / 2 - 22,
    height: height / 4.5,
    marginBottom: 5,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
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
    alignItems: 'center',
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

/* 
  REVIEW STAR
  <View style={styles.reviewGroup}>
    <FontAwesome name="star" style={styles.reviewStar} />
    <FontAwesome name="star" style={styles.reviewStar} />
    <FontAwesome name="star" style={styles.reviewStar} />
    <FontAwesome name="star" style={styles.reviewStar} />
    <FontAwesome name="star-half" style={styles.reviewStar} />
    <Text style={styles.reviewCount}>(1,234)</Text>
  </View> 
*/

export default PtClassComponent;
