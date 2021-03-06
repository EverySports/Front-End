/**
 * @format
 */
import React from 'react';
import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './src/modules';

YellowBox.ignoreWarnings(['Require cycle:']);
YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);
const store = configureStore;
const EverySportsApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => EverySportsApp);
