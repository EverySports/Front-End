import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import SGProfile from '../../assets/img/classProfile.png';
import TrainerIntro from '../common/ClassInfo/TrainerIntro';
import Curriculum from '../common/ClassInfo/Curriculum';

const {height, width} = Dimensions.get('window');
//         style={styles.   }
const ClassInfo = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <Image source={SGProfile} style={styles.profile} />
      <View style={styles.textGroup}>
        <View style={styles.textBox}>
          <Text>월요일, 금요일</Text>
        </View>
        <View style={styles.textBox}>
          <Text>11:00 ~ 12:00</Text>
        </View>
        <View style={styles.textBox}>
          <Text>여성</Text>
        </View>
      </View>
      <View style={styles.pricePolicyContainer}>
        <Text style={styles.pricePolicyText}>수강료 : </Text>
        <Text style={styles.pricePolicy}>월 66,000원</Text>
      </View>
      <View style={styles.srcollToGroup}>
        <TouchableOpacity style={styles.srcollToButton}>
          <Text style={styles.srcollToButtonText}>강사소개</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.srcollToButton}>
          <Text style={styles.srcollToButtonText}>커리큘럼</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.srcollToButton}>
          <Text style={styles.srcollToButtonText}>후기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.srcollToButton}>
          <Text style={styles.srcollToButtonText}>문의</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.srcollToButton}>
          <Text style={styles.srcollToButtonText}>환불정책</Text>
        </TouchableOpacity>
      </View>
      <TrainerIntro />
      <Curriculum />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  profile: {
    width: width,
    height: height / 3,
    opacity: 0.9,
    marginBottom: 10,
  },
  textGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  textBox: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f3f5',
    borderRadius: 4,
  },
  pricePolicyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 10,
  },
  pricePolicyText: {
    fontSize: 18,
    fontWeight: '700',
  },
  pricePolicy: {
    fontSize: 22,
    fontWeight: '700',
  },
  srcollToGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  srcollToButton: {
    backgroundColor: '#38d9a9',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 4,
  },
  srcollToButtonText: {
    color: '#ffffff',
    fontWeight: '900',
  },
});
export default ClassInfo;
