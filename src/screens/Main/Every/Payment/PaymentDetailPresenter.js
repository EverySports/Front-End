import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Calendar from '../../../../assets/img/calender.png';
import EverySports from '../../../../assets/img/EverySports.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const {width, height} = Dimensions.get('window');

const CalenderConfirmPopup = ({onToggle_Calender, checked_1}) => {
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        width: width,
        height: height,
        zIndex: 10,
      }}>
      {/* Opacity Block */}
      <View
        style={{
          backgroundColor: '#000000',
          opacity: 0.4,
          width: width,
          height: height,
          position: 'absolute',
          zIndex: 11,
        }}></View>
      {/* Contents Container */}
      <View
        style={{
          top: 10,
          width: width / 1.05,
          height: height / 1.3,
          backgroundColor: '#ffffff',
          borderRadius: 10,
          zIndex: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: width / 1.1,
            height: height / 1.4,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}></View>
        {/* Confirm Btn */}
        <View
          style={{
            width: width / 1.05,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={onToggle_Calender}
            style={{
              width: 160,
              height: 40,
              borderRadius: 2,
              backgroundColor: '#ff6b6b',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 16,
                fontWeight: '700',
              }}>
              확인
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onToggle_Calender}
            style={{
              width: 160,
              height: 40,
              borderRadius: 2,
              backgroundColor: '#495057',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 16,
                fontWeight: '700',
              }}>
              취소
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const PaymentDetailPresenter = ({userSchedule, classInfo, userInfo}) => {
  const {class_Info, teacher_Info} = classInfo;

  const [calender, setCalender] = useState(false);
  const [checked_1, setChecked_1] = useState(false);
  const [checked_2, setChecked_2] = useState(false);
  const [checked, setChecked] = useState({
    calender: false,
    terms: false,
  });

  const onToggle_Calender = () => {
    setCalender(!calender);
  };

  return (
    <>
      {calender && (
        <CalenderConfirmPopup
          onToggle_Calender={onToggle_Calender}
          checked={checked_1}
        />
      )}

      <View style={styles.container}>
        <View style={styles.classInfoContainer}>
          <Text style={styles.txtTitle}>신청 클래스 정보</Text>
          <View style={styles.classInfo}>
            <Image
              source={class_Info.class_Image}
              style={styles.imgClassImage}
            />
            <View style={styles.classInfoTextContainer}>
              <View>
                <Text style={styles.txtTitle}>신청 클래스 이름</Text>
                <Text style={styles.txtClassInfo}>{class_Info.class_Name}</Text>
              </View>
              <View style={{marginTop: 10}}>
                <Text style={styles.txtTitle}>클래스 트레이너</Text>
                <Text style={styles.txtClassInfo}>
                  {teacher_Info.teacher_Name} 트레이너
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.confirmsContentsContainer}>
          <Text style={styles.txtTitle}>필수 확인 내용</Text>
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
              <TouchableOpacity
                style={styles.calendarContainer}
                name={calender}
                onPress={onToggle_Calender}>
                <Image style={styles.imgComponent} source={Calendar} />
                <View style={styles.opacityBlock} />
                <View style={styles.contentsTextContainer}>
                  <Text style={styles.txtContent}>
                    선택한 시간을 확인하세요
                  </Text>
                </View>
              </TouchableOpacity>

              {!checked_1 ? (
                <MaterialCommunityIcons
                  style={styles.icon}
                  name="checkbox-blank-circle-outline"
                />
              ) : (
                <MaterialCommunityIcons name="checkbox-marked-circle-outline" />
              )}
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
              {!checked_2 ? (
                <MaterialCommunityIcons
                  style={styles.icon}
                  name="checkbox-blank-circle-outline"
                />
              ) : (
                <MaterialCommunityIcons name="checkbox-marked-circle-outline" />
              )}
            </View>
          </View>
        </View>
        <View style={styles.paymentInfoContainer}>
          <Text style={styles.txtTitle}>결제 정보</Text>
          <View style={styles.paymentContents}>
            <View style={styles.pointInfo}>
              <Text style={styles.txtTitle}>보유 포인트</Text>
              <Text style={styles.txtPoint}>{userInfo.user_Point}P</Text>
            </View>
            <FontAwesome name="minus" />
            <View style={styles.pointInfo}>
              <Text style={styles.txtTitle}>차감 포인트</Text>
              <Text style={styles.txtPoint}>{class_Info.class_Price}P</Text>
            </View>
            <FontAwesome5 name="equals" />
            <View style={styles.pointInfo}>
              <Text style={styles.txtTitle}>결제 후 잔여 포인트</Text>
              <Text style={styles.txtPoint}>
                {userInfo.user_Point - class_Info.class_Price}P
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.btnPayment}>
          <Text style={styles.txtPayment}>결제하기</Text>
        </TouchableOpacity>
      </View>
    </>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 4,
    elevation: 5,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  txtTitle: {
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
    width: 250,
    justifyContent: 'space-around',
    padding: 10,
  },
  txtTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#495057',
  },
  txtClassInfo: {
    fontSize: 14,
    fontWeight: '600',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#ff6b6b',
    padding: 10,
    paddingTop: 3,
    paddingBottom: 3,
    marginTop: 5,
  },
  confirmsContentsContainer: {
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 4,
    elevation: 5,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  calendarContainer: {
    width: width / 2 - 40,
    height: height / 4,
    borderRadius: 10,
    paddingBottom: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
  },
  imgComponent: {
    position: 'absolute',
    width: width / 2 - 40,
    height: height / 4,
    borderRadius: 10,
  },
  imgComponent2: {
    width: 175,
    height: 175,
    borderRadius: 10,
  },
  opacityBlock: {
    width: width / 2 - 0,
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
    width: width / 2 - 40,
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
  },
  paymentInfoContainer: {
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 4,
    elevation: 5,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  paymentContents: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  pointInfo: {
    borderRadius: 4,
    padding: 10,
    borderColor: '#ff8787',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
  },
  txtPoint: {
    color: '#fa5252',
    fontWeight: '800',
    fontSize: 15,
  },
  btnPayment: {
    marginTop: 20,
    width: width - 20,
    borderRadius: 5,
    backgroundColor: '#ff6b6b',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtPayment: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 20,
  },
});

export default PaymentDetailPresenter;
