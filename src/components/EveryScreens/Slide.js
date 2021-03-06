import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import PtClass from './PtClass';

const Slide = ({headText, info}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          paddingLeft: 20,
        }}>
        <Text style={styles.headText}>{headText}</Text>
        <ScrollView
          style={styles.scrollContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {info.map((_info) => (
            <PtClass key={_info.class_ID} info={_info} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingTop: 10,
    backgroundColor: '#f1f3f5',
  },
  headText: {
    fontSize: 18,
    color: '#495057',
    paddingTop: 10,
    fontWeight: '700',
  },
  scrollContainer: {
    padding: 10,
    paddingRight: 0,
    flexDirection: 'row',
  },
});

export default Slide;
