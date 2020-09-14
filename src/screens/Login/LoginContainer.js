import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import EverySportsLogo from '../../assets/img/splash.png';
import AnimatedSplash from 'react-native-animated-splash-screen';
import LoginPresenter from './LoginPresenter';
const {width} = Dimensions.get('window');

const LoginContainer = ({navigation}) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);
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
