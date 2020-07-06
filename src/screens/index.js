import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Logo from '../assets/img/Es.png';
import Every from './Every/Every';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TempScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Icon name="home" size={16} color="#000000" />
      <Icon name="home" size={32} color="black" />
      <Icon name="home" size={48} color="black" />
      <Icon name="home" size={72} color="black" />
      <Image source={Logo} style={{height: 32, width: 47}} />
    </View>
  );
};

const Tab = createMaterialBottomTabNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{
          backgroundColor: 'white',
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="운동" component={TempScreen} />
        <Tab.Screen name="데이터" component={TempScreen} />
        <Tab.Screen name="채팅" component={TempScreen} />
        <Tab.Screen name="설정" component={TempScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default index;

// options={{
//   tabBarLabel: 'Home',
//   tabBarIcon: ({color}) => (
//     <MaterialCommunityIcons name="home" color={color} size={26} />
//   ),
// }}
