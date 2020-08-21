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
            outputRange: [0.3, 1, 0.3],
          });
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, -50, 100],
          });
          return (
            <>
              {index === 0 && <View style={styles.emptyspace} />}
              <View style={styles.contentsContainer}>
                <Animated.View style={styles.contents(translateY, opacity)}>
                  <Text style={styles.txtName}>{item.name}</Text>
                  <Image source={item.img} style={styles.imgSports} />
                  <View style={styles.contentsInfo}>
                    <TouchableOpacity>
                      <LinearGradient
                        style={styles.btnStart}
                        colors={colors}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}}>
                        <AntDesign name="play" style={styles.icon} />
                        <Text style={styles.txtStart}>
                          {item.name} 시작하기
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </Animated.View>
              </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  contentsContainer: {
    width: ITEM_WIDTH,
    backgroundColor: '#fff',
  },
  contents: (translateY, opacity) => ({
    width: ITEM_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: SPACING,
    padding: SPACING * 2,
    paddingTop: 5,
    backgroundColor: '#fff',
    borderRadius: 0,
    transform: [{translateY}],
    opacity: opacity,
    marginTop: 0,
  }),

  imgSports: {
    width: ITEM_WIDTH * 0.95,
    height: ITEM_HEIGHT * 0.85,
    marginRight: SPACING,
    borderRadius: 10,
    opacity: 0.9,
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
