import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import TeacherInfoPresenter from './TeacherInfoPresenter';
import {getTeacherInfo} from '../../../../../modules/teacherInfo';
const TeacherInfoContainer = ({navigation, route}) => {
  const info = route.params?.info ?? 'non-teacher-data';
  const {loading, data, error} = useSelector(
    (state) => state.teacherInfo.teacherInfo,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const {id, category} = info;
    dispatch(getTeacherInfo(id, category));
  }, dispatch);

  if (loading)
    return (
      <View>
        <Text>로딩중...</Text>
      </View>
    );
  if (error)
    return (
      <View>
        <Text>TeacherInfoContainer Page ERROR</Text>
      </View>
    );
  if (!data) return null;

  return <TeacherInfoPresenter navigation={navigation} info={data} />;
};

export default TeacherInfoContainer;
