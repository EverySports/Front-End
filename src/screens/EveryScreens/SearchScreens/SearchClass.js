import React from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import PtClassComponent from './PtClassComponent';

const {width, height} = Dimensions.get('window');

//요가 클릭 -> 요가 리스트 출력 -> 요가 컴포넌트 클릭 -> 클릭한 요가컴포넌트에 대한 디테일 제공

const SearchClass = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.sectionContainer}>
        <View style={styles.classBox}>
          <PtClassComponent navigation={navigation} />
        </View>
        <View style={styles.classBox}>
          <PtClassComponent navigation={navigation} />
        </View>
        <View style={styles.classBox}>
          <PtClassComponent navigation={navigation} />
        </View>
        <View style={styles.classBox}>
          <PtClassComponent navigation={navigation} />
        </View>
        <View style={styles.classBox}>
          <PtClassComponent navigation={navigation} />
        </View>
      </View>
      <View style={{height: 50}}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {},
  sectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  classBox: {
    width: width / 2 - 20,
    height: height / 2.5,
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

export default SearchClass;
