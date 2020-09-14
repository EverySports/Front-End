import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getSportsSchedule} from '../../../modules/sportsSchedule';
import SportsPresenter from './SportsPresenter';

const SportsContainer = ({navigation}) => {
  const {loading, data, error} = useSelector(
    (state) => state.sportsSchedule.sportsSchedule,
  );
  const {data: userInfo} = useSelector((state) => state.user.userInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('\t\tuser_Info : ', userInfo);

    dispatch(getSportsSchedule(1));
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
