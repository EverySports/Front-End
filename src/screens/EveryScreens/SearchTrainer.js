import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import SearchTrainerBox from '../common/SearchTrainerBox';

const {width, height} = Dimensions.get('window');

const SearchTrainer = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.sectionContainer}>
        <View style={styles.classBox}>
          <SearchTrainerBox />
        </View>
        <View style={styles.classBox}>
          <SearchTrainerBox />
        </View>
        <View style={styles.classBox}>
          <SearchTrainerBox />
        </View>
        <View style={styles.classBox}>
          <SearchTrainerBox />
        </View>
        <View style={styles.classBox}>
          <SearchTrainerBox />
        </View>
        <View style={styles.classBox}>
          <SearchTrainerBox />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {},
  sectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
