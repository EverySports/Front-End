import React from 'react';
import {StyleSheet, View, Text, ScrollView, Button} from 'react-native';
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
const EveryHome = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#4dabf7', '#6DD5FA', '#e9ecef']}
        style={styles.header}>
        <Text style={styles.headerText}>나만의 트레이너 찾기</Text>
      </LinearGradient>

      <View style={styles.contents}>
        <View style={{flexDirection: 'row'}}>
          <ImgBox
            img={yoga}
            name={'요가'}
            navigation={navigation}
            navigation={navigation}
          />
          <ImgBox img={pilates} name={'필라테스'} navigation={navigation} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <ImgBox img={health} name={'헬스'} navigation={navigation} />
          <ImgBox img={diet} name={'다이어트'} navigation={navigation} />
        </View>
      </View>
      <Slide headText={'전체 HOT Class'} info={allHotClassTempArray} />
      <Slide headText={'신규 Class'} info={allHotClassTempArray} />
    </ScrollView>
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
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    height: 200,
    justifyContent: 'center',
  },
  headerText: {
    marginTop: 15,
    marginLeft: 20,
    fontSize: 24,
    color: '#495057',
    fontWeight: 'bold',
  },
  contents: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Every;
