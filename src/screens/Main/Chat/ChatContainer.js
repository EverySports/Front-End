import React from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ChatPresenter from './ChatPresenter';
const ChatContainer = ({navigation}) => {
  //get user info using redux
  //
  // state 조회를 통해 유저아이디와 매핑된 채팅리스트들을 가져와야함
  //

  return <ChatPresenter navigation={navigation} />;
};

export default ChatContainer;
