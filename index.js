import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import Albumlist from './src/components/Albumlist';

const App = () => (
  <View>
    <Header />
    <Albumlist />
  </View>
);

AppRegistry.registerComponent('RNTest', () => App);
