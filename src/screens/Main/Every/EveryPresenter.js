import React, {useRef} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';
import Category from '../../../components/Category';
import Slide from '../../../components/Slide';
import LinearGradient from 'react-native-linear-gradient';

const HEADER_HEIGHT = 200;

const EveryPresenter = ({classes, navigation}) => {
  const scrollA = useRef(new Animated.Value(0)).current;
  const {hotClasses, newClasses} = classes;
  const colors = ['#99e9f2', '#ffffff'];
  // const colors = ['#FFEEEE', '#DDEFBB'];
  return (
    <Animated.ScrollView
      style={styles.container}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollA}}}], {
        useNativeDriver: true,
      })}
      scrollEventThrottle={16}>
      <Animated.View style={styles.header(scrollA)}>
        <LinearGradient
          colors={colors}
          style={{
            height: HEADER_HEIGHT,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <Animated.Text style={styles.headerText(scrollA)}>
            <Text>나만의 트레이너 찾기</Text>
          </Animated.Text>
        </LinearGradient>
      </Animated.View>

      <View style={styles.contentsWrap}>
        <View style={styles.contents}>
          <View style={styles.categoryWrap}>
            <Text style={styles.contentsHeader}>카테고리별 찾기</Text>
            <View style={styles.categoryContainer}>
              <Category name="요가" navigation={navigation} />
              <Category name="필라테스" navigation={navigation} />
            </View>
            <View style={styles.categoryContainer}>
              <Category name="헬스" navigation={navigation} />
              <Category name="다이어트" navigation={navigation} />
            </View>
          </View>
          <Slide key={1} headText="HOT Class" info={hotClasses} />
          <Slide key={2} headText="NEW Class" info={newClasses} />
        </View>
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: (scrollA) => ({
    height: HEADER_HEIGHT,
    backgroundColor: 'white',
    justifyContent: 'center',
    transform: [
      {
        translateY: scrollA,
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT / 2, HEADER_HEIGHT],
          outputRange: [1, 1, 1, 1],
        }),
      },
    ],
  }),
  headerText: (scrollA) => ({
    position: 'absolute',
    marginTop: 0,
    marginLeft: 20,
    bottom: 50,
    fontSize: 24,
    color: '#495057',
    fontWeight: 'bold',
    opacity: scrollA.interpolate({
      inputRange: [0, HEADER_HEIGHT / 4, HEADER_HEIGHT / 2],
      outputRange: [1, 0.05, 0],
      extrapolate: 'clamp',
    }),
  }),

  contentsWrap: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 5,
    backgroundColor: '#ffffff',
  },
  contents: {
    justifyContent: 'center',
  },
  categoryWrap: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  contentsHeader: {
    fontSize: 18,
    color: '#495057',
    fontWeight: '800',
    paddingLeft: 15,
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default EveryPresenter;
