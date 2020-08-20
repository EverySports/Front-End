import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Entopy from 'react-native-vector-icons/Entypo';
const colors = ['#0F2027', '#203A43', '#2C5364'];
const {width, height} = Dimensions.get('window');
const LivePT = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Entopy name="mobile" style={styles.icon} />
        <Text style={styles.txtContainerHeader}>PT LIVE 접속하기</Text>
      </View>
      <TouchableOpacity>
        <LinearGradient
          colors={colors}
          style={styles.btnGoToLive}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <Text style={styles.txtGoToLive}>LIVE PT 시작하기 </Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.liveGuide}>
        <Entopy name="controller-record" style={styles.icon2} />
        <Text style={styles.txtLiveGuide}>
          현재 트레이너 LIVE 가 진행중입니다
        </Text>
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

  txtContainerHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F80ED',
    marginBottom: 10,
    marginLeft: 5,
    marginTop: 10,
  },
  btnGoToLive: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 4,
    width: width / 2 + 50,
    marginBottom: 20,
  },
  txtGoToLive: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  liveGuide: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon2: {
    color: '#20c997',
    marginRight: 5,
  },
  txtLiveGuide: {
    color: '#20c997',
    fontWeight: 'bold',
  },
});

export default LivePT;
