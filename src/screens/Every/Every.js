import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const temp = () => {
  return (
    <View style={styles.container}>
      <Text>temp</Text>
    </View>
  );
};

const Every = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="temp"
        options={{headerShown: false}}
        component={temp}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Every;

{
  /* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="asd"
          component={asd}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer> */
}
