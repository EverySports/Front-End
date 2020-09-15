import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getUserInfo} from '../../../modules/user';

import ChatPresenter from './ChatPresenter';
const ChatContainer = ({navigation}) => {
  const {loading, error, data} = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
    const userData = {
      id: data.user_ID,
      name: data.user_Name,
    };
  }, [dispatch]);

  if (!loading)
    return (
      <View style={styles.container}>
        <Text>Error</Text>
      </View>
    );
  if (!error)
    return (
      <View style={styles.container}>
        <Text>Error</Text>
      </View>
    );
  if (!data) return null;

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
