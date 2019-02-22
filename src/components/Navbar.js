import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'react-router-native';

import homeIcon from "../assets/icons/home.png";
import searchIcon from "../assets/icons/search.png";
import plusIcon from "../assets/icons/plus-square.png";
import likeIcon from "../assets/icons/like.png";
import profileIcon from "../assets/icons/profile.png";

const Navbar = () => {
    return (
        <View style={styles.container}>
            <Link to="/"><Image style={styles.icon} source={homeIcon}/></Link>
            <Image style={styles.icon} source={searchIcon}/>
            <Image style={styles.icon} source={plusIcon}/>
            <Image style={styles.icon} source={likeIcon}/>
            <Link to="/profile"><Image style={styles.icon} source={profileIcon}/></Link>
        </View>
    );
}

export default Navbar;

const styles = StyleSheet.create({
    container: {
        elevation: 10,
        flexDirection: "row",
        flex: 1,
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 2,
        borderColor: '#ECECEC'
    },

    icon: {
        resizeMode: 'contain',
        height: 24
    }
})