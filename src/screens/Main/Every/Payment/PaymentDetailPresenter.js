import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import Calendar from '../../../../assets/img/calender.png';
import EverySports from '../../../../assets/img/EverySports.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');

const CalenderConfirmPopup = () => {
  return;
};

const PaymentDetailPresenter = ({userSchedule, info}) => {
  const {class_Info, teacher_Info} = info;
  return (
    <View style={styles.container}>
      <View style={styles.classInfoContainer}>
        <Text style={styles.txtClassInfoTitle}>신청 클래스 정보</Text>
        <View style={styles.classInfo}>
          <Image source={class_Info.class_Image} style={styles.imgClassImage} />
          <View style={styles.classInfoTextContainer}>
            <Text style={styles.txtClassInfo}>{class_Info.class_Name}</Text>
            <Text style={styles.txtClassInfo}>
              {teacher_Info.teacher_Name} 트레이너
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.confirmsContentsContainer}>
        <Text style={styles.txtClassInfoTitle}>필수 확인 내용</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.calendarContainer}>
              <Image style={styles.imgComponent} source={Calendar} />
              <View style={styles.opacityBlock} />
              <View style={styles.contentsTextContainer}>
                <Text style={styles.txtContent}>선택한 시간을 확인하세요</Text>
              </View>
            </TouchableOpacity>
            <MaterialCommunityIcons
              style={styles.icon}
              name="checkbox-blank-circle-outline"
            />
            {/* <MaterialCommunityIcons name="checkbox-marked-circle-outline" /> */}
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.AcceptTermsContainer}>
              <Image style={styles.imgComponent2} source={EverySports} />
              <View style={styles.contentsTextContainer}>
                <Text style={styles.txtContent}>구매 약관을 확인하세요</Text>
              </View>
            </TouchableOpacity>
            {/* <MaterialCommunityIcons name="checkbox-blank-circle-outline" /> */}
            <MaterialCommunityIcons
              style={styles.icon}
              name="checkbox-marked-circle-outline"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  classInfoContainer: {
    marginTop: 10,
  },
  txtClassInfoTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#ff6b6b',
  },
  classInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  imgClassImage: {
    width: 130,
    height: 130,
    borderRadius: 100,
  },
  classInfoTextContainer: {
    borderWidth: 1,
    width: 250,
    height: 130,
    justifyContent: 'space-around',
    borderRadius: 4,
    backgroundColor: '#ff6b6b',
    borderColor: '#ff6b6b',
    padding: 10,
  },
  txtClassInfo: {
    // color: '#343a40',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  confirmsContentsContainer: {
    marginTop: 20,
  },
  calendarContainer: {
    width: width / 2 - 20,
    height: height / 4,
    borderRadius: 10,
    paddingBottom: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
  },
  imgComponent: {
    position: 'absolute',
    width: width / 2 - 20,
    height: height / 4,
    borderRadius: 10,
  },
  imgComponent2: {
    width: 175,
    height: 175,
    borderRadius: 10,
  },
  opacityBlock: {
    width: width / 2 - 20,
    height: height / 4,
    position: 'absolute',
    top: 0,
    backgroundColor: '#ffffff',
    opacity: 0.4,
    zIndex: 4,
  },
  contentsTextContainer: {
    zIndex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtContent: {
    fontSize: 14,
    color: '#343a40',
    fontWeight: '800',
  },
  AcceptTermsContainer: {
    width: width / 2 - 20,
    height: height / 4,
    borderRadius: 10,
    paddingBottom: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#3bc9db',
  },
  icon: {
    fontSize: 30,
    color: '#ff6b6b',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default PaymentDetailPresenter;
