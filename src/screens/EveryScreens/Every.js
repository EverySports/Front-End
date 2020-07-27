import React, {useRef} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import yoga from '../../assets/img/yoga2.png';
import pilates from '../../assets/img/pilates2.png';
import health from '../../assets/img/health.png';
import diet from '../../assets/img/diet.png';
import {allHotClassTempArray} from '../../modules/traner';

// import Slide from './components/Slide;
import Search from './SearchScreens/Search';
import ClassInfo from './SearchScreens/SearchDetailScreens/ClassInfo';
import CategoryComponent from './CategoryComponent';
import SlideComponent from './SlideComponent';

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
        <Text style={styles.CategoryComponentheader}>카테고리별 찾기</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 10,
          }}>
          <CategoryComponent img={yoga} name={'요가'} navigation={navigation} />
          <CategoryComponent
            img={pilates}
            name={'필라테스'}
            navigation={navigation}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <CategoryComponent
            img={health}
            name={'헬스'}
            navigation={navigation}
          />
          <CategoryComponent
            img={diet}
            name={'다이어트'}
            navigation={navigation}
          />
        </View>
      </View>
      <SlideComponent headText={'전체 HOT Class'} info={allHotClassTempArray} />
      <SlideComponent headText={'신규 Class'} info={allHotClassTempArray} />
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
      inputRange: [0, HEADER_HEIGHT / 4, HEADER_HEIGHT / 2],
      outputRange: [1, 0.1, 0],
      extrapolate: 'clamp',
    }),
  }),
  contents: {
    justifyContent: 'center',
  },
  CategoryComponentheader: {
    fontSize: 18,
    color: '#495057',
    fontWeight: '800',
    paddingLeft: 15,
    marginBottom: 10,
  },
});

export default Every;
