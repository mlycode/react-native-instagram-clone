import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TextInput } from 'react-native';

import menuIcon from '../assets/icons/menu.png';
import liked from '../assets/icons/liked.png';
import comment from "../assets/icons/comment.png";
import mail from "../assets/icons/mail.png";
import bookmark from "../assets/icons/bookmark.png";

const UserPost = (props) => {
    return (
        <View style={styles.container}>

            <View style={styles.heading}>
                <View style={styles.profileImageContainer}>
                    <Image style={styles.profileImage} source={props.profileImage} />
                </View>
                <View style={styles.headingText}>
                    <Text style={styles.headingUsername}>{props.username}</Text>
                    <Text style={styles.headingLocation}>{props.location}</Text>
                </View>
                <Image style={styles.menuIcon} source={menuIcon} />
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={props.picture} />
            </View>

            <View style={styles.imageFooter}>
                <Image style={styles.imageFooterIcon} source={liked} />
                <Image style={styles.imageFooterIcon} source={comment} />
                <Image style={styles.imageFooterIcon} source={mail} />
                <Image style={[styles.imageFooterIcon, styles.imageFooterIconBookmark]} source={bookmark} />
            </View>

            <View style={styles.likesContainer}>
                <View style={[styles.likesProfileImageContainer, styles.likes1]}>
                    <Image style={styles.likesProfileImage} source={props.profileImage} />
                </View>
                <View style={[styles.likesProfileImageContainer, styles.likes2]}>
                    <Image style={styles.likesProfileImage} source={props.profileImage} />
                </View>
                <View style={[styles.likesProfileImageContainer, styles.likes3]}>
                    <Image style={styles.likesProfileImage} source={props.profileImage} />
                </View>

                <View style={styles.likedByTextContainer}>
                    <Text style={styles.likedByText}>Liked by <Text style={[styles.boldText, styles.likedByText]}>subwaydude_</Text> and <Text style={[styles.boldText, styles.likedByText]}>18 others</Text></Text>
                </View>
            </View>

            <View style={styles.comment}>
                <Text style={styles.commentText}><Text style={[styles.boldText, styles.commentText]}>{props.username}</Text> {props.comment}</Text>
            </View>

            <View style={styles.addComment}>
                <View style={styles.UserImageContainer}>
                    <Image style={styles.UserImage} source={props.addCommentImage}/>
                </View>
                <TextInput placeholder="Add a comment..."/>
            </View>

            <Text style={styles.timeAgo}>{props.timePosted}</Text>

        </View>
    );
}

export default UserPost;

let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },

    heading: {
        height: 45,
        flexDirection: 'row',
        alignItems: 'center'
    },

    profileImageContainer: {
        height: 30,
        width: 30,
        borderRadius: 100,
        margin: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },

    profileImage: {
        height: '100%',
        width: '100%'
    },

    headingText: {
        marginRight: 'auto'
    },

    headingUsername: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 13,
        color: 'black'
    },

    headingLocation: {
        fontSize: 11,
        lineHeight: 12,
        color: 'black'
    },

    menuIcon: {
        resizeMode: 'contain',
        width: 20,
        margin: 10,
        tintColor: 'grey'
    },

    imageContainer: {
        height: screenWidth,
        alignItems: 'center'
    },

    image: {
        resizeMode: 'contain',
        height: '100%'
    },

    imageFooter: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },

    imageFooterIcon: {
        resizeMode: 'contain',
        width: 25,
        marginLeft: 10
    },

    imageFooterIconBookmark: {
        marginLeft: 'auto',
        marginRight: 10
    },

    likesContainer: {
        height: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },

    likesProfileImageContainer: {
        height: 20,
        width: 20,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        marginRight: -8,
        alignItems: 'center',
        overflow: 'hidden',
        justifyContent: 'center'
    },

    likes1: {
        zIndex: 10,
        marginLeft: 10
    },

    likes2: {
        zIndex: 5
    },

    likes3: {

    },

    likesProfileImage: {
        height: '100%',
        width: '100%'
    },

    likedByTextContainer: {
        marginLeft: 15
    },

    likedByText: {
        color: 'black',
        fontSize: 11,
        lineHeight: 12
    },

    boldText: {
        fontWeight: '500'
    },

    comment: {
        marginLeft: 10,
        marginRight: 10
    },

    commentText: {
        fontSize: 11,
        color: 'black'
    },

    addComment: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    UserImageContainer: {
        height: 25,
        width: 25,
        borderRadius: 100,
        marginLeft: 10,
        marginRight: 5,
        alignItems: 'center',
        overflow: 'hidden'
    },

    UserImage: {
        resizeMode: 'contain',
        height: '100%'
    },

    timeAgo: {
        marginLeft: 10,
        fontSize: 8,
        lineHeight: 8,
        marginTop: -5,
        textTransform: 'uppercase'
    }
})