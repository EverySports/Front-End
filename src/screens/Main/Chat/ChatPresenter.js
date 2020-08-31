import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import ChatIcon from '../../../assets/img/chat.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
const CIRCLE_SIZE = 600;

const ChatPresenter = ({navigation}) => {
  const [state, setState] = useState('');

  const onPress = () => {
    navigation.navigate('ChatRoom', {
      name: state.name,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.contents}>
        <Image source={ChatIcon} style={styles.img} />
        <Text style={styles.txtHeader}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="DesignIntoCode"
          onChange={(name) => setState(name)}
          value={state.name}
        />
        <View style={{alignItems: 'flex-end', marginTop: 64}}>
          <TouchableOpacity style={styles.continue} onPress={onPress}>
            <AntDesign name="arrowright" size={32} style={{color: '#fff'}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatPresenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: '#fff',
    position: 'absolute',
    left: -150,
    top: -50,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 150,
    alignSelf: 'center',
    marginTop: 64,
  },
  contents: {
    marginTop: 32,
    marginHorizontal: 32,
    height: 100,
  },
  txtHeader: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#514E5A',
    marginTop: 32,
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: 2,
    width: 250,
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 30,
    borderColor: '#339af0',
    marginHorizontal: 62,
    fontWeight: 'bold',
  },
  continue: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: '#339af0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
