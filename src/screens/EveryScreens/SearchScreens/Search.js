import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SearchClass from './SearchClass';
import SearchTrainer from './SearchTrainer';

const {width} = Dimensions.get('window');

const Search = ({navigation}) => {
  const [state, setState] = useState('class');
  return (
    <View style={styles.container}>
      <View style={styles.menugroup}>
        <TouchableOpacity onPress={() => setState('class')}>
          <View style={styles.menu}>
            <Text style={styles.menuText}>클래스 찾기</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setState('trainer')}>
          <View style={styles.menu}>
            <Text style={styles.menuText}>트레이너 찾기</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.pointerContainer}>
        <View style={pointer(state)} />
      </View>
      {state === 'class' ? (
        <SearchClass navigation={navigation} />
      ) : (
        <SearchTrainer />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  menugroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menu: {
    height: 30,
    width: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    color: '#495057',
    fontSize: 16,
    fontWeight: '600',
  },
  pointerContainer: {
    flexDirection: 'row',
  },
  pointerBox: {
    height: 1,
    width: width / 4,
    borderWidth: 1,
    borderColor: '#495057',
  },
  pointer: {
    width: width / 2,
    height: 10,
    backgroundColor: 'black',
  },
});

const pointer = (state) => {
  return {
    marginLeft: state === 'trainer' ? (width * 5) / 8 : width / 8,
    height: 1,
    width: width / 4,
    borderWidth: 1,
    borderColor: '#495057',
    marginBottom: 5,
  };
};

export default Search;
