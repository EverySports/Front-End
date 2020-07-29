import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getClasses} from '../../../modules/classes';
import EveryPresenter from './EveryPresenter';
import {View, Text} from 'react-native';

const EveryContainer = ({navigation}) => {
  const {data, loading, error} = useSelector((state) => state.classes.classes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClasses());
  }, [dispatch]);

  if (loading)
    return (
      <View>
        <Text>로딩중...</Text>
      </View>
    );
  if (error)
    return (
      <View>
        <Text>Every Container Page Error</Text>
      </View>
    );
  if (!data.hotClasses && !data.newClasses) return null;

  return <EveryPresenter classes={data} navigation={navigation} />;
};

export default EveryContainer;
