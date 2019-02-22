import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import UserPost from '../components/UserPost';
import testImage from "../assets/images/testimage.jpg";
import profileImage from "../assets/images/profileimage.jpg";

export default class HomePage extends Component {
    state = {
        posts: [
            {
                username: 'ozzy_dl',
                profileImage: profileImage,
                key: 'id1',
                location: 'London, United Kingdom',
                picture: testImage,
                comment: 'First trip to New York!',
                timePosted: '5 hours ago'
            },
            {
                username: 'therageart',
                profileImage: profileImage,
                key: 'id2',
                location: 'London, United Kingdom',
                picture: testImage,
                comment: 'First trip to New York!',
                timePosted: '5 hours ago'
            },
            {
                username: 'michaelmly',
                profileImage: profileImage,
                key: 'id3',
                location: 'London, United Kingdom',
                picture: testImage,
                comment: 'First trip to New York!',
                timePosted: '5 hours ago'
            },
            {
                username: 'subwaydude_',
                profileImage: profileImage,
                key: 'id4',
                location: 'London, United Kingdom',
                picture: testImage,
                comment: 'First trip to New York!',
                timePosted: '5 hours ago'
            }
        ],
        user: {
            username: 'michaelmly',
            profileImage: profileImage
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.posts}
                    renderItem={({ item }) => (
                        <UserPost
                            username={item.username}
                            profileImage={profileImage}
                            location={item.location}
                            picture={item.picture}
                            comment={item.comment}
                            timePosted={item.timePosted}
                            addCommentImage={this.state.user.profileImage} />
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 15
    }
})