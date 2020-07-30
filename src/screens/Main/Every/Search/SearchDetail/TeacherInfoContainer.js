import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import TeacherInfoPresenter from './TeacherInfoPresenter';
import {getTeacherInfo} from '../../../../../modules/teacherInfo';
let ID;
const TeacherInfoContainer = ({navigation, route}) => {
  const info = route.params?.info ?? null;
  const teacherId = route.params?.teacherId ?? null;

  const {loading, data, error} = useSelector(
    (state) => state.teacherInfo.teacherInfo,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    info === null ? (ID = teacherId) : (ID = info.id);
    dispatch(getTeacherInfo(ID));
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
