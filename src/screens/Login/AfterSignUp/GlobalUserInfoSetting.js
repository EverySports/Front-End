import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import * as initScreen from '../LoginStackNavigator';
import {useSelector, useDispatch} from 'react-redux';
import {setUserInfo} from '../../../modules/user';
import Loading from '../../../components/Common/Loading';

const GlobalUserInfoSetting = ({route, navigation}) => {
  const postData = route.params?.postData ?? null;
  const {loading, error, data} = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserInfo(postData));
  }, [dispatch]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        {loadgin && <Loading />}
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
