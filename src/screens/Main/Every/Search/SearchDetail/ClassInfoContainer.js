import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getClassInfo} from '../../../../../modules/classInfo';
import ClassInfoPresenter from './ClassInfoPresenter';
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

  if (loading)
    return (
      <View>
        <Text>로딩중</Text>
      </View>
    );
  if (error)
    return (
      <View>
        <Text>에러</Text>
      </View>
    );
  if (!data) return null;

  return <ClassInfoPresenter classInfo={data} />;
};

export default ClassInfoContainer;
