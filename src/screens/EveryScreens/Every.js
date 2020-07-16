import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Search from './Search';
import LinearGradient from 'react-native-linear-gradient';
import ImgBox from '../common/ImgBox';
import Slide from '../common/Slide';
import yoga from '../../assets/img/yoga2.png';
import pilates from '../../assets/img/pilates2.png';
import health from '../../assets/img/health.png';
import diet from '../../assets/img/diet.png';
import {allHotClassTempArray} from '../../modules/traner';
import ClassInfo from './ClassInfo';

const {width} = Dimensions.get('window');
const HEADER_HEIGHT = 200;
const EveryHome = ({navigation}) => {
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <Animated.ScrollView
      style={styles.container}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollA}}}], {
        useNativeDriver: true,
      })}
      scrollEventThrottle={16}>
      <Animated.View style={styles.header(scrollA)}>
        <Animated.Text style={styles.headerText(scrollA)}>
          나만의 트레이너 찾기
        </Animated.Text>
      </Animated.View>
      <View style={styles.contents}>
        <View style={{flexDirection: 'row'}}>
          <ImgBox img={yoga} name={'요가'} navigation={navigation} />
          <ImgBox img={pilates} name={'필라테스'} navigation={navigation} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <ImgBox img={health} name={'헬스'} navigation={navigation} />
          <ImgBox img={diet} name={'다이어트'} navigation={navigation} />
        </View>
      </View>
      <Slide headText={'전체 HOT Class'} info={allHotClassTempArray} />
      <Slide headText={'신규 Class'} info={allHotClassTempArray} />
    </Animated.ScrollView>
  );
};

const Stack = createStackNavigator();

const Every = () => {
  return (
    <Stack.Navigator initialRouteName="Every">
      <Stack.Screen
        name="Every"
        component={EveryHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={({route}) => ({title: route.params.name})}
      />
      <Stack.Screen name="ClassInfo" component={ClassInfo} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  header: (scrollA) => ({
    height: HEADER_HEIGHT,
    justifyContent: 'center',
    // alignItems: 'center',
    transform: [
      {
        translateY: scrollA,
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT / 2, HEADER_HEIGHT],
          outputRange: [1, 1, 1, 1],
        }),
      },
    ],
  }),
  headerText: (scrollA) => ({
    position: 'absolute',
    marginTop: 0,
    marginLeft: 20,
    bottom: 50,
    fontSize: 24,
    color: '#495057',
    fontWeight: 'bold',
    opacity: scrollA.interpolate({
      inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT / 2, HEADER_HEIGHT],
      outputRange: [1, 1, 0.1, 0],
    }),
  }),
  contents: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Every;
