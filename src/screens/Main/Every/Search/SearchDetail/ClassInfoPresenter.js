import React, {useState} from 'react';
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
import ClassInfo_Consulting from '../../../../../components/ClassInfo_Consulting';
import ClassInfo_RefundPolicy from '../../../../../components/ClassInfo_RefundPolicy';

const {height, width} = Dimensions.get('window');

const ClassInfoPresenter = ({navigation, classInfo}) => {
  const [scrollY, setScrollY] = useState(0);
  const [positions, setPositions] = useState(0);
  const {teacher_Info, class_Info, review_List} = classInfo;

  const onPress = () => {
    navigation.navigate('Payment', {
      info: classInfo,
    });
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      ref={(scroller) => setScrollY(scroller)}>
      <View style={{zIndex: 1}}>
        <Image source={class_Info.class_Image} style={styles.profile} />
        <TouchableOpacity style={styles.btnApply} onPress={onPress}>
          <Text style={styles.txtapply}>수강신청하기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textGroup}>
        <View style={styles.textBox}>
          <Text>인기트레이너</Text>
        </View>
        <View style={styles.textBox}>
          <Text>여성</Text>
        </View>
        <View style={styles.textBox}>
          <Text>모집중</Text>
        </View>
      </View>
      <View style={styles.pricePolicyContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.pricePolicyText}>수강료 : </Text>
          <Text style={styles.pricePolicy}>{class_Info.class_Price}P</Text>
        </View>
      </View>
      <View style={styles.srcollToGroup}>
        <TouchableOpacity
          style={styles.srcollToButton}
          onPress={() => {
            scrollY.scrollTo({x: 0, y: 900, animatied: true});
          }}>
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
        <ClassInfo_TrainerInfo navigation={navigation} info={teacher_Info} />
        <ClassInfo_Curriculum info={class_Info} />
        <ClassInfo_Review info={review_List} />
        <ClassInfo_Consulting info={teacher_Info} />
        <ClassInfo_RefundPolicy />
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textGroup: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 30,
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
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  pricePolicyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#343a40',
  },
  pricePolicy: {
    fontSize: 23,
    fontWeight: '600',
    color: '#343a40',
  },
  srcollToGroup: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 2,
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
  btnApply: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#38d9a9',
    borderWidth: 2,
    borderColor: 'white',
    height: 40,
    width: 150,
    transform: [{translateY: 20}],
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width / 2 - 75,
  },
  txtapply: {
    color: 'white',
    fontWeight: '900',
    fontSize: 16,
  },
});
export default ClassInfoPresenter;
