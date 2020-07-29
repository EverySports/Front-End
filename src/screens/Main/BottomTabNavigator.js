import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EveryStackNavigator from './Every/EveryStackNavigator';
const ICON_SIZE = 16;
const ICON_COLOR = '#495057';

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
        <Tab.Screen name="운동" component={TempScreen} />
        <Tab.Screen name="데이터" component={TempScreen} />
        <Tab.Screen name="채팅" component={TempScreen} />
        <Tab.Screen name="설정" component={TempScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
