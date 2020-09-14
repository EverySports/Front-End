import React, {useEffect} from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import * as initScreen from '../LoginStackNavigator';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../../../components/Common/Loader';
import {setUserInfo} from '../../../modules/user';

const GlobalUserInfoSetting = ({route, navigation}) => {
  const postData = route.params?.postData ?? null;
  const {loading, error, data} = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(postData);
    dispatch(setUserInfo(postData));
  }, [dispatch]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        {loadgin && (
          <>
            <Text style={styles.txt}>로그인 정보를 확인하고 있어요!</Text>
            <Loader />
          </>
        )}
      </SafeAreaView>
    );
  }
  if (error) {
    navigation.goBack;
  }
  if (!data) return null;
  else {
    initScreen.goToMain();
  }

  return <View style={{flex: 1, justifyContent: 'center'}} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#868e96',
  },
});

export default GlobalUserInfoSetting;
