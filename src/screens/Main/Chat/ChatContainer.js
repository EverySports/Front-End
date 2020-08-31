import React from 'react';
import {View, Text} from 'react-native';
import ChatPresenter from './ChatPresenter';
const ChatContainer = ({navigation}) => {
  return <ChatPresenter navigation={navigation} />;
};

export default ChatContainer;
