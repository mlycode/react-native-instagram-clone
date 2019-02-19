import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

import HomePage from './src/containers/homePage';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomePage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
