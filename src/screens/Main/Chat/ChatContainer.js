import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getUserInfo} from '../../../modules/user';

import ChatPresenter from './ChatPresenter';
const ChatContainer = ({navigation}) => {
  const {loading: infoLoading, error: infoError, data: infoData} = useSelector(
    (state) => state.user.userInfo,
  );
  const {loading: chatLoading, error: chatError, data: chatData} = useSelector(
    (state) => state.user.userInfo,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
    const userData = {
      id: data.user_ID,
      name: data.user_Name,
    };
  }, [dispatch]);

  if (!(infoLoading && chatLoading))
    return (
      <View style={styles.container}>
        <Text>Error</Text>
      </View>
    );
  if (!(infoError && chatError))
    return (
      <View style={styles.container}>
        <Text>Error</Text>
      </View>
    );
  if (!(infoData && chatData)) return null;

  return <ChatPresenter navigation={navigation} />;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
export default ChatContainer;
