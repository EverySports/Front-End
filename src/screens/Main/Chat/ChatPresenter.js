import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatListItem from '../../../components/ChatScreens/ChatListItem';
const {width} = Dimensions.get('window');

const ChatPresenter = ({navigation, ...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons style={styles.icon} name="chatbubble-outline" size={25} />
        <Text style={styles.txtHeader}>Every 채팅</Text>
      </View>
      {/* contents */}
      <ScrollView>
        <View>
          <View style={styles.contentsTitle}>
            <Text style={styles.txtMyClassTitle}>담당 PT 트레이너 채팅방</Text>
            <Text style={styles.txtMatching}>담당 트레이너 : 2명</Text>
          </View>

          <ChatListItem navigation={navigation} />
          <ChatListItem navigation={navigation} />
        </View>
        <View>
          <View style={styles.contentsTitle}>
            <Text style={styles.txtMyClassTitle}>상담/문의 채팅방</Text>
          </View>

          <ChatListItem navigation={navigation} />
        </View>

        {/* footer */}
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.txtFooter}>
          상대방과의 원활한 채팅활동을 위해 EverySports는
        </Text>
        <Text style={styles.txtFooter}>
          채팅내용을 저장하여 관리하고 있습니다.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ChatPresenter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  icon: {
    color: '#343a40',
  },
  iconDelete: {
    color: '#fff',
  },
  txtHeader: {
    color: '#343a40',
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 10,
  },
  contentsTitle: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtMyClassTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
    color: '#495057',
  },
  txtMatching: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingRight: 10,
    color: '#495057',
  },
  chatList: {
    paddingBottom: 10,
  },
  footer: {
    width: width,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
    paddingVertical: 10,
  },
  txtFooter: {
    fontSize: 11,
    color: '#868e96',
  },
});
