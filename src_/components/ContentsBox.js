import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ContentsBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>강사소개</Text>
      <View style={styles.contentsContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
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

export default ContentsBox;
