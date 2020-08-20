import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getSportsSchedule} from '../../../modules/sportsSchedule';
import SportsPresenter from './SportsPresenter';
import * as UserAPI from '../../../api/user';
const SportsContainer = ({navigation}) => {
  const {loading, data, error} = useSelector(
    (state) => state.sportsSchedule.sportsSchedule,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const {user_ID} = UserAPI.getGlobalUserInfo();
    dispatch(getSportsSchedule(user_ID));
  }, [dispatch]);

  if (loading)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>로딩</Text>
      </View>
    );

  if (error)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>에러</Text>
      </View>
    );

  if (!data) return null;

  return <SportsPresenter navigation={navigation} schedule={data} />;
};

export default SportsContainer;
