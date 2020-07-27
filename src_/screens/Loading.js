import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Loading = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('login');
    }, 0);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text> Loading </Text>
    </View>
  );
};

export default Loading;
