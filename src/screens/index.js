import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Running, Home, Graph, Chat, Settings} from './BottomTabNaviIcons';
import Every from './EveryScreens/Every';

const TempScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Running />
      <Text style={{marginLeft: 20}}>개발중....</Text>
    </View>
  );
};

const Tab = createMaterialBottomTabNavigator();

const index = () => {
  const IconsComponents = [
    <Home />,
    <Running />,
    <Graph />,
    <Chat />,
    <Settings />,
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
        <Tab.Screen name="에브리" component={Every} />
        <Tab.Screen name="운동" component={TempScreen} />
        <Tab.Screen name="데이터" component={TempScreen} />
        <Tab.Screen name="채팅" component={TempScreen} />
        <Tab.Screen name="설정" component={TempScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default index;
