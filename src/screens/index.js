import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Running, Home, Graph, Chat, Settings} from './BottomTabNaviIcons';
import Every from './EveryScreens/Every';

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Octicons from 'react-native-vector-icons/Octicons';
// import Entypo from 'react-native-vector-icons/Entypo';
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TempScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Running />
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
          tabBarIcon: ({focused, color, size}) => {
            // focused, color, size
            return IconsComponents[iconsName.indexOf(route.name)];
          },
        })}>
        <Tab.Screen name="에브리" component={Every} initialParams={'asd'} />
        <Tab.Screen name="운동" component={TempScreen} />
        <Tab.Screen name="데이터" component={TempScreen} />
        <Tab.Screen name="채팅" component={TempScreen} />
        <Tab.Screen name="설정" component={TempScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default index;
