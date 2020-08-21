import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');
const colors = ['#007991', '#78ffd6'];

const AISports = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('AISports', {
      title: 'AI 트레이닝',
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Entypo style={styles.icon} name="grid" />
        <Text style={styles.txtContainerHeader}>AI 트레이닝 시작하기</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={colors}
          style={styles.btnMore}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <Text style={styles.txtAI}>AI 트레이닝 시작하기</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    // borderBottomWidth: 5,
    // borderColor: '#e9ecef',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
    paddingLeft: 20,
    marginBottom: 10,
  },
  icon: {
    color: '#2F80ED',
    fontSize: 18,
  },
  txtContainerHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F80ED',

    marginLeft: 5,
  },
  btnMore: {
    width: width - 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  txtAI: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    paddingVertical: 10,
  },
});

export default AISports;
