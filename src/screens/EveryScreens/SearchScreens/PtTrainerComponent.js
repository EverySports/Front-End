import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Irin from '../../../assets/img/irin.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const PtTrainerComponent = ({navigate}) => {
  const onPress = () => {
    // navigate.navigate('ClassInfo');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Image source={Irin} style={styles.images} />
        <View style={styles.textgroup}>
          <View style={styles.stextBox}>
            <Text>아이린 선생님</Text>
          </View>
          <View style={styles.stextBox}>
            <Text>3년차 강사</Text>
          </View>
        </View>
        <Text style={styles.ltextBox}>에브리스포츠</Text>
      </View>
      <View style={{padding: 5}}>
        <Text style={(styles.ltextBox, {fontSize: 13})}>
          누적 수강생 수 : 1000명
        </Text>

        <View style={styles.reviewGroup}>
          <FontAwesome name="star" style={styles.reviewStar} />
          <FontAwesome name="star" style={styles.reviewStar} />
          <FontAwesome name="star" style={styles.reviewStar} />
          <FontAwesome name="star" style={styles.reviewStar} />
          <FontAwesome name="star-half" style={styles.reviewStar} />
          <Text style={styles.reviewCount}>(1,234)</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
export default PtTrainerComponent;
