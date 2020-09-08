import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import ChatRoomPresenter from './ChatRoomPresenter';
import AsyncStorage from '@react-native-community/async-storage';
import * as Fire from './Fire';
const ChatRoomContainer = () => {
  Fire.init();
  const [state, setState] = useState(null);

  async function readUser() {
    const user = await AsyncStorage.getItem('user');
    if (user) {
      setState(JSON.parse(user));
    }
  }

  useEffect(() => {
    readUser();
  }, []);

  return <ChatRoomPresenter />;
};
export default ChatRoomContainer;
