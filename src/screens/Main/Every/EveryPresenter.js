import React, {useRef} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';
import Category from '../../../components/EveryScreens/Category';
import Slide from '../../../components/EveryScreens/Slide';
import LinearGradient from 'react-native-linear-gradient';

const HEADER_HEIGHT = 200;

const EveryPresenter = ({classes, navigation}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const {hotClasses, newClasses} = classes;
  const colors = ['#9796f0', '#fbc7d4', '#fff'];

  return (
    <Animated.ScrollView
      ref={scrollY}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
      scrollEventThrottle={16}>
      <Animated.View style={styles.header(scrollY)}>
        <LinearGradient
          colors={colors}
          start={{x: 0, y: 0}}
          end={{x: 2, y: 3}}
          style={{
            height: HEADER_HEIGHT,
          }}>
          <Animated.Text style={styles.headerText(scrollY)}>
            <Text>나만의 트레이너 찾기</Text>
          </Animated.Text>
        </LinearGradient>
      </Animated.View>
      <View style={styles.contentsContainer}>
        <View style={styles.contents}>
          <View style={styles.categoryContainer}>
            <Text style={styles.contentsHeader}>카테고리별 찾기</Text>
            <View style={styles.categoryGroup}>
              <Category name="요가" navigation={navigation} />
              <Category name="필라테스" navigation={navigation} />
            </View>
            <View style={styles.categoryGroup}>
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
  header: (scrollY) => ({
    height: HEADER_HEIGHT,
    justifyContent: 'center',
    transform: [
      {
        translateY: scrollY,
      },
    ],
  }),
  headerText: (scrollY) => ({
    position: 'absolute',
    bottom: 60,
    marginTop: 0,
    marginLeft: 20,
    fontSize: 24,
    // color: '#495057',
    color: '#fff',
    fontWeight: 'bold',
    opacity: scrollY.interpolate({
      inputRange: [0, HEADER_HEIGHT / 4, HEADER_HEIGHT / 2],
      outputRange: [1, 0.05, 0],
      extrapolate: 'clamp',
    }),
  }),

  contentsContainer: {
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
  categoryContainer: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  contentsHeader: {
    fontSize: 18,
    color: '#495057',
    fontWeight: '700',
    paddingLeft: 15,
    marginBottom: 10,
  },
  categoryGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default EveryPresenter;
