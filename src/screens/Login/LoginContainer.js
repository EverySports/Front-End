import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getUserInfo} from '../../modules/user';
import EverySportsLogo from '../../assets/img/splash.png';
import AnimatedSplash from 'react-native-animated-splash-screen';
import LoginPresenter from './LoginPresenter';

const {width} = Dimensions.get('window');

const LoginContainer = ({navigation}) => {
  const [loaded, setLoaded] = useState(false);
  const {loading, data, error} = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);

    dispatch(getUserInfo());
    // navigation.navigate('main');
  }, []);

  if (loading)
    return (
      <View>
        <Text>로딩중</Text>
      </View>
    );
  if (error)
    return (
      <View>
        <Text>에러</Text>
      </View>
    );
  if (!data) return null;

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={loaded}
      logoImage={EverySportsLogo}
      backgroundColor={'#fff'}
      logoHeight={width}
      logoWidth={width}>
      <LoginPresenter navigation={navigation} />
    </AnimatedSplash>
  );
};

export default LoginContainer;
