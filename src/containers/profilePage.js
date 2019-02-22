import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';


export default class ProfilePage extends Component {

    render() {
        return (

            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.profileInfo}>
                        <Text>Profile follows</Text>
                    </View>

                    <View style={styles.profileBio}>
                        <Text>Bio text</Text>
                    </View>

                    <View style={styles.menuBar}>
                        <Text>menu bar</Text>
                    </View>

                    <View style={styles.imageContainer}>
                        <View style={styles.images}>

                        </View>
                        <View style={styles.images}>

                        </View>
                        <View style={styles.images}>

                        </View>
                        <View style={styles.images}>

                        </View>
                        <View style={styles.images}>

                        </View>
                        <View style={styles.images}>

                        </View>
                        <View style={styles.images}>

                        </View>
                        <View style={styles.images}>

                        </View>
                        <View style={styles.images}>

                        </View>
                        <View style={styles.images}>

                        </View>
                        <View style={styles.images}>

                        </View>

                    </View>
                </ScrollView>
            </View>


        );
    }
}

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 15
    },

    profileInfo: {
        height: 100,
        backgroundColor: 'pink'
    },

    profileBio: {
        height: 100,
        backgroundColor: 'lightblue'
    },

    menuBar: {
        height: 50,
        backgroundColor: 'lightgreen'
    },

    imageContainer: {
        backgroundColor: 'red',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    images: {
        width: screenWidth / 3 - 2,
        height: screenWidth / 3,
        backgroundColor: 'blue',
        margin: 1
    }
})