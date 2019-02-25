import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableNativeFeedback } from 'react-native';

import profilePicture from "../assets/images/profileimage.jpg";
import plusIcon from "../assets/icons/plus.png";
import gridIcon from "../assets/icons/grid.png";

import img1 from "../assets/images/testimage.jpg";
import img2 from "../assets/images/ti2.jpg";
import img3 from "../assets/images/ti3.jpg";
import img4 from "../assets/images/ti4.jpg";
import img5 from "../assets/images/ti5.jpg";
import img6 from "../assets/images/ti6.jpg";
import img7 from "../assets/images/ti7.jpg";
import img8 from "../assets/images/ti8.jpg";
import img9 from "../assets/images/ti9.jpg";

export default class ProfilePage extends Component {
    state = {
        user: {
            username: 'michaelmly',
            bio: 'camera . travel',
            profilePicture: profilePicture,
            pictures: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img5, img2]
        }
    }

    render() {
        return (

            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.profileInfo}>

                        <View style={styles.pictureStoryContainer}>
                            <View style={styles.profilePictureContainer}>
                                <Image style={styles.profilePicture} source={this.state.user.profilePicture} />
                            </View>
                            <View style={styles.plusIconContainer}>
                                <Image style={styles.plusIcon} source={plusIcon} />
                            </View>
                        </View>

                        <View style={styles.profileStatsEditContainer}>
                            <View style={styles.profileStatContainer}>
                                <View style={styles.profileStat}>
                                    <Text style={[styles.boldText, styles.blackText, styles.largeFont]}>11</Text>
                                    <Text>posts</Text>
                                </View>
                                <View style={styles.profileStat}>
                                    <Text style={[styles.boldText, styles.blackText, styles.largeFont]}>11m</Text>
                                    <Text>Followers</Text>
                                </View>
                                <View style={styles.profileStat}>
                                    <Text style={[styles.boldText, styles.blackText, styles.largeFont]}>11</Text>
                                    <Text>Following</Text>
                                </View>
                            </View>

                            <TouchableNativeFeedback>
                                <View style={styles.profileEditButton}>
                                    <Text style={styles.buttonText}>Edit Profile</Text>
                                </View>
                            </TouchableNativeFeedback>

                        </View>

                    </View>

                    <View style={styles.profileBio}>
                        <Text style={styles.profileBioUsername}>{this.state.user.username}</Text>
                        <Text style={styles.profileBioText}>{this.state.user.bio}</Text>
                    </View>

                    <View style={styles.menuBar}>
                        <Image style={[styles.menuIcon, {tintColor: '#4c9ef7'}]} source={gridIcon}/>
                        <Image style={[styles.menuIcon]} source={gridIcon}/>
                        <Image style={[styles.menuIcon]} source={gridIcon}/>
                    </View>

                    <View style={styles.imageContainer}>

                        {this.state.user.pictures.map((picture, i) => {
                            return (
                                <View style={styles.images} key={i}>
                                    <Image style={styles.image} source={picture}/>
                                </View>
                            )
                        })}

                    </View>
                </ScrollView>
            </View>


        );
    }
}

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    boldText: {
        fontWeight: '500'
    },

    blackText: {
        color: 'black'
    },
    
    largeFont: {
        fontSize: 16
    },

    container: {
        backgroundColor: "#FFFFFF",
        flex: 15
    },

    profileInfo: {
        flexDirection: 'row',
        padding: 10,
        paddingTop: 20,
        paddingBottom: 20
    },

    pictureStoryContainer: {
        position: 'relative',
        marginRight: 10
    },

    profilePictureContainer: {
        height: 75,
        width: 75,
        borderRadius: 100,
        alignItems: 'center',
        overflow: 'hidden'
    },

    profilePicture: {
        resizeMode: 'contain',
        height: '100%'
    },

    plusIconContainer: {
        height: 20,
        width: 20,
        borderRadius: 100,
        backgroundColor: '#4c9ef7',
        position: 'absolute',
        left: 60,
        bottom: -1,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },

    plusIcon: {
        resizeMode: 'contain',
        height: '75%',
        tintColor: '#FFFFFF'
    },

    profileStatsEditContainer: {
        flex: 1,
        justifyContent: 'flex-start'
    },

    profileStatContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    },

    profileStat: {
        alignItems: 'center'
    },

    profileEditButton: {
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        padding: 3,
        borderWidth: 1,
        borderColor: '#ECECEC',
        borderRadius: 5
    },

    buttonText: {
        color: 'black',
        fontSize: 12
    },

    profileBio: {
        padding: 10
    },

    profileBioUsername: {
        color: 'black',
        fontWeight: '500',
        fontSize: 14
    },

    profileBioText: {
        color: 'black',
        fontSize: 12
    },

    menuBar: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ECECEC'
    },

    menuIcon: {
        resizeMode: 'contain',
        height: '50%',
        tintColor: 'grey'
    },

    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    images: {
        width: screenWidth / 3 - 2,
        height: screenWidth / 3,
        margin: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },

    image: {
        height: '100%',
        width: '100%'
    }
})