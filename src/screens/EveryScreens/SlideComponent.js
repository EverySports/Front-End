import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import PtClassComponent from './PtClassComponent';

const SlideComponent = ({headText, info}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>{headText}</Text>
      <ScrollView
        style={styles.scrollContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {info.map((_info) => (
          <PtClassComponent
            key={_info.id}
            name={_info.name}
            trainer={_info.trainer}
            startDate={_info.startDate}
            endDate={_info.endDate}
            price={_info.price}
            imgSrc={_info.imgSrc}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingLeft: 20,
  },
  headText: {
    fontSize: 18,
    color: '#495057',
    fontWeight: '700',
  },
  scrollContainer: {
    padding: 10,
    paddingRight: 0,
    flexDirection: 'row',
  },
});

export default SlideComponent;
