import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getClassInfo} from '../../../../../modules/classInfo';
import ClassInfoPresenter from './ClassInfoPresenter';
import Loading from '../../../../../components/Common/Loading';
import Error from '../../../../../components/Common/Error';

const ClassInfoContainer = ({navigation, route}) => {
  const {loading, data, error} = useSelector(
    (state) => state.classInfo.classInfo,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    // const classID = route.params?.info.id ?? 'non-class-information';
    // set classId for Seach by classId as keword
    //param : class_ID
    dispatch(getClassInfo());
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data) return null;

  return <ClassInfoPresenter navigation={navigation} classInfo={data} />;
};

export default ClassInfoContainer;
