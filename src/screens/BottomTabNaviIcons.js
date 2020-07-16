import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const ICON_SIZE = 16;
const ICON_COLOR = '#495057';

export const Home = () => {
  return <Ionicons name="home" size={ICON_SIZE} color={ICON_COLOR} />;
};

export const Running = () => {
  return <FontAwesome5 name="running" size={ICON_SIZE} color={ICON_COLOR} />;
};

export const Graph = () => {
  return <Octicons name="graph" size={ICON_SIZE} color={ICON_COLOR} />;
};

export const Chat = () => {
  return <Entypo name="chat" size={ICON_SIZE} color={ICON_COLOR} />;
};

export const Settings = () => {
  return (
    <SimpleLineIcons name="settings" size={ICON_SIZE} color={ICON_COLOR} />
  );
};
