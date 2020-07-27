import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Category = ({img, name, navigation}) => {
  const onPress = () => {
    navigation.navigate('Search', {
      name: name,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={img} style={styles.ImgBlock} />
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
