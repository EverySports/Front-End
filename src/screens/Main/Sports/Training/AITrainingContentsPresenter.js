import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  SafeAreaView,
  Animated,
} from 'react-native';
import {sports} from './utile';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = height * 0.66;
const SPACER_ITEM_WIDTH = (width - ITEM_WIDTH) / 2;
const SPACING = 0;
const colors = ['#007991', '#78ffd6'];

const AITrainingContents = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.index}
        data={sports}
        snapToInterval={ITEM_WIDTH}
        decelerationRate={0}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.1, 1, 0.1],
          });
          const translateY = scrollX.interpolate({
            inputRange,
            // outputRange: [30, -20, 30],
            outputRange: [0, 0, 0],
          });
          return (
            <>
              {index === 0 && <View style={styles.emptyspace} />}
              {/*  */}
              {/*  */}
              {/*  */}
              <Animated.View style={styles.contents(translateY, opacity)}>
                <Image source={item.img} style={styles.imgSports} />
                <View
                  style={{
                    position: 'absolute',
                    width: ITEM_WIDTH,
                    backgroundColor: 'red',
                    bottom: height - ITEM_HEIGHT,
                    height: 10,
                    borderWidth: 1,
                  }}></View>
              </Animated.View>
              {/*  */}
              {/*  */}
              {/*  */}
              {index === sports.length - 1 && (
                <View style={styles.emptyspace} />
              )}
            </>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emptyspace: {
    width: SPACER_ITEM_WIDTH,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  contentsContainer: {
    width: ITEM_WIDTH,
    backgroundColor: '#fff',
  },
  contents: (translateY, opacity) => ({
    width: ITEM_WIDTH,
    marginHorizontal: SPACING,
    padding: SPACING * 2,
    // backgroundColor: 'red',
    borderRadius: 0,
    transform: [{translateY}],
    opacity: opacity,
    marginTop: 0,
    // borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  }),

  imgSports: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT - 0,
    marginRight: SPACING,
    opacity: 0.95,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 80,
  },
  contentsInfo: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
    width: ITEM_WIDTH * 0.95,
  },
  btnStart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  txtName: {
    marginTop: 80,
    marginBottom: 10,
    fontSize: 25,
    color: '#12b886',
    fontWeight: 'bold',
  },
  icon: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    marginRight: 10,
  },
  txtStart: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default AITrainingContents;
