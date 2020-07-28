import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const ClassInfo_RefundPolicy = ({info}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>환불정책</Text>
      <View style={styles.contentsContainer}>
        <Text>EverySports 환불 정책 안내</Text>
        <Text>
          "Hey, I was doing just fine before I met you I drink too much and
          that's an issue but I'm okay Hey, you tell your friends it was nice to
          meet them But I hope I never see them again",{' '}
        </Text>
      </View>
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
    marginRight: 20,
  },
});

export default ClassInfo_RefundPolicy;
