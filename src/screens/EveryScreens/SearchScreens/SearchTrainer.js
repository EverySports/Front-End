import React from 'react';
import {StyleSheet, View, Text, ScrollView, Dimensions} from 'react-native';
import PtTrainerComponent from './PtTrainerComponent';

const {width, height} = Dimensions.get('window');

const SearchTrainer = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.sectionContainer}>
        <View style={styles.classBox}>
          <PtTrainerComponent />
        </View>
        <View style={styles.classBox}>
          <PtTrainerComponent />
        </View>
        <View style={styles.classBox}>
          <PtTrainerComponent />
        </View>
        <View style={styles.classBox}>
          <PtTrainerComponent />
        </View>
        <View style={styles.classBox}>
          <PtTrainerComponent />
        </View>
      </View>
      <View style={{height: 50}}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {},
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  classBox: {
    width: width / 2 - 20,
    height: height / 3,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#dee2e6',
  },
  boxContainer: {
    width: width / 2 - 20,
    height: height / 2.5,

    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    borderWidth: 1,
    backgroundColor: 'gold',
  },
});

export default SearchTrainer;
