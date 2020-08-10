import React from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import PtClassComponent from '../../../../components/PtClassComponent';

const {width, height} = Dimensions.get('window');

const SearchClassPresenter = ({navigation, classList}) => {
  return (
    <ScrollView>
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
  sectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});

export default SearchClassPresenter;
