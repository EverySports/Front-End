import React, {Component} from 'react';
import ReactNative from 'react-native';
const {View, StyleSheet, Animated, Dimensions} = ReactNative;

const SQUARE_H = 100;
const SQUARE_W = 100;
const WINDOW_H = Dimensions.get('window').height;
const WINDOW_W = Dimensions.get('window').width;

export default class MovingSquare extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: new Animated.Value(0),
    };
  }

  componentWillMount() {
    this.translateX = this.state.value.interpolate({
      inputRange: [0, 1],
      outputRange: [0, WINDOW_W / 2],
      // extrapolate : 'extend' | 'identity' | 'clamp',
      // extrapolateRight : 'extend' | 'identity' | 'clamp',
      // extrapolateLeft : 'extend' | 'identity' | 'clamp',
    });

    this.rotate = this.state.value.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
  }

  componentDidMount() {
    Animated.timing(this.state.value, {
      duration: 1000,
      toValue: 1,
      delay: 200,
    }).start();
  }

  getTransform() {
    return {
      transform: [{translateX: this.translateX}, {rotate: this.rotate}],
    };
  }

  render() {
    return <Animated.View style={[s.square, this.getTransform()]} />;
  }
}

const s = StyleSheet.create({
  square: {
    height: SQUARE_H,
    width: SQUARE_W,
    backgroundColor: '#ff0000',
  },
});
