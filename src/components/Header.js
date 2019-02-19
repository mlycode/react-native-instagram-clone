import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.layout}>
            <Text>Instagram</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    layout: {
        flexDirection: "row",
        flex: 1,
        backgroundColor: 'orangered'
    }
})