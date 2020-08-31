// import React, {useState, useEffect} from 'react';
// import {Platform, KeyboardAvoidingView, SafeAreaView} from 'react-native';
// import {GiftedChat} from 'react-native-gifted-chat';
// import Fire from '../Fire';

// const ChatRoomPresenter = ({name}) => {
//   const [state, setState] = useState({
//     messages: [],
//   });

//   const user = {
//     id: Fire.uid,
//     name: name,
//   };

//   useEffect(() => {
//     Fire.get((message) =>
//       setState((prev) => ({
//         messages: GiftedChat.append(prev.messages, message),
//       })),
//     );
//     // return Fire.off();
//   }, []);

//   const chat = (
//     <GiftedChat messages={state.messages} onSend={Fire.send} user={user} />
//   );

//   if (Platform.OS === 'android') {
//     return (
//       <KeyboardAvoidingView
//         style={{flex: 1}}
//         behavior="padding"
//         keyboardVerticalOffset={30}
//         enabled>
//         {chat}
//       </KeyboardAvoidingView>
//     );
//   }

//   return <SafeAreaView style={{flex: 1}}>{chat}</SafeAreaView>;
// };

// export default ChatRoomPresenter;

import React, {Component} from 'react';
import {Platform, KeyboardAvoidingView, SafeAreaView} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Fire from '../Fire';

export default class ChatRoomPresenter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> ChatRoomPresenter </Text>
      </View>
    );
  }
}
