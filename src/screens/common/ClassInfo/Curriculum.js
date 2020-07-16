import React from 'react';
import SGProfile from '../../../assets/img/classProfile.png';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';

const {width} = Dimensions.get('window');

const Curriculum = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>커리큘럼</Text>
      <View style={styles.contentsContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#dee2e6',
    borderRadius: 4,
  },
  title: {
    color: '#20c997',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '800',
    marginBottom: 15,
  },
  contentsContainer: {
    marginLeft: 20,
  },
});
export default Curriculum;
