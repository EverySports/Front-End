import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import ChatIcon from '../../assets/img/chat.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {width} = Dimensions.get('window');

const ChatListItem = ({navigation, name, text}) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}>
      <TouchableOpacity style={styles.chatListItem}>
        <Image source={ChatIcon} style={styles.imgProfile} />

        <View style={styles.chatInfo}>
          <Text style={styles.txtName}>{name} 트레이너</Text>
          <Text style={styles.txtLastChat} numberOfLines={1}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.hide}>
        <AntDesign name="delete" size={25} style={styles.iconDelete} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chatListItem: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: width,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  chatInfo: {
    width: width * 0.55,
    justifyContent: 'center',
  },
  txtName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#495057',
    marginBottom: 5,
    overflow: 'hidden',
  },
  txtLastChat: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#868e96',

    width: 300,
  },
  hide: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff8787',
    width: 100,
    borderRadius: 10,
  },
  iconDelete: {
    color: '#fff',
  },
});

export default ChatListItem;
