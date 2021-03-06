import React, {useState, useRef} from 'react';
//#region import
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import axios from 'axios';

//#endregion
const {width} = Dimensions.get('window');

export default function GoogleSignup({navigation, state}) {
  const phone = useRef(null);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [gender, setGender] = useState(-1);
  const [input, setInput] = useState({
    gender: -1,
    phone: null,
    birthDay: new Date('2020/01/01'),
  });

  const onPress_SetGender = (_gender) => {
    const userSelectGenderType = _gender === 'm' ? 0 : 1;
    setGender(userSelectGenderType);
    setInput({
      ...input,
      gender: userSelectGenderType,
    });
  };

  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios');
    setInput({
      ...input,
      birthDay: selectedDate,
    });
  };

  const onPress_Signup = async () => {
    setError(false);
    if (!input.phone || input.phone.length !== 11) {
      phone.current.focus();
      setError(true);
      return;
    }
    if (input.gender === -1) {
      setError(true);
      return;
    }

    if (!error) {
      const postData = {
        user_ID: state.userInfo.user.id,
        user_Name: state.userInfo.user.name,
        user_Email: state.userInfo.user.email,
        user_Gender: input.gender,
        user_BirthDay: input.birthDay,
        user_Phone: input.phone,
        user_Point: 0,
      };

      navigation.navigate('confirm', {
        postData: postData,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.ios ? 'padding' : 'position'}>
        <Text style={styles.txtLargeTitle}>
          회원가입을 위한 추가 정보를 입력 해주세요
        </Text>
        <View style={styles.contents}>
          <View style={styles.row}>
            <Text style={styles.left}>이름 :</Text>
            <View style={styles.right}>
              <Text style={styles.txtInfo}>{state.userInfo.user.name}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.left}>이메일 :</Text>
            <View style={styles.right}>
              <Text style={styles.txtInfo}>{state.userInfo.user.email}</Text>
            </View>
          </View>
          {/* 추가 입력 정보 */}
          <Text style={styles.txtSmallTitle}>추가입력 정보</Text>
          <Text style={styles.txtP}>
            트레이너님과 사용자님을 보호하기 위한 용도로 사용됩니다.
          </Text>
          <View style={styles.row}>
            <Text style={styles.left}>핸드폰 번호 :</Text>
            <TextInput
              ref={phone}
              textContentType="telephoneNumber"
              placeholder="- 없이 번호입력"
              style={[styles.right, styles.input]}
              onChangeText={(txt) =>
                setInput({
                  ...input,
                  phone: txt,
                })
              }
            />
          </View>
          <View style={[styles.row, {flexDirection: 'column'}]}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.left}>생년월일 :</Text>
              <View style={[styles.input, styles.birthDayWrap]}>
                <Text style={styles.txtDateSelecte}>
                  {Moment(input.birthDay).format('YYYY년   MM월   DD일')}
                </Text>
                <TouchableOpacity
                  style={styles.btnDateSelecte}
                  onPress={() => {
                    setShow(!show);
                  }}>
                  <Ionicons
                    name="ios-calendar"
                    size={16}
                    style={{color: '#fff'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={input.birthDay}
                mode="date"
                onChange={onChange}
                maximumDate={new Date('2020/01/01')}
              />
            )}
          </View>
          <View style={styles.row}>
            <Text style={styles.left}>성별 :</Text>
            <View
              style={[
                styles.right,
                {
                  flexDirection: 'row',
                  borderWidth: 0,
                  paddingHorizontal: 0,
                },
              ]}>
              <TouchableOpacity
                style={styles.btnGender}
                onPress={(e) => onPress_SetGender('m')}>
                <Ionicons
                  style={[styles.txtGender('m', gender), {marginRight: 5}]}
                  name="male"
                />
                <Text style={styles.txtGender('m', gender)}>남성</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnGender}
                onPress={(e) => onPress_SetGender('f')}>
                <Ionicons
                  style={[styles.txtGender('f', gender), {marginRight: 5}]}
                  name="female"
                />
                <Text style={styles.txtGender('f', gender)}>여성</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.signup}>
        <Text style={styles.txtSignup}>모두 작성 했어요!</Text>
        <TouchableOpacity style={styles.btnSignup} onPress={onPress_Signup}>
          <Ionicons style={{color: '#fff'}} name="arrow-forward" size={40} />
        </TouchableOpacity>
      </View>
      {error && (
        <View style={styles.errorMsg}>
          <MaterialIcons name="error" size={26} color="#ff8787" />
          <Text style={styles.txtError}>
            추가입력 정보들을 다시 확인 해주세요!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  txtLargeTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#495057',
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 20,
  },

  txtSmallTitle: {
    fontWeight: 'bold',
    color: '#495057',
    marginHorizontal: 10,
    fontSize: 18,
    marginTop: 20,
    marginBottom: 5,
  },

  txtP: {
    marginBottom: 20,
    color: '#adb5bd',
    fontWeight: 'bold',
    marginLeft: 10,
  },

  row: {
    paddingHorizontal: 10,
    flexDirection: 'row',
  },

  left: {
    width: width * 0.25,
    fontSize: 16,
    marginBottom: 10,
    paddingHorizontal: 5,
    paddingVertical: 12,
    color: '#495057',
    fontWeight: 'bold',
    transform: [{translateY: 2}],
  },

  right: {
    borderWidth: 2,
    width: width * 0.66,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: '#ced4da',
    borderRadius: 7,
    justifyContent: 'center',
  },

  txtInfo: {
    fontSize: 16,
    color: '#868e96',
    fontWeight: 'bold',
  },

  input: {
    color: '#343a40',
    borderColor: '#3bc9db',
    borderWidth: 2,
    fontWeight: 'bold',
  },

  birthDayWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    width: width * 0.66,
    justifyContent: 'space-between',
    paddingVertical: 0,
    paddingHorizontal: 10,
    borderRadius: 7,
  },

  btnDateSelecte: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#495057',
    borderRadius: 10,
    padding: 7,
  },

  txtDateSelecte: {
    fontSize: 16,
    color: '#495057',
    fontWeight: 'bold',
  },

  genderWrap: {
    flexDirection: 'row',
    width: width * 0.66,
    justifyContent: 'space-around',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  btnGender: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#495057',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginRight: 10,
  },
  txtGender: (key, gender) => ({
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    color:
      key === 'm' && gender === 0
        ? '#ffd43b'
        : key === 'f' && gender === 1
        ? '#ffd43b'
        : '#adb5bd',
  }),

  signup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  txtSignup: {
    fontWeight: 'bold',
    fontSize: 17,
    marginRight: 15,
  },
  btnSignup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#3bc9db',
  },
  errorMsg: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 15,
  },
  txtError: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#ff8787',
  },
});
