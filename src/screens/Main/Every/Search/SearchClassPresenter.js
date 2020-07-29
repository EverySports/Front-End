import React from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import PtClassComponent from '../../../../components/PtClassComponent';

const {width, height} = Dimensions.get('window');

const SearchClassPresenter = ({navigation, classList}) => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.sectionContainer}>
        {classList.map((listItem) => (
          <PtClassComponent
            key={listItem.class_ID}
            id={listItem.class_ID}
            name={listItem.class_Name}
            num={listItem.class_Num}
            img={listItem.class_Image}
            price={listItem.class_Price}
            teacher_Gender={listItem.teacher_Gender}
            navigation={navigation}
          />
        ))}
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
    height: height / 2.7,
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

export default SearchClassPresenter;
