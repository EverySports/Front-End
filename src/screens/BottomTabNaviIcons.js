import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Home = () => {
  return <Ionicons name="home" size={16} color="#495057" />;
};

export const Running = () => {
  return <FontAwesome5 name="running" size={16} color="#495057" />;
};

export const Graph = () => {
  return <Octicons name="graph" size={16} color="#495057" />;
};

export const Chat = () => {
  return <Entypo name="chat" size={16} color="#495057" />;
};

export const Settings = () => {
  return <SimpleLineIcons name="settings" size={16} color="#495057" />;
};
