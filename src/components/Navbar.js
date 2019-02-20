import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Link } from 'react-router-native';

const Navbar = () => {
    return (
        <View style={styles.layout}>
            <Link to="/"><Text>Home</Text></Link>
            <Link to="/profile"><Text>Profile</Text></Link>
        </View>
    );
}

export default Navbar;

const styles = StyleSheet.create({
    layout: {
        flexDirection: "row",
        flex: 1,
        backgroundColor: '#FAFAFA'
    }
})