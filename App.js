import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import Loading from './src_/screens/Loading';
// import Login from './src_/screens/Login/Login';
//import BottomTabNavigator from './src_/screens/Main/BottomTabNavigator';
import Loading from './src_/screens/Loading';
import Login from './src_/screens/Login/Login';
import BottomTabNavigator from './src_/screens/Main/BottomTabNavigator';

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
