import React from 'react';
import { AppRegistry } from 'react-native';
//import App from './App';
//import { Text } from 'react-native';
import Header from './src/components/header';

const App = () => (
  <Header />
);


AppRegistry.registerComponent('RNTest', () => App);
