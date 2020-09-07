import React from 'react';
import {View, Text} from 'react-native';
import DataPresenter from './DataPresenter';
const DataContainer = ({navigation}) => {
  return <DataPresenter navigation={navigation} />;
};

export default DataContainer;
