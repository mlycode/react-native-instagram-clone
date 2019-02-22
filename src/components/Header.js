import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import logo from "../assets/logo.png";
import cameraIcon from "../assets/icons/camera.png";
import mailIcon from "../assets/icons/mail.png";

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Image
                source={cameraIcon}
                style={styles.icon}
            />
            <Image
                source={logo}
                style={styles.logo}
            />
            <Image
                source={mailIcon}
                style={styles.icon}
            />
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        flex: 1,
        backgroundColor: '#FAFAFA',
        elevation: 8,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 4
    },

    logo: {
        resizeMode: 'contain',
        width: '20%',
        marginRight: 'auto'
    },

    icon: {
        resizeMode: 'contain',
        width: 25,
        margin: 10,
        marginTop: 4
    }
})