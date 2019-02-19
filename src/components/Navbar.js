import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = () => {
    return (
        <View style={styles.layout}>
            <Text>Navbar</Text>
        </View>
    );
}

export default Navbar;

const styles = StyleSheet.create({
    layout: {
        flexDirection: "row",
        flex: 1,
        backgroundColor: 'orangered'
    }
})