import React from 'react';
import {View, Text} from 'react-native';
import PaymentDetailPresenter from './PaymentDetailPresenter';
import {useSelector} from 'react-redux';

const PaymemtDetailContainer = ({navigation, route}) => {
  const [userSchedule, userAndTeacherSchedule, info] = [
    route.params?.userSchedule ?? null,
    route.params?.userAndTeacherSchedule ?? null,
    route.params?.info ?? null,
  ];
  const {data} = useSelector((state) => state.user.userInfo);

  if (!data) return null;
  return (
    <PaymentDetailPresenter
      navigation={navigation}
      userSchedule={userSchedule}
      userAndTeacherSchedule={userAndTeacherSchedule}
      classInfo={info}
      userInfo={data}
    />
  );
};

export default PaymemtDetailContainer;
