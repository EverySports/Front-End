import React from 'react';
import {View, Text} from 'react-native';
import PaymentDetailPresenter from './PaymentDetailPresenter';
import {useSelector} from 'react-redux';
// userSchedule: user,
//   classInfo: classInfo,
const PaymemtDetailContainer = ({navigation, route}) => {
  const [userSchedule, info] = [
    route.params?.userSchedule ?? null,
    route.params?.info ?? null,
  ];
  const {data} = useSelector((state) => state.user.userInfo);

  if (!data) return null;
  return (
    <PaymentDetailPresenter
      userSchedule={userSchedule}
      classInfo={info}
      userInfo={data}
    />
  );
};

export default PaymemtDetailContainer;
