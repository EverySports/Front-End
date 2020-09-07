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
const ITEM_WIDTH = width * 0.8;
const ITEM_HEIGHT = height * 0.66;
const SPACER_ITEM_WIDTH = (width - ITEM_WIDTH) / 2;
const SPACING = 10;
const colors = ['#007991', '#78ffd6'];

const AITrainingContents = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          paddingVertical: 10,
          marginBottom: 10,
        }}>
        <Text
          style={{
            color: '#228be6',
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          EverySports에서 즐길 수 있는 AI 트레이닝을 확인해보세요!
        </Text>
      </View>
      <Animated.FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.index}
        data={sports}
        snapToInterval={ITEM_WIDTH + SPACING * 2}
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
            outputRange: [0.5, 1, 0.5],
          });
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [30, 0, 30],
          });
          return (
            <>
              {index === 0 && <View style={styles.emptyspace} />}
              <TouchableOpacity>
                <Animated.View style={styles.contents(translateY, opacity)}>
                  <Image source={item.img} style={styles.imgSports} />
                </Animated.View>
              </TouchableOpacity>

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
    width: SPACER_ITEM_WIDTH - SPACING,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentsContainer: {
    width: ITEM_WIDTH,
    backgroundColor: '#fff',
  },
  contents: (translateY, opacity) => ({
    width: ITEM_WIDTH,
    marginHorizontal: SPACING,
    // padding: SPACING * 2,
    borderRadius: 0,
    transform: [{translateY}],
    opacity: opacity,
    marginTop: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  }),

  imgSports: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    marginRight: SPACING,
    opacity: 0.95,
    borderRadius: 10,
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
});

export default AITrainingContents;
