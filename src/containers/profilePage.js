import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class ProfilePage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>profilePage</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightblue",
        flex: 10
    }
})