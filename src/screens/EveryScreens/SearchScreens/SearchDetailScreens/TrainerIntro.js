import React from 'react';
import SGProfile from '../../../../assets/img/classProfile.png';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';

const {width} = Dimensions.get('window');

const TrainerIntro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>강사소개</Text>
      <View style={styles.contentsContainer}>
        <View style={styles.trainerIntroduce}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              marginBottom: 10,
            }}>
            <Image source={SGProfile} style={styles.profile} />
            <Text style={{fontWeight: '500', fontSize: 16}}>자세히보기</Text>
          </View>
          <View style={styles.trainerIntroduceTextContainer}>
            <Text style={{fontSize: 16, fontWeight: '700', marginBottom: 10}}>
              트레이너 슬기
            </Text>
            <Text>
              Hey, I was doing just fine before I met you I drink too much and
              that's an issue but I'm okay Hey, you tell your friends it was
              nice to meet them But I hope I never see them again
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#dee2e6',
    borderRadius: 4,
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
  },
  trainerIntroduce: {
    // flexDirection: 'row',
  },
  profile: {
    width: width / 4,
    height: width / 4,
    borderRadius: 100,
    marginRight: 20,
  },
  trainerIntroduceTextContainer: {},
});
export default TrainerIntro;
