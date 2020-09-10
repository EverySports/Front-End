import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getClasses} from '../../../modules/classes';
import EveryPresenter from './EveryPresenter';
import Loading from '../../../components/Common/Loading';
import Error from '../../../components/Common/Error';

const EveryContainer = ({navigation}) => {
  const {data, loading, error} = useSelector((state) => state.classes.classes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClasses());
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data.hotClasses && !data.newClasses) return null;

  return <EveryPresenter classes={data} navigation={navigation} />;
};

export default EveryContainer;
