import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import UserPost from '../components/UserPost';
import testImage from "../assets/images/testimage.jpg";
import profileImage from "../assets/images/profileimage.jpg";
import img2 from "../assets/images/ti2.jpg";
import img3 from "../assets/images/ti3.jpg";
import img4 from "../assets/images/ti4.jpg";
import img6 from "../assets/images/ti6.jpg";
import img9 from "../assets/images/ti9.jpg";
import pi2 from "../assets/images/pi2.jpg";

export default class HomePage extends Component {
    state = {
        posts: [
            {
                username: 'ozzy_dl',
                profileImage: pi2,
                key: 'id1',
                location: 'Bali, Indonesia',
                picture: img2,
                comment: "Without washing the brush, I'm gonna go right into some Van Dyke Brown, some Burnt Umber, and a little bit of Sap Green.",
                timePosted: '1 hours ago'
            },
            {
                username: 'therageart',
                profileImage: img6,
                key: 'id2',
                location: 'Sideman, Bali',
                picture: img3,
                comment: "In painting, you have unlimited power. You have the ability to move mountains. Let's give him a friend too. Everybody needs a friend.",
                timePosted: '5 hours ago'
            },
            {
                username: 'michaelmly',
                profileImage: profileImage,
                key: 'id3',
                location: 'Lake District, United Kingdom',
                picture: testImage,
                comment: "You can create the world you want to see and be a part of. You have that power.",
                timePosted: '6 hours ago'
            },
            {
                username: 'subwaydude_',
                profileImage: img9,
                key: 'id4',
                location: 'Nusa, Bali',
                picture: img4,
                comment: "If these lines aren't straight, your water's going to run right out of your painting and get your floor wet.",
                timePosted: '7 hours ago'
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
                            profileImage={item.profileImage}
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