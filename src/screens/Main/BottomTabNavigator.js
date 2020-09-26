import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EveryStackNavigator from './Every/EveryStackNavigator';
import SportsStackNavigator from './Sports/SportsStackNavigator';
import ChatStackNavigator from './Chat/ChatStackNavigator';
import DataStackNavigator from './Data/DataStackNavigator';
import ChatContainer from './Chat/ChatContainer';
const ICON_SIZE = 16;
const ICON_COLOR = '#495057';
import Feather from 'react-native-vector-icons/Feather';

const TempScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <FontAwesome5 name="running" size={ICON_SIZE} color={ICON_COLOR} />
      <Text style={{marginLeft: 20}}>개발중....</Text>
    </View>
  );
};

const ASDASD = () => {
  return (
    <SafeAreaView
      bar
      style={{
        backgroundColor: '#212529',
      }}>
      <StatusBar barStyle="light-content"></StatusBar>
      <View
        style={{
          flexDirection: 'row',
          padding: 3,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 150,
            flexDirection: 'row',
            justifyContent: 'space-around',
            transform: [{translateY: -10}],
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#20c997', fontWeight: 'bold'}}>On</Text>
            <View
              style={{
                backgroundColor: '#20c997',
                padding: 7,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Feather name="camera" size={20} color="#fff" />
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#ff8787', fontWeight: 'bold'}}>OFF</Text>
            <View
              style={{
                backgroundColor: '#ff8787',
                padding: 7,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Feather name="mic-off" size={20} color="#fff" />
            </View>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            right: 10,
            padding: 7,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{translateY: -10}],
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>PT 종료</Text>
          <Ionicons name="exit" size={30} color="#fff" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  const IconsComponents = [
    <Ionicons name="home" size={ICON_SIZE} color={ICON_COLOR} />,
    <FontAwesome5 name="running" size={ICON_SIZE} color={ICON_COLOR} />,
    <Octicons name="graph" size={ICON_SIZE} color={ICON_COLOR} />,
    <Entypo name="chat" size={ICON_SIZE} color={ICON_COLOR} />,
    <SimpleLineIcons name="settings" size={ICON_SIZE} color={ICON_COLOR} />,
  ];

  const iconsName = ['에브리', '운동', '데이터', '채팅', '설정'];

  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{
          backgroundColor: 'white',
        }}
        screenOptions={({route}) => ({
          tabBarIcon: () => {
            return IconsComponents[iconsName.indexOf(route.name)];
          },
        })}>
        <Tab.Screen name="에브리" component={EveryStackNavigator} />
        <Tab.Screen name="운동" component={SportsStackNavigator} />
        <Tab.Screen name="데이터" component={ASDASD} />
        <Tab.Screen name="채팅" component={ChatContainer} />
        <Tab.Screen name="설정" component={TempScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
