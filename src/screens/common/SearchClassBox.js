import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import SG from '../../assets/img/sg.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const SearchClassBox = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('ClassInfo');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Image source={SG} style={styles.images} />
        <View style={styles.textgroup}>
          <View style={styles.stextBox}>
            <Text>월, 금</Text>
          </View>
          <View style={styles.stextBox}>
            <Text>11:00 ~ 12:00</Text>
          </View>
        </View>
        <Text style={styles.ltextBox}>슬기와 함께하는 2주 완성 필라테스</Text>
      </View>
      <View style={{padding: 5}}>
        <Text style={(styles.ltextBox, {fontSize: 13})}>
          누적 수강생 수 : 1000명
        </Text>
        <Text style={(styles.ltextBox, {fontSize: 22, fontWeight: '600'})}>
          월 66,000원
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
export default SearchClassBox;
