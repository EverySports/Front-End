import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Moment from 'moment';
import axios from 'axios';
import Logo from '../../../assets/img/splash.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {width} = Dimensions.get('window');

const GoogleSignUpConfirm = ({route, navigation}) => {
  const postData = route.params?.postData ?? null;
  const userData = [
    {
      label: '이름',
      value: postData.user_Name,
    },
    {
      label: '이메일',
      value: postData.user_Email,
    },
    {
      label: '성별',
      value: postData.user_Gender ? '여성' : '남성',
    },
    {
      label: '생년월일',
      value: Moment(postData.user_BirthDay).format('YYYY년 MM월 DD일'),
    },
    {
      label: '연락처',
      value: postData.user_Phone,
    },
  ];

  const onPress = async () => {
    await axios
      .post(`http://localhost/eUsers/?id=${postData.user_ID}`, postData)
      .then(
        navigation.navigate('after_signup', {
          userName: postData.user_Name,
          postData,
        }),
      )
      .catch((err) => {
        console.log(err);
        navigation.goBack();
      });
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={[styles.txtTitle, {color: '#868e96', marginBottom: 30}]}>
        이제 EverySports를 시작하실 수 있습니다
      </Text>
      <View style={styles.contentsBox}>
        <Text style={styles.txtTitle}>
          마지막으로 입력하신 정보가 맞는지 확인해주세요!
        </Text>
        <View style={styles.contents}>
          <View style={styles.userData}>
            {userData.map((item, key) => (
              <View style={styles.item} key={key}>
                <Text style={styles.txtLabel}>{item.label} : </Text>
                <Text style={styles.txtValue}>{item.value}</Text>
              </View>
            ))}
          </View>

          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.btnNavigate}
              onPress={() => navigation.goBack()}>
              <AntDesign style={styles.icon} name="arrowleft" />
              <Text style={styles.txt}>다시 입력</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnNavigate} onPress={onPress}>
              <Text style={styles.txt}>다음</Text>
              <AntDesign style={styles.icon} name="arrowright" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: width * 0.88,
    height: 100,
  },
  contentsBox: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: width * 0.88,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  },
  txtTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#495057',
    marginBottom: 10,
  },

  contents: {
    padding: 10,
  },
  userData: {
    padding: 10,
  },
  item: {
    flexDirection: 'row',

    padding: 10,
    alignItems: 'center',
  },
  txtLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#495057',
    width: 70,
  },
  txtValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#495057',
  },
  buttonGroup: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.75,
  },
  btnNavigate: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.35,
    height: 40,
    backgroundColor: '#3bc9db',
    borderRadius: 10,
  },
  icon: {
    fontSize: 30,
    color: '#fff',
  },
  txt: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});

export default GoogleSignUpConfirm;
