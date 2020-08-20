import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import sg from '../../assets/img/sg.png';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');
const colors = ['#2F80ED', '#56CCF2'];
const AIHomework = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <FontAwesome5 name="running" style={styles.icon} />
        <Text style={styles.txtContainerHeader}>AI 트레이닝</Text>
      </View>
      <View style={styles.contentsContainer}>
        <View style={styles.contents}>
          <View style={styles.contentsTitle}>
            <Entypo name="open-book" style={styles.icon2} />
            <Text style={styles.txtContentsTitle}>
              강슬기 트레이너 님의 숙제
            </Text>
          </View>
          <View style={styles.recommendContents}>
            <Image style={styles.imgSports} source={sg} />
            <View style={styles.recommendInfo}>
              <Text style={styles.txtName}>운동이름</Text>
              <Text>운동 설명</Text>
            </View>
          </View>
          <TouchableOpacity>
            <LinearGradient
              style={styles.btnStart}
              colors={colors}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}>
              <Text style={styles.txtBtnText}>트레이너 숙제 시작하기</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View style={styles.contents}>
          <View style={styles.contentsTitle}>
            <FontAwesome5 name="crown" style={styles.icon2} />
            <Text style={styles.txtContentsTitle}>오늘의 추천 운동</Text>
          </View>
          <View style={styles.recommendContents}>
            <Image style={styles.imgSports} source={sg} />
            <View style={styles.recommendInfo}>
              <Text style={styles.txtName}>운동 이름</Text>
              <Text>운동 설명</Text>
            </View>
          </View>
          <TouchableOpacity>
            <LinearGradient
              style={styles.btnStart}
              colors={colors}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}>
              <Text style={styles.txtBtnText}>추천 운동 시작하기</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 5,
    borderColor: '#e9ecef',
    paddingBottom: 10,
    marginBottom: 10,
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
    paddingLeft: 20,
  },
  icon: {
    color: '#2F80ED',
    fontSize: 18,
  },
  icon2: {
    color: '#343a40',
    fontSize: 16,
    marginRight: 5,
  },
  txtContainerHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F80ED',
    marginLeft: 5,
  },
  contentsContainer: {
    paddingBottom: 10,
    alignContent: 'center',
  },
  contents: {
    width: width,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  contentsTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 5,
  },
  txtTeacherName: {
    color: '#ff6b6b',
    fontWeight: 'bold',
    marginRight: 5,
  },
  txtContentsTitle: {
    color: '#343a40',
    fontWeight: 'bold',
  },
  recommendContents: {
    flexDirection: 'row',
  },
  recommendInfo: {
    width: width / 2 - 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  txtName: {
    color: '#2F80ED',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
  txtInfo: {
    color: '#495057',
    // fontWeight: 'bold',
  },
  btnStart: {
    width: width - 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 10,
    backgroundColor: '#2F80ED',
  },
  txtBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imgSports: {
    width: width / 2 - 25,
    height: 200,
    borderRadius: 4,
  },
});
export default AIHomework;
