import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PaymentPresenter from './PaymentPresenter';
import {getSchedule} from '../../../../modules/schedule';
const PaymentContainer = ({navigation, route}) => {
  const info = route.params?.info ?? null;
  const [classID, teacherID] = [
    info.class_Info.class_ID,
    info.teacher_Info.teacher_ID,
  ];
  const {loading, data, error} = useSelector(
    (state) => state.schedule.schedule,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSchedule());
  }, [dispatch]);

  if (loading)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'tomato',
        }}>
        <Text>로딩중</Text>
      </View>
    );
  if (error)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'tomato',
        }}>
        <Text>에러</Text>
      </View>
    );
  if (!data.userSchedule && !data.teacherSchedule) return null;
  return (
    <PaymentPresenter
      navigation={navigation}
      schedule={data}
      classInfo={info}
    />
  );
};

export default PaymentContainer;
