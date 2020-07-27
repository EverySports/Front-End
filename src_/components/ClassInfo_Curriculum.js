import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ClassInfo_Curriculum = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>커리큘럼</Text>
      <View style={styles.contentsContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#dee2e6',
    borderBottomWidth: 1,
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

export default ClassInfo_Curriculum;
