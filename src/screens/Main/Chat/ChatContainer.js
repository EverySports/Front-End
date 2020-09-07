import React from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ChatPresenter from './ChatPresenter';
const ChatContainer = ({navigation}) => {
  //get user info using redux

  return <ChatPresenter navigation={navigation} />;
};

export default ChatContainer;
