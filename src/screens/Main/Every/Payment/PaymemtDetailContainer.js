import React from 'react';
import {View, Text} from 'react-native';
import PaymentDetailPresenter from './PaymentDetailPresenter';
// userSchedule: user,
//   classInfo: classInfo,
const PaymemtDetailContainer = ({navigation, route}) => {
  const [userSchedule, info] = [
    route.params?.userSchedule ?? null,
    route.params?.info ?? null,
  ];

  return <PaymentDetailPresenter userSchedule={userSchedule} info={info} />;
};

export default PaymemtDetailContainer;
