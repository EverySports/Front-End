import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Loading from './src/screens/Loading';
import Login from './src/screens/Login/Login';
import BottomTabNavigator from './src/screens/Main/BottomTabNavigator';

const AppSwitchNavigator = createSwitchNavigator(
  {
    loading: Loading,
    login: Login,
    main: BottomTabNavigator,
  },
  {
    initialRouteName: 'loading',
  },
);

export default createAppContainer(AppSwitchNavigator);
