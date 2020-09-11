import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './src/screens/Login/LoginStackNavigator';
import BottomTabNavigator from './src/screens/Main/BottomTabNavigator';

const AppSwitchNavigator = createSwitchNavigator(
  {
    login: Login,
    main: BottomTabNavigator,
  },
  {
    initialRouteName: 'login',
  },
);

export default createAppContainer(AppSwitchNavigator);
