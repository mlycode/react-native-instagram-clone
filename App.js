import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';

import HomePage from './src/containers/homePage';
import Header from './src/components/Header';
import Navbar from './src/components/Navbar';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <HomePage />
        <Navbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  }
})