import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
//#region Image import
import yoga from '../assets/img/yoga.png';
import pilates from '../assets/img/pilates2.png';
import health from '../assets/img/health.png';
import diet from '../assets/img/diet.png';
//#endregion

const {width, height} = Dimensions.get('window');
const category = ['요가', '필라테스', '헬스', '다이어트'];
const categoryImage = [yoga, pilates, health, diet];

const Category = ({name, navigation}) => {
  const sourceImage = categoryImage[category.indexOf(name)];

  const onPress = () => {
    navigation.navigate('Search', {title: name});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={sourceImage} style={styles.ImgBlock} />
      <View style={styles.textBox}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: height / 4.5 - 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImgBlock: {
    borderRadius: 10,
    opacity: 0.85,
    borderRadius: 4,
    justifyContent: 'flex-end',
    width: width / 2 - 20,
    height: height / 4.5 - 20,
  },
  textBox: {
    width: width / 2 - 20,
    position: 'absolute',
    bottom: 0,
    height: 30,
    backgroundColor: 'white',
    opacity: 0.75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '900',
    fontSize: 16,
    color: '#000000',
  },
});

export default Category;
