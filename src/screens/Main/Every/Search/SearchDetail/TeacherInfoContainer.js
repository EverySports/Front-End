import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import TeacherInfoPresenter from './TeacherInfoPresenter';
import {getTeacherInfo} from '../../../../../modules/teacherInfo';
import Loading from '../../../../../components/Common/Loading';
import Error from '../../../../../components/Common/Error';

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
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data) return null;

  return (
    <TeacherInfoPresenter navigation={navigation} route={route} info={data} />
  );
};

export default TeacherInfoContainer;
