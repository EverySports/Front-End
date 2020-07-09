import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const ImgBox = ({img, name, navigation}) => {
  const onPress = () => {
    console.log(name);
    //navigation.navigate('Search');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground source={img} style={styles.ImgBlock}>
        <View style={styles.textBox}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    height: height / 4.5,
  },
  ImgBlock: {
    opacity: 0.85,
    borderRadius: 4,
    justifyContent: 'flex-end',
    width: width / 2,
    height: height / 4.5,
  },
  textBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    backgroundColor: 'white',
    opacity: 0.75,
  },
  text: {
    fontWeight: '900',
    fontSize: 16,
    color: '#000000',
  },
});

export default ImgBox;
