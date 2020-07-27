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
import ClassInfo_TrainerInfo from '../../../../../components/ClassInfo_TrainerInfo';
import ClassInfo_Curriculum from '../../../../../components/ClassInfo_Curriculum';
import ClassInfo_Review from '../../../../../components/ClassInfo_Review';

const {height, width} = Dimensions.get('window');

const ClassInfoPresenter = ({classInfo}) => {
  const {teacher_Info, class_Info, review_List} = classInfo;

  return (
    <ScrollView style={styles.scrollContainer}>
      <Image source={class_Info.class_Image} style={styles.profile} />
      <View style={styles.textGroup}>
        <View style={styles.textBox}>
          <Text>무언갈</Text>
        </View>
        <View style={styles.textBox}>
          <Text>보여주면</Text>
        </View>
        <View style={styles.textBox}>
          <Text>죠을거같다</Text>
        </View>
      </View>
      <View style={styles.pricePolicyContainer}>
        <Text style={styles.pricePolicyText}>수강료 : </Text>
        <Text style={styles.pricePolicy}>66000P</Text>
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
      <View style={styles.contentsContioner}>
        <ClassInfo_TrainerInfo info={teacher_Info} />
        <ClassInfo_Curriculum info={class_Info} />
        <ClassInfo_Review info={review_List} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    // backgroundColor: '#ffffff',
  },
  profile: {
    width: width,
    height: height / 3,
    opacity: 0.9,
  },
  textGroup: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
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
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  pricePolicyText: {
    fontSize: 18,
    fontWeight: '500',
  },
  pricePolicy: {
    fontSize: 22,
    fontWeight: '600',
  },
  srcollToGroup: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#dee2e6',
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
  contentsContioner: {
    backgroundColor: 'white',
  },
});
export default ClassInfoPresenter;
