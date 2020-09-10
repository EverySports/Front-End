import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
  ScrollView,
} from 'react-native';
//#region  import lib
import Calendar from '../../../../assets/img/calendar.png';
import SimpleCalendar from '../../../../components/EveryScreens/SimpleCalendar';
import EverySports from '../../../../assets/img/EverySports.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//#endregion
const {width, height} = Dimensions.get('window');

//#region CalendarConfirmPopup
const CalendarConfirmPopup = ({
  navigation,
  schedule,
  onToggle_Calendar,
  setChecked,
  checked,
}) => {
  const onPress = (name) => (e) => {
    if (name === 'confirm') {
      setChecked({
        ...checked,
        x: true,
      });
      onToggle_Calendar();
    } else {
      Alert.alert(
        '취소',
        '시간을 다시 선택하실 수 있습니다',
        [
          {
            text: '취소하기',
            onPress: () => onToggle_Calendar(),
          },
          {
            text: '시간 다시 선택하기',
            onPress: () => navigation.goBack(),
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
      setChecked(false);
    }
  };

  return (
    <View style={popup_styles.container}>
      {/* Opacity Block */}
      <View style={popup_styles.opacityBlock}></View>
      {/* Contents Container */}
      <View style={popup_styles.contentsContainer}>
        {/* Simple Calendar */}
        <SimpleCalendar schedule={schedule} />
        {/* Confirm Btn */}
        <View style={popup_styles.btnGroup}>
          <TouchableOpacity
            onPress={onPress('confirm')}
            style={popup_styles.btnToggle1}>
            <Text style={popup_styles.txtToggle}>확인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPress('cancel')}
            style={popup_styles.btnToggle2}>
            <Text style={popup_styles.txtToggle}>취소</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
//#endregion
//#region AcceptTheTerms
const AcceptTheTerms = ({onToggle_AcceptTheTerms, setChecked, checked}) => {
  const onPress = () => {
    setChecked({
      ...checked,
      y: true,
    });
    onToggle_AcceptTheTerms();
  };

  return (
    <View style={popup_styles.container}>
      {/* Opacity Block */}
      <View style={popup_styles.opacityBlock}></View>
      {/* Contents Container */}
      <View style={popup_styles.contentsContainer}>
        {/* Simple Calendar */}
        <ScrollView style={popup_styles.tempContainer}>
          <View style={popup_styles.temp}>
            <Text>구매 약관 1</Text>
          </View>
          <View style={popup_styles.temp}>
            <Text>구매 약관 2</Text>
          </View>
          <View style={popup_styles.temp}>
            <Text>구매 약관 3</Text>
          </View>
          <View style={popup_styles.temp}>
            <Text>구매 약관 4</Text>
          </View>
          <TouchableOpacity onPress={onPress} style={popup_styles.btnToggle1}>
            <Text style={popup_styles.txtToggle}>확인</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};
//#endregion

const PaymentDetailPresenter = ({
  navigation,
  userAndTeacherSchedule,
  classInfo,
  userInfo,
}) => {
  const {class_Info, teacher_Info} = classInfo;
  const [calendar, setCalendar] = useState(false);
  const [terms, setTerms] = useState(false);
  const [checked, setChecked] = useState({
    x: false,
    y: false,
  });

  const onToggle_Calendar = () => {
    setCalendar(!calendar);
  };

  const onToggle_AcceptTheTerms = () => {
    setTerms(!terms);
  };

  const onFinalConfirm = () => {
    return null;
  };

  return (
    <>
      {calendar && (
        <CalendarConfirmPopup
          navigation={navigation}
          schedule={userAndTeacherSchedule}
          onToggle_Calendar={onToggle_Calendar}
          checked={checked}
          setChecked={setChecked}
        />
      )}
      {terms && (
        <AcceptTheTerms
          onToggle_AcceptTheTerms={onToggle_AcceptTheTerms}
          checked={checked}
          setChecked={setChecked}
        />
      )}
      <ScrollView style={{backgroundColor: '#ffffff'}}>
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
                  <Text style={styles.txtClassInfo}>
                    {class_Info.class_Name}
                  </Text>
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
                  name={calendar}
                  onPress={onToggle_Calendar}>
                  <Image style={styles.imgComponent} source={Calendar} />
                  <View style={styles.opacityBlock} />
                  <View style={styles.contentsTextContainer}>
                    <Text style={styles.txtContent}>
                      선택한 시간을 확인하세요
                    </Text>
                  </View>
                </TouchableOpacity>

                {!checked.x ? (
                  <MaterialCommunityIcons
                    style={styles.icon}
                    name="checkbox-blank-circle-outline"
                  />
                ) : (
                  <MaterialCommunityIcons
                    style={styles.icon}
                    name="checkbox-marked-circle-outline"
                  />
                )}
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={styles.AcceptTermsContainer}
                  onPress={onToggle_AcceptTheTerms}>
                  <Image style={styles.imgComponent2} source={EverySports} />
                  <View style={styles.contentsTextContainer}>
                    <Text style={styles.txtContent}>
                      구매 약관을 확인하세요
                    </Text>
                  </View>
                </TouchableOpacity>
                {!checked.y ? (
                  <MaterialCommunityIcons
                    style={styles.icon}
                    name="checkbox-blank-circle-outline"
                  />
                ) : (
                  <MaterialCommunityIcons
                    style={styles.icon}
                    name="checkbox-marked-circle-outline"
                  />
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

          <TouchableOpacity style={styles.btnPayment} onPress={onFinalConfirm}>
            <Text style={styles.txtPayment}>결제하기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
    color: '#495057',
  },
  txtClassInfo: {
    fontSize: 14,
    fontWeight: 'bold',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#ff6b6b',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    marginTop: 5,
    textAlignVertical: 'center',
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
    width: width / 2 - 40,
    height: height / 4 - 40,
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
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
    marginBottom: 10,
  },
  txtPayment: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
//
//  Calendar Popup Styles
//
const popup_styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    width: width,
    height: height,
    zIndex: 10,
  },
  opacityBlock: {
    position: 'absolute',
    backgroundColor: '#000000',
    opacity: 0.4,
    width: width,
    height: height,
    zIndex: 11,
  },
  contentsContainer: {
    marginTop: 10,
    alignItems: 'center',
    width: width / 1.05,
    height: height / 1.3,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingBottom: 20,
    zIndex: 12,
  },
  btnGroup: {
    flexDirection: 'row',
    width: width / 1.1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnToggle1: {
    width: 160,
    height: 40,
    borderRadius: 2,
    backgroundColor: '#ff6b6b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnToggle2: {
    width: 160,
    height: 40,
    borderRadius: 2,
    backgroundColor: '#495057',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtToggle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  //
  //  Accept the Terms Popup Styles
  //
  tempContainer: {
    flex: 1,
    height: 700,
    borderWidth: 2,
    width: width / 1.1,
    marginTop: 10,
    padding: 10,
    borderRadius: 4,
  },
  temp: {
    width: 355,
    height: 200,
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#e9ecef',
  },
});

export default PaymentDetailPresenter;
