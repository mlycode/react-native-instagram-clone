import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';

import HomePage from './src/containers/homePage';
import ProfilePage from './src/containers/profilePage';
import Header from './src/components/Header';
import Navbar from './src/components/Navbar';


export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Header />

          <Route exact path="/" component={HomePage} />
          <Route path="/profile" component={ProfilePage} />

          <Navbar />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  }
})