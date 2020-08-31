import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import ChatRoomPresenter from './ChatRoomPresenter';
const componentName = ({route, naivigation}) => {
  const name = route.params?.name ?? null;

  return <ChatRoomPresenter name={name} naivigation={naivigation} />;
};

export default componentName;
