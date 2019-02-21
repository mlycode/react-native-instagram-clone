import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const UserPost = (props) => {
    return (
        <View style={styles.container}>

            <View style={styles.heading}>
                <Text>{props.username}</Text>
            </View>

            <View style={styles.imageContainer}>
                <Text>Image</Text>
            </View>

            <View style={styles.likes}>
                <Text>Likes</Text>
            </View>

            <View style={styles.comment}>
                <Text>Comment</Text>
            </View>

            <View style={styles.addComment}>
                <Text>add comment</Text>
            </View>

            <View style={styles.timeAgo}>
                <Text>Time added</Text>
            </View>
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
        backgroundColor: 'lightblue',
        height: 50
    },

    imageContainer: {
        height: screenWidth,
        backgroundColor: 'orangered'
    },

    likes: {
        height: 40,
        backgroundColor: 'pink'
    },

    comment: {
        height: 50,
        backgroundColor: 'green'
    },

    addComment: {
        height: 50,
        backgroundColor: 'yellow'
    },

    timeAgo: {
        height: 20,
        backgroundColor: 'purple'
    }
})