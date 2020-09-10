import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ClassInfo_Curriculum = ({info}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>커리큘럼</Text>
      <View style={styles.contentsContainer}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 250,
            width: 370,
            borderWidth: 1,
            borderRadius: 4,
            marginBottom: 10,
          }}>
          <Text>Curriculum Image 1</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 250,
            width: 370,
            borderWidth: 1,
            borderRadius: 4,
            marginBottom: 10,
          }}>
          <Text>Curriculum Image 2</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 250,
            width: 370,
            borderWidth: 1,
            borderRadius: 4,
            marginBottom: 10,
          }}>
          <Text>Curriculum Image 3</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#f1f3f5',
    borderBottomWidth: 1,
  },
  title: {
    color: '#20c997',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  contentsContainer: {
    marginLeft: 20,
  },
});

export default ClassInfo_Curriculum;
